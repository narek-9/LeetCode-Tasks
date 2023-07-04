// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

var createCounter = function (init) {
  let storeValue = init;

  return {
    increment: function () {
      return ++init;
    },
    decrement: function () {
      return --init;
    },
    reset: function () {
      return (init = storeValue);
    },
  };
};
