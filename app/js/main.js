const rail = document.querySelectorAll(".rail");
const pickerTrigger = document.querySelector(".picker-container");
const colorRail = document.querySelector(".color-rail");
const colorTrigger = document.querySelectorAll(".color-trigger");
const tableSidebar = document.querySelector(".table-list-sidebar");
const sidebarShow = document.querySelector(".sidebar-trigger");
const sidebarHide = document.querySelector(".sidebar-display");

pickerTrigger.addEventListener("click", ( e ) => {
  $("#color-modal").modal("toggle");
});

colorTrigger.forEach((item) => {
  item.addEventListener("click", ( e ) => {
    e.preventDefault();
    colorRail.classList.toggle("orange");
  });
});

sidebarShow.addEventListener("click", ( e ) => {
  e.preventDefault();

  tableSidebar.classList.toggle("hide");
});

sidebarHide.addEventListener("click", ( e ) => {
  e.preventDefault();

  tableSidebar.classList.add("hide");
})
