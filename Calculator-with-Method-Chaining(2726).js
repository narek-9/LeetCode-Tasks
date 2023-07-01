// Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value !== 0) {
      this.result /= value;
    } else {
      throw new Error("Division by zero is not allowed");
    }
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result = this.result ** value;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}
