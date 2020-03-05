window.onload = function() {
  let mainDiv = this.document.querySelector("#main-div");
  let wordDiv = this.document.querySelector(".word");
  mainDiv.getAttribute;
  mainDiv.addEventListener("mouseover", function(e) {
    let target = e.target;
    if ((target.tagName = "SPAN")) {
      wordDiv.innerHTML = target.getAttribute("data-tooltip");
    }
  });
};
