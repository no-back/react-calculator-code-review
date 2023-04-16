import Validate from "./validate";

class DigitValidate extends Validate {
  static hasAfterOperation(formula) {
    return formula?.length === 0;
  }

  static isMoreThanThreeDigitNumber(left, operation, right) {
    return (left?.length === 3 && !operation?.sequence) || right?.length === 3;
  }

  static hasOverlapZeroToSecondNumber(type, formula) {
    return (
      this.checkPattern([...formula][formula.length - 2]?.value) === type &&
      [...formula][formula.length - 1].value === "0"
    );
  }
}

export default DigitValidate;
