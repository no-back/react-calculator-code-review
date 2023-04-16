import Validate from "./validate";

class EqualValidate extends Validate {
  static isLastOperationAtFormula(type, formula) {
    return this.checkPattern([...formula][formula.length - 1].value) === type;
  }
}

export default EqualValidate;
