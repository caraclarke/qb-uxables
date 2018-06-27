"use strict";

var pickerTrigger = document.querySelector(".picker-container");
var colorRail = document.querySelector(".color-rail");
var colorTrigger = document.querySelectorAll(".color-trigger");
var tableSidebar = document.querySelector(".table-list-sidebar");
var sidebarShow = document.querySelector(".sidebar-trigger");
var sidebarHide = document.querySelector(".sidebar-display");
var tableRow = document.querySelector(".table-row:nth-of-type(1)");
var newRowChild = document.querySelector(".new-row");

var addRow = function addRow() {
  tableRow.parentNode.prepend(newRowChild);
  newRowChild.classList.remove("hide");
};

var keypressListen = function keypressListen(e) {
  // 61 for plus
  if (e.keyCode === 31) {
    // minus
    addRow();
  }
};

pickerTrigger.addEventListener("click", function (e) {
  $("#color-modal").modal("toggle");
});

colorTrigger.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    colorRail.classList.toggle("orange");
  });
});

tableRow.addEventListener("focus", function (e) {
  $('[data-toggle="popover"]').popover();
  e.target.addEventListener("keypress", keypressListen);
});

sidebarShow.addEventListener("click", function (e) {
  e.preventDefault();

  tableSidebar.classList.toggle("hide");
});

sidebarHide.addEventListener("click", function (e) {
  e.preventDefault();

  tableSidebar.classList.add("hide");
});