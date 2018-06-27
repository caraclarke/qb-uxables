const pickerTrigger = document.querySelector(".picker-container");
const colorRail = document.querySelector(".color-rail");
const colorTrigger = document.querySelectorAll(".color-trigger");
const tableSidebar = document.querySelector(".table-list-sidebar");
const sidebarShow = document.querySelector(".sidebar-trigger");
const sidebarHide = document.querySelector(".sidebar-display");
const tableRow = document.querySelector(".table-row:nth-of-type(1)");
const newRowChild = document.querySelector(".new-row");
const minusButton = document.querySelector(".minus");
const rowButtons = document.querySelector(".add-btns");

const forward = document.querySelector("#speed");
const back = document.querySelector("#negative");
const videos = document.querySelectorAll(".video");
let intervalRewind;

// updated stuffs
const colorPickerClick = document.querySelector(".color-picker-img");
const close = document.querySelector(".close-modal");

const addRow = () => {
  tableRow.parentNode.prepend(newRowChild);
  newRowChild.classList.remove("hide");
};

const keypressListen = ( e ) => {
  // 61 for plus
  if ( e.keyCode === 31 ) {
    // minus
    addRow();
  }
}

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
    intervalRewind = setInterval(function(){
       element.playbackRate = 1.0;
       if(element.currentTime == 0) {
         clearInterval(intervalRewind);
         element.pause();
       } else {
        element.currentTime -= 0.05;
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
