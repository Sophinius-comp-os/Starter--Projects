"use strict";

const reviews = [
  {
    id: 1,
    name: "Sesero",
    pic: "pic-2.png",
    text: "I love doing what inspires me and what is good for all of us and most of all help the community around",
  },
  {
    id: 2,
    name: "Kim",
    pic: "pic-3.png",
    text: "I am a proficient javascript developer specialized in react js and can do all fullstack roles of a javascript developer",
  },
  {
    id: 3,
    name: "Koech",
    pic: "pic-4.png",
    text: "Coding is not hard but will become hard if you believe that",
  },
  {
    id: 4,
    name: "Jane",
    pic: "pic-5.png",
    text: "I know Munyiri well and recommend him for this job, he is the best fit you can find for the post ",
  },
  {
    id: 5,
    name: "Kimutai",
    pic: "pic-6.png",
    text: "you should hire the guy right away",
  },
  {
    id: 6,
    name: "Maximos",
    pic: "pic-7.png",
    text: "I'll work with guy in my team and sea how about it as he seems very experienced and professional",
  },
];
//const container = document.querySelectorAll(".container");
const nam = document.getElementById("name");
const pic = document.getElementById("pic");
const text = document.getElementById("text");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const random = document.querySelector(".random");

//setting initial start item
let current = 0;

//function to show content after DOM loads
const showReview = function () {
  const item = reviews[current];
  // test console.log(item.name);

  pic.src = item.pic;
  nam.textContent = item.name;
  text.textContent = item.text;
};

//implementing right button
btnRight.addEventListener("click", function () {
  current = current + 1;
  if (current > reviews.length) {
    current = 0;
  }

  showReview();
});
btnLeft.addEventListener("click", function () {
  current = current - 1;
  if (current === 0) {
    current = reviews.length;
  }
  showReview();
});
random.addEventListener("click", function () {
  //generating random number
  let randomNumber = Math.trunc(Math.random() * reviews.length) + 1;
  //console.log(randomNumber);
  current = randomNumber;
  console.log(current);
  showReview();
});