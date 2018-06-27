"use strict";

var pickerTrigger = document.querySelector(".picker-container");
var colorRail = document.querySelector(".color-rail");
var colorTrigger = document.querySelectorAll(".color-trigger");
var tableSidebar = document.querySelector(".table-list-sidebar");
var sidebarShow = document.querySelector(".sidebar-trigger");
var sidebarHide = document.querySelector(".sidebar-display");
var tableRow = document.querySelector(".table-row:nth-of-type(1)");
var newRowChild = document.querySelector(".new-row");
var minusButton = document.querySelector(".minus");
var rowButtons = document.querySelector(".add-btns");

var forward = document.querySelector("#speed");
var back = document.querySelector("#negative");
var videos = document.querySelectorAll(".video");
var intervalRewind = void 0;

// updated stuffs
var colorPickerClick = document.querySelector(".color-picker-img");
var close = document.querySelector(".close-modal");

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

// tableRow.addEventListener("focus", ( e ) => {
//   $('[data-toggle="popover"]').popover();
//   e.target.addEventListener("keypress", keypressListen);
// });

// tableRow.addEventListener("click", ( e ) => {
//   e.preventDefault();

//   rowButtons.classList.toggle("hide");
// });

// minusButton.addEventListener("click", ( e ) => {
//   e.preventDefault();
//   addRow();
// })

// sidebarShow.addEventListener("click", ( e ) => {
//   e.preventDefault();

//   tableSidebar.classList.toggle("display");
// });

// sidebarHide.addEventListener("click", ( e ) => {
//   e.preventDefault();

//   tableSidebar.classList.toggle("display");
// });

// stuff

if (pickerTrigger) {

  pickerTrigger.addEventListener("click", function (e) {
    $("#color-modal").modal("toggle");
  });

  close.addEventListener("click", function (e) {
    $("#color-modal").modal("toggle");
  });

  colorPickerClick.addEventListener("click", function (e) {
    colorRail.classList.toggle("orange");
  });
}

// video stuff
if (videos) {
  var reset = function reset(element) {
    element.pause();
    element.currentTime = 0;
  };

  var play = function play(element) {
    element.play();
  };

  var _back = function _back(element) {
    intervalRewind = setInterval(function () {
      element.playbackRate = 1.0;
      if (element.currentTime == 0) {
        clearInterval(intervalRewind);
        element.pause();
      } else {
        element.currentTime -= 0.05;
      }
    }, 3);
  };

  videos.forEach(function (item) {
    item.addEventListener("mouseenter", function (e) {
      play(item);
    });

    item.addEventListener("mouseleave", function (e) {
      _back(item);
    });
  });
}