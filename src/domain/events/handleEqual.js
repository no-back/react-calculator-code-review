import { OPERATOR, TYPE } from "../../utils/const";
import EqualValidate from "../validate/equalValidate";
import Validate from "../validate/validate";

const handleEqual = (input, state, dispatch) => {
  const { OPERATION, EQUAL } = TYPE;
  const {
    screen: { value },
    formula,
  } = state;

  const operation = [...formula].find(
    ({ value }) => Validate.checkPattern(value) === OPERATION
  );

  if (!formula.length) return;

  if (!operation) return;

  if (EqualValidate.isLastOperationAtFormula(OPERATION, formula)) return;

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

  const answer = {
    left: parseInt(
      left.reduce((acc, current) => acc + current.value, ""),
      10
    ),
    right: parseInt(
      right.reduce((acc, current) => acc + current.value, ""),
      10
    ),
  };

  switch (operation.value) {
    case OPERATOR.PLUS:
      dispatch({
        type: EQUAL,
        screen: {
          value: answer.left + answer.right,
        },
      });
      return;
    case OPERATOR.MINUS:
      dispatch({
        type: EQUAL,
        screen: {
          value: answer.left - answer.right,
        },
      });
      return;
    case OPERATOR.MULTIFLY:
      dispatch({
        type: EQUAL,
        screen: {
          value: answer.left * answer.right,
        },
      });
      return;
    case OPERATOR.DIVIDE:
      dispatch({
        type: EQUAL,
        screen: {
          value: Math.round(answer.left / answer.right),
        },
      });
      return;
    default:
      return;
  }
};

export default handleEqual;
