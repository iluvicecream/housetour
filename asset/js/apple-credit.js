const applebtn = document.getElementById("applebtn");
applebtn.addEventListener("click", function () {
  confetti({
    spread: 180,
    ticks: 500,
    gravity: 1,
    decay: 0.94,
    startVelocity: 30,
    particleCount: 12,
    scalar: 6,
    shapes: ["image"],
    shapeOptions: {
      image: [
        {
          src: "asset/img/favicon-32x32.png",
          width: 32,
          height: 32,
        },
      ],
    },
  });
});
