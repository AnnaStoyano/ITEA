window.onload = function() {
  let userString = prompt("Введите фразу");
  inserToList(userString);
  alert(countOf("a", userString));
};

function inserToList(userString) {
  let list = document.querySelector(".list-word");
  let wordArr = userString.split(" ");
  for (let i = wordArr.length - 1; i >= 0; i--) {
    if (i === 0) {
      insertAfterEnd(wordArr[i].toUpperCase(), list);
    } else if (i === wordArr.length - 1 || i === wordArr.length - 2) {
      insertAfterEnd(wordArr[i].toLowerCase(), list);
    } else {
      insertAfterEnd(wordArr[i], list);
    }
  }
}

function insertAfterEnd(word, list) {
  list.insertAdjacentHTML("afterend", `<li>${word}</li>`);
}

function countOf(letter, userString) {
  let countOfLetter = 0;
  letter = letter.toLowerCase();
  userString = userString.toLowerCase();
  for (let i = 0; i < userString.length; i++) {
    if (userString.charAt(i) === letter) countOfLetter++;
  }
  return countOfLetter;
}
