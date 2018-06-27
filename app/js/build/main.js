"use strict";

var rail = document.querySelectorAll(".rail");
var greenRail = document.querySelector(".green-rail");
var orangeRail = document.querySelector(".orange-rail");
var greenTrigger = document.querySelector(".green-trigger");
var orangeTrigger = document.querySelector(".orange-trigger");

rail.forEach(function (item) {
  item.addEventListener("click", function (e) {
    $("#color-modal").modal("toggle");
  });
});

// sidebar swaps
orangeTrigger.addEventListener("click", function (e) {
  e.preventDefault();
  if (orangeRail.classList.contains("hide")) {
    orangeRail.classList.remove("hide");
    greenRail.classList.add("hide");
  } else {
    orangeRail.classList.remove("hide");
    greenRail.classList.add("hide");
  }
});

greenTrigger.addEventListener("click", function (e) {
  e.preventDefault();
  if (greenRail.classList.contains("hide")) {
    greenRail.classList.remove("hide");
    orangeRail.classList.add("hide");
  } else {
    orangeRail.classList.remove("hide");
    greenRail.classList.add("hide");
  }
});