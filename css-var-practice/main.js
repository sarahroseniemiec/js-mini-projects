document.addEventListener("DOMContentLoaded", function () {
  //querySelectorAll returns a NodeList not an array so you do not have access to all the normal array methods etc.
  const inputs = document.querySelectorAll(".controls input");

  function handleUpdate () {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  for(var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", handleUpdate);
    inputs[i].addEventListener("mousemove", handleUpdate);
  }



});
