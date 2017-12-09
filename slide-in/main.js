document.addEventListener("DOMContentLoaded", function() {

  const sliderImages = document.querySelectorAll(".slide-in");

  function checkSlide (e) {
    for (let i = 0; i < sliderImages.length; i++) {
      //slide in halfway through the image
      const slideInAt = (window.scrollY + innerHeight) - (sliderImages[i].height / 2);
      //we want the image to slide back out once we reach the bottom of the image
      const imageBottom = sliderImages[i].offsetTop + sliderImages[i].height;
      const isHalfShown = slideInAt > sliderImages[i].offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
  
      // console.log(`slide in at: ${slideInAt}`);
      // console.log(`image bottom: ${imageBottom}`);
      // console.log(`is half shown: ${isHalfShown}`);
      // console.log(`is not scolled past: ${isNotScrolledPast}`);

      if(isHalfShown && isNotScrolledPast) {
        sliderImages[i].classList.add("active");
      } else {
        sliderImages[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", debounce(checkSlide));


  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

})
