import { wordList, allowedAttempts, globalSetOfWords, startDate, alphabets, qwerty } from "./game-constants";

const Wordle = function () {
  let currentRow = 0;
  let currentColumn = 0;
  let currentWord = [];
  let scoreCard = [];

  let answer = null;

  const checkIfAValidWord = (word) => {
    return globalSetOfWords.includes(word) || wordList.includes(word);
  }

  const getTheWordIndexForToday = () => {
    const timeDiff = new Date().getTime() - startDate.getTime();
    return Math.floor(Math.abs(timeDiff / (1000 * 3600 * 24))) % wordList.length;
  }

  const checkIfItsAMatch = (word) => {
    return String(word).toLowerCase() === answer;
  }

  const showMessage = (msg) => {
    const messageContainer = document.querySelector('#messages');
    messageContainer.innerText = msg;
    messageContainer.classList.add('shown');
    setTimeout(() => {
      messageContainer.classList.remove('shown');
    }, 2000);
  }

  const createBoard = () => {
    const board = document.querySelector('#board');
    board.innerHTML = "";
    // create 6 blank rows
    for (let i = 0; i < allowedAttempts; i++) {
      let row = document.createElement('div');
      row.className = 'board-row';
      row.id = 'row-' + i;
      board.appendChild(row);
      for (let j = 0; j < 5; j++) {
        // Create 5 columns
        let column = document.createElement('div');
        column.className = 'board-column';
        column.id = 'column-' + i + "-" + j;
        row.appendChild(column);

        // create front & back side of the cards (just for a flip animation)
        let columnFront = document.createElement('div');
        columnFront.className = 'board-column-front';
        columnFront.id = 'column-front-' + i + "-" + j;
        column.appendChild(columnFront);
        let columnBack = document.createElement('div');
        columnBack.className = 'board-column-back';
        columnBack.id = 'column-back-' + i + "-" + j;
        column.appendChild(columnBack);
      }
    }
  }

  const enterAKey = (event) => {
    if (currentColumn < 5) {
      document.querySelector('#column-front-' + currentRow + "-" + currentColumn).innerText = event.target.innerText;
      document.querySelector('#column-back-' + currentRow + "-" + currentColumn).innerText = event.target.innerText;
      currentColumn++;
      currentWord.push(event.target.innerText);
    }
  }

  window.addEventListener('keydown', (evt) => {
    if (qwerty.includes(evt.key.toLowerCase())) {
      enterAKey({ target: { innerText: evt.key.toUpperCase() } })
    }
    else if (evt.key === 'Backspace') {
      goBack();
    }
    else if (evt.key === 'Enter') {
      checkTheCurrentRow();
    }
  });

  const generateScoreCard = async () => {
    let result = `Corporate Wordle ${getTheWordIndexForToday() + 1} / ${wordList.length}\n\n`;
    scoreCard.forEach((line) => {
      const lineOutput = [...line].reduce((prev, curr) => {
        switch (curr) {
          case 'green':
            return prev + '🟩';
          case 'yellow':
            return prev + '🟨';
          default:
            return prev + '⬛';
        }
      }, '');
      result += `${lineOutput}\n`;
    });
    await navigator.clipboard.writeText(result);
    showMessage("Result is copied to clipboard")
  }

  const showBanner = () => {
    const banner = document.querySelector("#banner");
    setTimeout(() => { banner.style.display = "flex"; }, 1000);
    document.querySelector('.share').onclick = generateScoreCard;
  }

  const showAnswer = () => {
    const banner = document.querySelector("#answer-banner");
    banner.style.display = "flex";
    document.querySelector('#answer-text').innerHTML = "The answer is " + answer;
  }

  const checkTheCurrentRow = () => {
    if (currentWord.length < 5) {
      showMessage("Not enough letters");
    } else if (!checkIfAValidWord(currentWord.join("").toLowerCase())) {
      showMessage("Not in the word list");
    }
    else {
      const letters = currentWord;
      const lettersInAnswer = answer.split("");
      const lineScore = [];
      letters.forEach((letter, index) => {
        if (letter.toLowerCase() === lettersInAnswer[index].toLowerCase()) {
          // exact match turn green
          document.querySelector("#column-back-" + currentRow + "-" + index).classList.add('green');
          document.querySelector("#column-" + currentRow + "-" + index).classList.add('flipped');
          document.querySelector("#keypad-key-" + letter.toLowerCase()).classList.add('green');
          lineScore.push("green");

        } else if (lettersInAnswer.includes(letter.toLowerCase())) {
          // partial match turn yellow
          document.querySelector("#column-back-" + currentRow + "-" + index).classList.add('yellow');
          document.querySelector("#column-" + currentRow + "-" + index).classList.add('flipped');
          document.querySelector("#keypad-key-" + letter.toLowerCase()).classList.add('yellow');
          lineScore.push("yellow")
        } else {
          // no match turn grey
          document.querySelector("#column-back-" + currentRow + "-" + index).classList.add('grey');
          document.querySelector("#column-" + currentRow + "-" + index).classList.add('flipped');
          document.querySelector("#keypad-key-" + letter.toLowerCase()).classList.add('grey');
          lineScore.push("grey");
        }
      });
      scoreCard.push(lineScore);

      if (checkIfItsAMatch(currentWord.join("").toLowerCase())) {
        currentRow === 0 && showMessage("Are you real?");
        currentRow === 1 && showMessage("Genius!");
        currentRow === 2 && showMessage("Awesome!");
        currentRow === 3 && showMessage("Great Job!");
        currentRow === 4 && showMessage("Good Job!");
        currentRow === 5 && showMessage("Phew!");

        showBanner();
      }
      else if (currentRow + 1 === allowedAttempts) {
        showAnswer();
      } else {
        currentRow++;
        currentColumn = 0;
        currentWord = [];
      }
    }
  }

  const goBack = () => {
    if (currentColumn > 0) {
      document.querySelector('#column-front-' + currentRow + "-" + (currentColumn - 1)).innerText = "";
      document.querySelector('#column-back-' + currentRow + "-" + (currentColumn - 1)).innerText = "";
      currentColumn--;
      currentWord.pop();
    }
  }

  const setupKeypad = () => {
    const alphabets = document.querySelector('#alphabets');
    alphabets.innerHTML = "";
    const specialKeys = document.querySelector('#special-keys');
    specialKeys.innerHTML = "";
    qwerty.forEach(e => {
      let key = document.createElement('div');
      key.className = 'keypad-key';
      key.id = 'keypad-key-' + e;
      key.innerText = String(e).toUpperCase();
      alphabets.appendChild(key);
      key.onclick = enterAKey;
    });

    let backKey = document.createElement('div');
    backKey.className = 'keypad-special-key';
    backKey.id = 'keypad-key-back';
    backKey.innerText = "X";
    backKey.onclick = goBack;
    specialKeys.appendChild(backKey);

    let enterKey = document.createElement('div');
    enterKey.className = 'keypad-special-key';
    enterKey.id = 'keypad-key-enter';
    enterKey.innerText = "Enter";
    enterKey.onclick = checkTheCurrentRow;

    specialKeys.appendChild(enterKey)
  }

  const getRandomWordIndex = () => {
    return (Math.floor(Math.random() * (wordList.length + 1) + 1)) % wordList.length;
  }

  const startGame = (random = false) => {
    currentRow = 0;
    currentColumn = 0;
    currentWord = [];
    scoreCard = [];
    createBoard();
    setupKeypad();
    document.querySelector('#messages').classList.remove('shown');
    document.querySelector("#banner").style.display = "none";
    document.querySelector("#answer-banner").style.display = "none";
    if (random) {
      answer = wordList[getRandomWordIndex()]
    } else {
      answer = wordList[getTheWordIndexForToday()]
    }
  }

  this.startGame = startGame;
}

window.wordle = new Wordle();
wordle.startGame();
