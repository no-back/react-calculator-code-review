import Validate from "./validate";

class OperationValidate extends Validate {
  static isThereAlreadyOperator(formula) {
    [...formula].filter(({ value }) => isNaN(parseInt(value))).length;
  }
}

export default OperationValidate;
