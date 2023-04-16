import { TYPE } from "../../utils/const";

const handleModifier = (input, state, dispatch) => {
  const { MODIFIER } = TYPE;
  dispatch({
    type: MODIFIER,
  });
};

export default handleModifier;
