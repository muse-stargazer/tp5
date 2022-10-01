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

  //document.querySelector("#thanks background-image").classList.add("transparent");
  
  //document.querySelector("thanks background-image.transparent").style.opacity = "0.5";

  document.querySelector("#thanks h1").classList.add("bg");
  
  




}; // end window.onload