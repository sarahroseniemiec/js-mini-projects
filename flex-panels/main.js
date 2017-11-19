document.addEventListener("DOMContentLoaded", function () {
  const panels = document.querySelectorAll(".panel");
  // for (var panel in panels) {
  //   panel.addEventListener("click", function (e) {
  //     console.log("i was clicked");
  //   })
  // }
  function toggleOpen () {
    this.classList.toggle("open");
  }
  function toggleActive (e) {
    if (e.propertyName.includes('flex')) {
      this.classList.toggle("open-active");

    }
  }

  for(let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", toggleOpen);
    panels[i].addEventListener("transitionend", toggleActive);
  }
});
