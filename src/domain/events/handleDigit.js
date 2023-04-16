import { TYPE } from "../../utils/const";
import DigitValidate from "../validate/digitValidate";
import Validate from "../validate/validate";

const handleDigit = (input, state, dispatch) => {
  const { DIGIT, OPERATION, RESET } = TYPE;
  const {
    screen: { value },
    formula,
  } = state;

  const operation = [...formula].find(
    ({ value }) => Validate.checkPattern(value) === OPERATION
  );

  const left = operation
    ? [...formula].filter(
        ({ sequence }) => sequence < operation?.sequence && sequence <= 3
      )
    : [...formula].filter(({ sequence }) => sequence <= 3);

  const right =
    operation &&
    [...formula].filter(
      ({ sequence }) => sequence > operation?.sequence && sequence <= 7
    );

  if (DigitValidate.hasOverlapZeroToSecondNumber(OPERATION, formula)) return;

  if (DigitValidate.isMoreThanThreeDigitNumber(left, operation, right)) return;

  if (DigitValidate.isInitZero(value)) {
    dispatch({
      type: DIGIT,
      screen: {
        value: input,
      },
      value: input,
      sequence: formula[formula.length - 1]?.sequence + 1,
    });
    return;
  }

  if (DigitValidate.hasAfterOperation(formula)) {
    dispatch({
      type: RESET,
      screen: {
        value: input,
      },
    });
    return;
  }

  // 숫자 붙이기
  dispatch({
    type: DIGIT,
    screen: {
      value: value + input,
    },
    value: input,
    sequence: formula[formula.length - 1]?.sequence + 1,
  });
};

export default handleDigit;
