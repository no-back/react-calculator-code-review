import { TYPE } from "./utils/const";

export const initialState = {
  screen: {
    value: "0",
  },
  formula: [{ value: "0", sequence: 1 }],
};

export const reducer = (state, action) => {
  const { DIGIT, OPERATION, MODIFIER, EQUAL, RESET } = TYPE;

  switch (action.type) {
    case DIGIT:
      if (parseInt(state.screen.value, 10) === 0) {
        return {
          screen: {
            value: action.screen.value,
          },
          formula: [
            {
              value: action.value,
              sequence: 1,
            },
          ],
        };
      }
      return {
        screen: {
          value: action.screen.value,
        },
        formula: [
          ...state.formula,
          {
            value: action.value,
            sequence: action.sequence,
          },
        ],
      };

    case OPERATION:
      if (parseInt(state.screen.value, 10) === 0) {
        return {
          screen: {
            value: action.screen.value,
          },
          formula: [
            {
              value: action.value,
              sequence: 1,
            },
          ],
        };
      }
      return {
        screen: {
          value: action.screen.value,
        },
        formula: [
          ...state.formula,
          {
            value: action.value,
            sequence: action.sequence,
          },
        ],
      };
    case MODIFIER:
      return initialState;
    case EQUAL:
      if (action.screen.value === Infinity) return initialState;
      return {
        screen: {
          value: action.screen.value,
        },
        formula: [],
      };
    case RESET:
      return {
        screen: {
          value: action.screen.value,
        },
        formula: [{ value: action.screen.value, sequence: 1 }],
      };
  }
};
