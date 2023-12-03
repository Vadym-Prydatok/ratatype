import { gsap } from "gsap/dist/gsap";

const logo = document.querySelector("#logo");
const star = document.querySelector("#star");
const greetStar = document.querySelector("#hand_star");

gsap.from(logo, {
  duration: 1.6,
  opacity: 0,
  x: -200,
  ease: "elastic.out(1,0.5)",
});

gsap.fromTo(
  "main div section > *",
  {
    opacity: 0,
    y: -20,
  },
  { 
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
  },
);

gsap.from(star, {
  delay: 0.5,
  duration: 1,
  opacity: 0,
  x: -50,
  ease: "power2.out",
});

gsap.from(greetStar, {
  delay: 0.5,
  duration: 1,
  opacity: 0,
  x: -50,
  ease: "power2.out",
});

const tl = gsap.timeline({
  delay: 1,
  repeat: -1,
  repeatDelay: 6,
});

tl.from(greetStar, {
  rotate: 0,
})
.to(greetStar, {
  rotate: -24,
  scale: 0.9,
})
.to(greetStar, {
  rotate: 10,
  scale: 0.95,
})
.to(greetStar, {
  rotate: 0,
  scale: 1,
  ease: "back.out(2)",
});