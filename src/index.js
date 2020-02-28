console.log("If you see this... it is too late!!!");

function specModel(display) {
  document.getElementById('specialty').style.display = display;
  document.getElementById('contact').style.display = 'none';
  document.getElementById('critics').style.display = 'none';
}

function contactModel() {
  document.getElementById('contact').style.display = 'grid';
  document.getElementById('specialty').style.display = 'none';
  document.getElementById('critics').style.display = 'none';
}

function criticsModel() {
  document.getElementById('contact').style.display = 'none';
  document.getElementById('specialty').style.display = 'none';
  document.getElementById('critics').style.display = 'grid';
}
