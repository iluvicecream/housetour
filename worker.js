import { env } from "cloudflare:workers";

const chageeApiBase = env.CHAGEE_API_BASE;
const chageeUserId = env.CHAGEE_USER_ID;
const chageeAuthToken = env.CHAGEE_AUTH_TOKEN;

export default {
  async fetch(request, env, ctx) {
    var reqUrl = chageeApiBase + '/api/navigation/order/list';
    console.info({ message: 'Requesting Chagee API', url: reqUrl, userId: chageeUserId });
    var reqOptions = {
        method: 'POST',
        headers: {
            'language': 'en-us',
            'Authorization': chageeAuthToken,
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: chageeUserId , pageNum: 1, pageSize: 10 })
    };
    var response = await fetch(reqUrl, reqOptions);
    var data = await response.json();

    //if data.errcode is not 0, return error
    if (data.errcode !== "0") {
        console.error({ message: 'Chagee API returned error', errcode: data.errcode, errmsg: data.errmsg });
        return new Response(JSON.stringify({ error: data.errmsg }), {
            status: 500,
            headers: { 'content-type': 'application/json',
                //add CORS headers
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
             },
        });
    }

    //access data.data.pageList[0].orderNo and return it as json
    if (data.data && data.data.pageList && data.data.pageList.length > 0) {
        var pickupNo = data.data.pageList[0].pickupNo;
        var orderTime = data.data.pageList[0].orderTime;
        var payAmount = data.data.pageList[0].payAmount;
        var storeName = data.data.pageList[0].storeName;
        var currency = data.data.pageList[0].currency;
        var orderItems = [];
        for (var i = 0; i < data.data.pageList[0].orderItems.length; i++) {
            var item = data.data.pageList[0].orderItems[i];
            orderItems.push({
                num: item.num,
                salePrice: item.salePrice,
                skuName: item.skuName,
                skuImage: item.skuImage,
                specInfo: item.specInfos[0].specOptionName,
                attribute1: item.attributes[0].attributeName,
                attribute2: item.attributes[1].attributeName,
            });
        }
        console.info({ message: 'Chagee API returned order details', pickupNo: pickupNo, orderTime: orderTime, payAmount: payAmount, storeName: storeName, currency: currency, orderItems: orderItems });
        return new Response(JSON.stringify({ pickupNo: pickupNo, orderTime: orderTime, payAmount: payAmount, storeName: storeName, currency: currency, orderItems: orderItems }), {
            headers: { 'content-type': 'application/json',
                //add CORS headers
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
             },
        });
    }

    return new Response(JSON.stringify({ error: 'No order found' }), {
      headers: { 'content-type': 'application/json',
            //add CORS headers
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
       },
    });
  }
};