var divArr = document.getElementsByTagName("div");
function eventsOnThePage() {
  for (var i = 0; i < divArr.length; i++) {
    divArr[i].onclick = function() {
      this.style.backgroundColor = "red";
    };
    divArr[i].onmouseover = function() {
      let r = Math.round(Math.random() * 256);
      let g = Math.round(Math.random() * 256);
      let b = Math.round(Math.random() * 256);
      this.style.backgroundColor = `rgb(${r},${g},${b})`;
      this.innerHTML = `rgb(${r},${g},${b})`;
      console.log(r, g, b);
    };
  }
}

window.onload = function() {
  this.eventsOnThePage();
};

window.onbeforeunload = function() {
  return "Данные не сохранены.";
};
