import { TYPE } from "../../utils/const";

class Validate {
  static checkPattern(value) {
    const pattern = {
      digit: /[0-9]/g.exec(value)?.input,
      modifier: /AC/g.exec(value)?.input,
      operation: /[X|/|+|-]/g.exec(value)?.input,
      equal: /=/g.exec(value)?.input,
    };

    const { DIGIT, MODIFIER, OPERATION, EQUAL } = TYPE;

    switch (value) {
      case pattern.digit:
        return DIGIT;
      case pattern.modifier:
        return MODIFIER;
      case pattern.operation:
        return OPERATION;
      case pattern.equal:
        return EQUAL;
      default:
        return null;
    }
  }

  static isInitZero(value) {
    return parseInt(value, 10) === 0;
  }
}

export default Validate;
