document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

  let lastChecked;

  function handleCheck (e) {

    let inBetween = false;
    if (e.shiftKey && this.checked) {
      for(let j = 0; j < checkboxes.length; j ++) {

        if (checkboxes[j] === this || checkboxes[j] === lastChecked) {
          inBetween = !inBetween;
        }
        if (inBetween) {
          checkboxes[j].checked = true;
        }
      }
    }
    lastChecked = this;
  }


  for (let i = 0; i < checkboxes.length; i ++) {
    checkboxes[i].addEventListener('click', handleCheck);
  }

});
