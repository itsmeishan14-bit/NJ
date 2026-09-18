let count = 0;

function cardCounter(card) {

  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count++;
  }

  if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cardCounter(6));
console.log(cardCounter(10));
console.log(cardCounter(1));
console.log(cardCounter("K"));
console.log(cardCounter("K"));
console.log(cardCounter("K"));

