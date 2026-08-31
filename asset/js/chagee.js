// fetch the chagee order data from the worker
// perr.dev/chagee.api/
// response format
/*
{
  "pickupNo": "T0078",
  "orderTime": "15/08/2026 14:45:11",
  "payAmount": "115.00",
  "storeName": "CHAGEE Central Westgate",
  "currency": "฿",
  "orderItems": [
    {
      "num": 1,
      "salePrice": "115.00",
      "skuName": "BO·YA Jasmine Green Milk Tea",
      "skuImage": "https://chagee-management-bucket-sea.oss-ap-southeast-1.aliyuncs.com/image/2026/07/01/2072366406835294208.png",
      "specInfo": "Large",
      "attribute1": "Slightly sweet",
      "attribute2": "Hot"
    }
  ]
}
            */

fetch("https://perr.dev/chagee.api.worker/")
  .then((response) => response.json())
  .then((data) => {
    console.log("Chagee order data:", data);
    const showReceipt = () => {
      document.querySelector(".receipt-loading").remove();
      document.querySelector(".receipt").style.display = "block";
      document.querySelector(".pickupNo").textContent = data.pickupNo;
      document.querySelector(".orderTime").textContent = data.orderTime;
      document.querySelector(".payAmount").textContent =
        data.payAmount + data.currency;
      document.querySelector(".storeName").textContent = data.storeName;

      const orderItemsContainer = document.querySelector(".orderItems");
      orderItemsContainer.innerHTML = ""; // Clear existing items

      data.orderItems.forEach((item) => {
        const orderItemDiv = document.createElement("div");
        orderItemDiv.classList.add("orderItem");

        orderItemDiv.innerHTML = `
          <img class="skuImage" src="${item.skuImage}" alt="${item.skuName}">
          <p class="skuName">${item.skuName}</p>
          <p class="salePrice">${item.salePrice}</p>
          <p class="num">${item.num}</p>
          <p class="specInfo">${item.specInfo}</p>
          <p class="attribute1">${item.attribute1}</p>
          <p class="attribute2">${item.attribute2}</p>
        `;

        orderItemsContainer.appendChild(orderItemDiv);
      });
    };

    showReceipt();
  })
  .catch((error) => {
    console.error("Error fetching Chagee order data:", error);
  });
