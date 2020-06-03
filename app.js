document.addEventListener("DOMContentLoaded", () => {
  const landTextDiv = document.querySelector(".text-div");
  const landImg = document.querySelector(".galaxy-img");

  const tl = new TimelineMax();

  tl.fromTo(
    landImg,
    3,
    { width: "0%" },
    { width: "100%", ease: Power2.easeInOut }
  ).fromTo(
    landTextDiv,
    1.2,
    { opacity: "0.3" },
    { opacity: "0.7", ease: Power2.easeInOut },
    "-=2.5"
  );
});
