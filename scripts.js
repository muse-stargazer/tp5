// JS for TP5


window.onload = function() {

  document.querySelector("#header h1").classList.add("tp");

  document.querySelector("#header h1.tp").onclick = function() {
    this.classList.toggle("white");
  }

  document.querySelector("#bigflex #ingredients").onclick = function() {
    this.classList.toggle("tpshow");
  }

  document.querySelector("#bigflex #equipment").onclick = function() {
    this.classList.toggle("tpshow");
  }

  document.querySelector("#bigflex #directions").onclick = function() {
    this.classList.toggle("tpshow");
  }

  document.querySelector("")





}; // end window.onload