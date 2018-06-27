"use strict";

var pickerTrigger = document.querySelector(".picker-container");
var colorRail = document.querySelector(".color-rail");
var colorTrigger = document.querySelectorAll(".color-trigger");
var tableSidebar = document.querySelector(".table-list-sidebar");
var sidebarShow = document.querySelector(".sidebar-trigger");
var sidebarHide = document.querySelector(".sidebar-display");

// const tableRow = document.querySelector(".table-row:nth-of-type(1)");
var topRowChild = document.querySelector(".top-new-row");
var bottomRowChild = document.querySelector(".bottom-new-row");
var minusButton = document.querySelector(".minus");
var rowButtons = document.querySelector(".add-btns");

// rows
var topRow = document.querySelector(".top-row");
var bottomRow = document.querySelector(".bottom-row");
var tableRow = document.querySelectorAll(".table-row");
var topRowParent = document.querySelector(".top-row-container");
var bottomRowParent = document.querySelector(".bottom-row-container");

// videos
var forward = document.querySelector("#speed");
var back = document.querySelector("#negative");
var videos = document.querySelectorAll(".video");
var intervalRewind = void 0;

// updated stuffs
var colorPickerClick = document.querySelector(".color-picker-img");
var close = document.querySelector(".close-modal");

// const addRow = () => {
//   tableRow.parentNode.prepend(newRowChild);
//   newRowChild.classList.remove("hide");
// };

// const keypressListen = ( e ) => {
//   // 61 for plus
//   if ( e.keyCode === 31 ) {
//     // minus
//     addRow();
//   }
// }

if (colorRail) {
  sidebarShow.addEventListener("click", function (e) {
    e.preventDefault();

    tableSidebar.classList.toggle("display");
  });

  sidebarHide.addEventListener("click", function (e) {
    e.preventDefault();

    tableSidebar.classList.toggle("display");
  });
}

if (tableRow) {
  tableRow.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      $("#row-modal").modal("toggle");
    });
  });

  topRow.addEventListener("click", function (e) {
    topRowChild.classList.remove("hide");
  });

  bottomRow.addEventListener("click", function (e) {
    bottomRowChild.classList.remove("hide");
  });
}

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
  var play = function play(element) {
    element.play();
  };

  var rewind = function rewind(element) {
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
      rewind(item);
    });
  });
}