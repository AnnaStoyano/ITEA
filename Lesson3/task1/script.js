let counterDiv = document.querySelector(".counter");
let stopCounterBtn = document.querySelector('[name="stopCounter"]');
let refreshCounterBtn = document.querySelector('[name="refreshCounter"]');
let startCounterBtn = document.querySelector('[name="startCounter"]');
let countDownBtn = document.querySelector('[name="countDown"]');
let counter = 0;
let startCount;

startCounterBtn.onclick = function() {
  clearInterval(startCount);
  startCount = setInterval(function() {
    if (counter >= 30) clearInterval(startCount);
    else {
      counter++;
      writeToCounterDiv();
    }
  }, 300);
};

function writeToCounterDiv() {
  counterDiv.innerHTML = counter;
}

stopCounterBtn.onclick = function() {
  clearInterval(startCount);
};

refreshCounterBtn.onclick = function() {
  counter = 0;
  writeToCounterDiv();
};

countDownBtn.onclick = function() {
  clearInterval(startCount);
  startCount = setInterval(function() {
    if (counter <= 0) clearInterval(startCount);
    else {
      counter--;
      writeToCounterDiv();
    }
  }, 300);
};
