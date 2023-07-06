var countBits = function (n) {
  const resultArr = [];

  for (let i = 0; i <= n; i++) {
    resultArr.push(
      numToBinarySystem(i).reduce(
        (sum, value) => (sum += Number(value) ? 1 : 0),
        0
      )
    );
  }

  return resultArr;
};

const numToBinarySystem = (num) => {
  const answer = [];

  while (num >= 1) {
    answer.push(String(num % 2));
    num = (num - (num % 2)) / 2;
  }

  return answer.reverse();
};
