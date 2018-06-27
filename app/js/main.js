const rail = document.querySelectorAll(".rail");
const greenRail = document.querySelector(".green-rail");
const orangeRail = document.querySelector(".orange-rail");
const greenTrigger = document.querySelector(".green-trigger");
const orangeTrigger = document.querySelector(".orange-trigger");
const tableSidebar = document.querySelector(".table-list-sidebar");
const sidebarHide = document.querySelector(".sidebar-display");

rail.forEach((item) => {
  item.addEventListener("click", ( e ) => {
    $("#color-modal").modal("toggle");
  });
});

// sidebar swaps
orangeTrigger.addEventListener("click", ( e ) => {
  e.preventDefault();
  if ( orangeRail.classList.contains("hide")) {
    orangeRail.classList.remove("hide");
    greenRail.classList.add("hide");
  } else {
    orangeRail.classList.remove("hide");
    greenRail.classList.add("hide");
  }
});

greenTrigger.addEventListener("click", ( e ) => {
  e.preventDefault();
  if ( greenRail.classList.contains("hide")) {
    greenRail.classList.remove("hide");
    orangeRail.classList.add("hide");
  } else {
    orangeRail.classList.remove("hide");
    greenRail.classList.add("hide");
  }
});

sidebarHide.addEventListener("click", ( e ) => {
  e.preventDefault();

  tableSidebar.classList.add("hide");
})