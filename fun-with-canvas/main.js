document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('draw');
  const context = canvas.getContext('2d');
  const lineWidthPicker = document.getElementById('line-width');
  const colorPicker = document.getElementById('color');
  canvas.width = window.innerWidth;
  canvas. height = window.innerHeight;
  // context.strokeStyle = '#55dab6';
  context.lineJoin = 'round';
  context.lineCap = 'round';
  context.lineWidth = lineWidthPicker.value;
  context.strokeStyle = colorPicker.value;

  let isDrawing = false;
  let lastX;
  let lastY;
  // let hue = 0;

  function draw (e) {
    if(!isDrawing) return;//stop function from running when they are not moused down

    // context.strokeStyle = `hsl(${hue}, 100%, 75%)`;

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    // hue ++;
    // if (hue >= 360) {
    //     hue = 0;
    // }
  }

  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
  });
  canvas.addEventListener("mouseup", () => isDrawing = false);
  canvas.addEventListener("mouseout", () => isDrawing = false);

  lineWidthPicker.addEventListener("change", (e) => {
    context.lineWidth = e.target.value;
  });

  colorPicker.addEventListener("change", (e) => {
    context.strokeStyle = e.target.value;
  });





})
