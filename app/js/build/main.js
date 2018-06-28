"use strict";

var pickerTrigger = document.querySelector(".picker-container");
var colorRail = document.querySelector(".table-sidebar");
var sidebarShow = document.querySelector(".sidebar-trigger");
var sidebarHide = document.querySelector(".sidebar-display");

// rows
var topRowChild = document.querySelector(".top-new-row");
var bottomRowChild = document.querySelector(".bottom-new-row");
var topRow = document.querySelector(".top-row");
var bottomRow = document.querySelector(".bottom-row");
var tableRow = document.querySelectorAll(".table-row");

// videos
var videos = document.querySelectorAll(".video");
var intervalRewind = void 0;

// updated stuffs
var colorPickerClick = document.querySelector(".color-picker-img");
var close = document.querySelector(".close-modal");
var col = document.querySelector(".col");
var tableSidebar = document.querySelector(".table-list-sidebar");

// record details
var recordDetailNav = document.querySelector(".manager-row");

if (recordDetailNav) {
  recordDetailNav.addEventListener("click", function (e) {
    e.preventDefault();

    // navigate somewhere
  });
}

if (col) {
  col.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "record-detail.html";
  });
}

if (colorRail) {
  sidebarShow.addEventListener("click", function (e) {
    e.preventDefault();

    tableSidebar.classList.toggle("display");
  });

  sidebarHide.addEventListener("click", function (e) {
    e.preventDefault();

    tableSidebar.classList.toggle("display");
  });

  tableSidebar.addEventListener("click", function (e) {
    // navigate to somewhere
  });
}

if (topRow) {
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
    var el = element;
    intervalRewind = setInterval(function () {
      el.playbackRate = 0.75;
      if (el.currentTime === 0) {
        clearInterval(intervalRewind);
        el.pause();
      } else {
        el.currentTime -= 0.1;
      }
    }, 4);
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