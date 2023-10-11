const deck = [1, 3, 9, 3, 7];

function threeOfEachThree(deck) {
  const newArr = deck.reduce((accumulator, currentValue) => {
    if (currentValue === 3) {
      accumulator.push(currentValue, 3, 3);
    } else {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  return newArr;
}

console.log(threeOfEachThree(deck));
