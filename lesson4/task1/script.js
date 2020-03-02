function indexReg() {
  let str = document.querySelector(".indexDiv").innerHTML;
  let resParagraph = document.querySelector(".resultIndex");
  let reg = /\d{5}/g;
  let result = str.match(reg);
  resParagraph.innerHTML = result;
}

function ipReg() {
  let str = document.querySelector(".ipDiv").innerHTML;
  let resParagraph = document.querySelector(".resultIp");
  let reg = /(\d{3}\.){3}\d{3}/g;
  let result = str.match(reg);
  resParagraph.innerHTML = result;
}

function dollarReg() {
  let str = document.querySelector(".dollarDiv").innerHTML;
  let resParagraph = document.querySelector(".resultDollar");
  let reg = /\$\d*(\.)?\d*/g;
  let result = str.match(reg);
  resParagraph.innerHTML = result;
}

function dateReg() {
  let str = document.querySelector(".dateDiv").innerHTML;
  let resParagraph = document.querySelector(".resultDate");
  let reg = /(\d{2}\/){2}\d{2,4}/g;
  let result = str.match(reg);
  resParagraph.innerHTML = result;
}
