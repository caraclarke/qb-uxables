const rail = document.querySelectorAll(".rail");
const railContainer = document.querySelector(".rail-container");
const colorRail = document.querySelector(".color-rail");
const colorTrigger = document.querySelectorAll(".color-trigger");
const tableSidebar = document.querySelector(".table-list-sidebar");
const sidebarHide = document.querySelector(".sidebar-display");

railContainer.addEventListener("click", ( e ) => {
  $("#color-modal").modal("toggle");
});

colorTrigger.forEach((item) => {
  item.addEventListener("click", ( e ) => {
    e.preventDefault();
    colorRail.classList.toggle("orange");
  });
});

sidebarHide.addEventListener("click", ( e ) => {
  e.preventDefault();

  tableSidebar.classList.add("hide");
})
