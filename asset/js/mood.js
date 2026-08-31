var currHour = new Date().getHours();
var moodDesc = document.getElementById("mood-desc");
var moodGifEmbed = document.getElementById("mood-gif-embed");
// dawn 3-5, morning 6-11, lunch 12 afternoon 13-17, dinner 18, night 19-22, late 23-2

dawnMoodMsg = [
  "wow you’re up so early… or did you not sleep yet?",
  "the birds aren't even awake yet bro what are you doing here :O",
  "damm someone hasnt slept yet, or is it just me? :<",
  "the sun is barely up and you’re already here, what are you doing",
  "i think the bed miss you",
];

morningMoodMsg = [
  "good morning! what brought you here so early? :O",
  "did you get enough sleep or are you a walking zombie rn?",
  "the sun is up and so are you, good morning!",
  "suprise and shines, good morning! hope you slept well",
  "good morning! hope you have a good day ahead :>",
  "have a great day!",
];

lunchMoodMsg = [
  "wat did you have for lunch? share pls",
  "LUNCH TIMEEE! drop everything and go eat :>",
  "lunch!!! let go eat something",
  "how was you lunch? mine bad :<",
  "meow woof bark, lunch time!",
];

afternoonMoodMsg = [
  "that post-lunch food coma is hitting hard isn’t it",
  "must be the lunch isn't it",
  "are you sleepy or is it just me, the afternoon slump is real",
];

dinnerMoodMsg = [
  "how was your dinner :>",
  "me want dinner asap",
  "wat did you have for dinner? share pls",
  "the best part of the day is here, dinner time! hope you’re eating something yummy",
  "sweat, sweat baby, kih kih kih, rrrar, sweat sweat, woo woo",
];

nightMoodMsg = [
  "tbh i think you should go to bed, it’s getting late",
  "what brought you here at this time",
  "you should be sleeping rn, go to bed",
  "i think you should go to bed, it’s getting late",
];

lateMoodMsg = [
  "sleep pls it's too late man",
  "why the f*uk are you browsing the web at this time, go to bed",
  "gurl what the f*uk are you doing here rn",
  "damm trying to pull an all nigher huh",
];

switch (currHour) {
  case 3:
  case 4:
  case 5:
    moodDesc.innerHTML =
      dawnMoodMsg[Math.floor(Math.random() * dawnMoodMsg.length)];
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    moodDesc.innerHTML =
      morningMoodMsg[Math.floor(Math.random() * morningMoodMsg.length)];
    break;
  case 12:
    moodDesc.innerHTML =
      lunchMoodMsg[Math.floor(Math.random() * lunchMoodMsg.length)];
    break;
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    moodDesc.innerHTML =
      afternoonMoodMsg[Math.floor(Math.random() * afternoonMoodMsg.length)];
    break;
  case 18:
    moodDesc.innerHTML =
      dinnerMoodMsg[Math.floor(Math.random() * dinnerMoodMsg.length)];
    break;
  case 19:
  case 20:
  case 21:
  case 22:
    moodDesc.innerHTML =
      nightMoodMsg[Math.floor(Math.random() * nightMoodMsg.length)];
    break;
  case 23:
  case 0:
  case 1:
  case 2:
    moodDesc.innerHTML =
      lateMoodMsg[Math.floor(Math.random() * lateMoodMsg.length)];
    break;
}

dawnMoodGif = [
  "https://media1.tenor.com/m/Sye8k45GuAsAAAAd/spavam.gif",
  "https://media1.tenor.com/m/9Ik02IDXcekAAAAd/cat-cat-meme.gif",
  "https://media1.tenor.com/m/rNCdBEqBKjoAAAAd/sad-cat.gif",
  "https://media1.tenor.com/m/z0uKdWiZhscAAAAd/zhouzhou-orange.gif",
  "https://media1.tenor.com/m/CYU4Ghlo-gUAAAAd/so-tired-tired.gif",
  "https://media1.tenor.com/m/o6xkg27TjqcAAAAd/sleepy-cat-baby-cat.gif",
];

morningMoodGif = [
  "https://media1.tenor.com/m/IdmabSxlbhQAAAAd/bed-cute.gif",
  "https://media1.tenor.com/m/JPFmqyfM5TsAAAAd/cat-bap.gif",
  "https://media1.tenor.com/m/RPIFhCqqLNIAAAAd/catto.gif",
  "https://media1.tenor.com/m/cY5-7wEBtmsAAAAd/cat-tongue.gif",
  "https://media1.tenor.com/m/Wi29vRcR5pgAAAAd/cat-hello.gif",
  "https://media1.tenor.com/m/qU-MJF9XCjEAAAAd/good-morning-cat.gif",
];

lunchMoodGif = [
  "https://media1.tenor.com/m/k0JlK3DRvPgAAAAd/cat-eating.gif",
  "https://media1.tenor.com/m/Fbp4OCt9hDgAAAAd/cat-bowl.gif",
  "https://media1.tenor.com/m/yZlfQbKWM08AAAAd/cat-eating-fast.gif",
  "https://media1.tenor.com/m/uSfGQ_lAQKoAAAAd/cat-eat.gif",
  "https://media1.tenor.com/m/P3mi55jWSxAAAAAd/cat-big-bite.gif",
  "https://media1.tenor.com/m/hlLIv7wM4-UAAAAd/cat-cat-eat.gif",
  "https://media1.tenor.com/m/ZKgVLo3-yC4AAAAd/cat-stealing-food.gif",
  "https://media1.tenor.com/m/JjBICgYku9kAAAAd/cat-eat-cat-eat-burger.gif",
];

afternoonMoodGif = [
  "https://media1.tenor.com/m/PIHTdO1bsI8AAAAd/cat-cat-meme.gif",
  "https://media1.tenor.com/m/de50d_Ztv3AAAAAd/bleh-cat.gif",
  "https://media1.tenor.com/m/nndgvQ1tE6QAAAAd/%D1%87%D1%91.gif",
];

dinnerMoodGif = [
  "https://media1.tenor.com/m/hDU4XrBRmigAAAAd/cat-salad-smudge-the-cat.gif",
  "https://media1.tenor.com/m/SmQ8YmdLZlEAAAAd/kitty-cat.gif",
  "https://media1.tenor.com/m/XfZzg9iKcecAAAAd/silly-gato-kitty.gif",
  "https://media1.tenor.com/m/wcDBzYCQyOgAAAAd/ice-cream-cat.gif",
  "https://media1.tenor.com/m/W-SIpVJsIlkAAAAC/kitty-ice-cream.gif",
  "https://media1.tenor.com/m/8CFTFgnQSTsAAAAd/stepan-stepan-cat.gif",
  "https://media1.tenor.com/m/bfpCE4UVnswAAAAd/cat-ringing.gif",
];

nightMoodGif = [
  "https://media1.tenor.com/m/Tl-AZDoksDEAAAAd/sleep-sleeping.gif",
  "https://media1.tenor.com/m/EkHyvH5ArmwAAAAd/kitty-sleepy.gif",
  "https://media1.tenor.com/m/5c9RaitzJmAAAAAd/cat-sleeping.gif",
  "https://media1.tenor.com/m/TBlFk3B31vAAAAAd/cat-cat-meme.gif",
  "https://media1.tenor.com/m/GXAlZdv03cQAAAAd/sleepy-cat-sleep.gif",
  "https://media1.tenor.com/m/xUx5xVyX-2wAAAAd/cat-sleepy-cat.gif",
];

lateMoodGif = [
  "https://media1.tenor.com/m/aGj-frNYMFEAAAAd/cat-cat-dance.gif",
  "https://media1.tenor.com/m/1eZJF7qDOIQAAAAd/beatboxing-cat-cat.gif",
  "https://media1.tenor.com/m/kNUwUsb81U4AAAAd/cat-sleep-cat-on-phone.gif",
  "https://media1.tenor.com/m/w1I8wOhGkL4AAAAd/cats-cat.gif",
];

switch (currHour) {
  case 3:
  case 4:
  case 5:
    moodGifEmbed.src =
      dawnMoodGif[Math.floor(Math.random() * dawnMoodGif.length)];
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    moodGifEmbed.src =
      morningMoodGif[Math.floor(Math.random() * morningMoodGif.length)];
    break;
  case 12:
    moodGifEmbed.src =
      lunchMoodGif[Math.floor(Math.random() * lunchMoodGif.length)];
    break;
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    moodGifEmbed.src =
      afternoonMoodGif[Math.floor(Math.random() * afternoonMoodGif.length)];
    break;
  case 18:
    moodGifEmbed.src =
      dinnerMoodGif[Math.floor(Math.random() * dinnerMoodGif.length)];
    break;
  case 19:
  case 20:
  case 21:
  case 22:
    moodGifEmbed.src =
      nightMoodGif[Math.floor(Math.random() * nightMoodGif.length)];
    break;
  case 23:
  case 0:
  case 1:
  case 2:
    moodGifEmbed.src =
      lateMoodGif[Math.floor(Math.random() * lateMoodGif.length)];
    break;
}
