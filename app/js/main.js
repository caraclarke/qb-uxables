const pickerTrigger = document.querySelector(".picker-container");
const colorRail = document.querySelector(".color-rail");
const tableSidebar = document.querySelector(".table-list-sidebar");
const sidebarShow = document.querySelector(".sidebar-trigger");
const sidebarHide = document.querySelector(".sidebar-display");

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

if ( colorRail ) {
  sidebarShow.addEventListener("click", ( e ) => {
    e.preventDefault();

    tableSidebar.classList.toggle("display");
  });

  sidebarHide.addEventListener("click", ( e ) => {
    e.preventDefault();

    tableSidebar.classList.toggle("display");
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
      el.playbackRate = 1.0;
      if (el.currentTime === 0) {
        clearInterval(intervalRewind);
        el.pause();
      } else {
        el.currentTime -= 0.05;
      }
    }, 3);
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
