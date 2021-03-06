const pickerTrigger = document.querySelector(".picker-container");
const colorRail = document.querySelector(".table-sidebar");
const sidebarShow = document.querySelector(".sidebar-trigger");
// const sidebarHide = document.querySelector(".sidebar-display");

// rows
const topRowChild = document.querySelector(".top-new-row");
const bottomRowChild = document.querySelector(".bottom-new-row");
const topRow = document.querySelector(".top-row");
const bottomRow = document.querySelector(".bottom-row");
const tableRow = document.querySelectorAll(".table-row");

// videos
const videos = document.querySelectorAll(".video");
let intervalRewind;

// updated stuffs
const colorPickerClick = document.querySelector(".color-picker-img");
const close = document.querySelector(".close-modal");
const col = document.querySelector(".col");
const tableSidebar = document.querySelector(".table-list-sidebar");

// record details
const recordDetailNav = document.querySelector(".manager-row");

if ( recordDetailNav ) {
  recordDetailNav.addEventListener("click", ( e ) => {
    e.preventDefault();

    window.location.href = "index.html";
  })
}


if ( col ) {
  col.addEventListener("click", ( e ) => {
    e.preventDefault();
    window.location.href = "record-detail.html";
  })
}

if ( colorRail ) {
  sidebarShow.addEventListener("click", ( e ) => {
    e.preventDefault();

    tableSidebar.classList.toggle("display");
  });

  tableSidebar.addEventListener("click", ( e ) => {
    window.location.href="table-view.html";
  });
}

if ( topRow ) {
  tableRow.forEach((item) => {
    item.addEventListener("click", ( e ) => {
      e.preventDefault();

      $("#row-modal").modal("toggle");
    });
  });

  topRow.addEventListener("click", ( e ) => {
    topRowChild.classList.remove("hide");
  });

  bottomRow.addEventListener("click", ( e ) => {
    bottomRowChild.classList.remove("hide");
  });
}

// stuff

if ( pickerTrigger ) {
  pickerTrigger.addEventListener("click", ( e ) => {
    $("#color-modal").modal("toggle");
  });

  close.addEventListener("click", ( e ) => {
    $("#color-modal").modal("toggle");
  });

  colorPickerClick.addEventListener("click", ( e ) => {
    colorRail.classList.toggle("orange");
  });
}

// video stuff
if ( videos ) {
  const play = (element) => {
    element.play();
  };

  const rewind = ( element ) => {
    const el = element;
    intervalRewind = setInterval(() => {
      el.playbackRate = 0.75;
      if (el.currentTime === 0) {
        clearInterval(intervalRewind);
        el.pause();
      } else {
        el.currentTime -= 0.1;
      }
    }, 4);
  };

  videos.forEach((item) => {
    item.addEventListener("mouseenter", ( e ) => {
      play(item);
    });

    item.addEventListener("mouseleave", ( e ) => {
      rewind(item);
    });
  });
}
