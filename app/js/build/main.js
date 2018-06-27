"use strict";

var rail = document.querySelectorAll(".rail");
var railContainer = document.querySelector(".rail-container");
var colorRail = document.querySelector(".color-rail");
var colorTrigger = document.querySelectorAll(".color-trigger");
var tableSidebar = document.querySelector(".table-list-sidebar");
var sidebarHide = document.querySelector(".sidebar-display");

railContainer.addEventListener("click", function (e) {
  $("#color-modal").modal("toggle");
});

colorTrigger.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    colorRail.classList.toggle("orange");
  });
});

sidebarHide.addEventListener("click", function (e) {
  e.preventDefault();

  tableSidebar.classList.add("hide");
});