import OperationValidate from "../validate/operationValidate";
import { TYPE } from "../../utils/const";

const handleOperation = (input, state, dispatch) => {
  const { OPERATION } = TYPE;
  const {
    screen: { value },
    formula,
  } = state;

  if (OperationValidate.isInitZero(value)) return;

  if (OperationValidate.isThereAlreadyOperator(formula)) return;

  dispatch({
    type: OPERATION,
    screen: {
      value: value + input,
    },
    value: input,
    sequence: formula[formula.length - 1]?.sequence + 1,
  });
};

export default handleOperation;
