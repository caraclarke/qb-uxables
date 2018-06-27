"use strict";

var rail = document.querySelectorAll(".rail");
var pickerTrigger = document.querySelector(".picker-container");
var colorRail = document.querySelector(".color-rail");
var colorTrigger = document.querySelectorAll(".color-trigger");
var tableSidebar = document.querySelector(".table-list-sidebar");
var sidebarShow = document.querySelector(".sidebar-trigger");
var sidebarHide = document.querySelector(".sidebar-display");

pickerTrigger.addEventListener("click", function (e) {
  $("#color-modal").modal("toggle");
});

colorTrigger.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    colorRail.classList.toggle("orange");
  });
});

sidebarShow.addEventListener("click", function (e) {
  e.preventDefault();

  tableSidebar.classList.toggle("hide");
});

sidebarHide.addEventListener("click", function (e) {
  e.preventDefault();

  tableSidebar.classList.add("hide");
});