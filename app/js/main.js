const pickerTrigger = document.querySelector(".picker-container");
const colorRail = document.querySelector(".color-rail");
const colorTrigger = document.querySelectorAll(".color-trigger");
const tableSidebar = document.querySelector(".table-list-sidebar");
const sidebarShow = document.querySelector(".sidebar-trigger");
const sidebarHide = document.querySelector(".sidebar-display");
const tableRow = document.querySelector(".table-row:nth-of-type(1)");
const newRowChild = document.querySelector(".new-row");

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

pickerTrigger.addEventListener("click", ( e ) => {
  $("#color-modal").modal("toggle");
});

colorTrigger.forEach((item) => {
  item.addEventListener("click", ( e ) => {
    e.preventDefault();
    colorRail.classList.toggle("orange");
  });
});

tableRow.addEventListener("focus", ( e ) => {
  $('[data-toggle="popover"]').popover();
  e.target.addEventListener("keypress", keypressListen);
});

sidebarShow.addEventListener("click", ( e ) => {
  e.preventDefault();

  tableSidebar.classList.toggle("display");
});

sidebarHide.addEventListener("click", ( e ) => {
  e.preventDefault();

  tableSidebar.classList.toggle("display");
});
