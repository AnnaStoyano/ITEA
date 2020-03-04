window.onload = function() {
  let link = this.document.querySelector("a");
  let text = this.document.querySelector(".text");
  let cancelBtn = this.document.querySelector('input[name="cancelEvent"]');
  link.addEventListener("click", displayText);

  cancelBtn.addEventListener("click", function() {
    link.removeEventListener("click", displayText);
  });

  function displayText(e) {
    text.classList.toggle("display-text");
    e.preventDefault();
  }
};
