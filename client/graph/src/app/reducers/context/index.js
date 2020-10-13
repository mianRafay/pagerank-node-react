import { CONTEXT_TOGGLE } from "../../actions/types";

const initialState = {
  contextToggle: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONTEXT_TOGGLE:
      return {
        ...state,
        contextToggle: action.payload,
      };
    default:
      return state;
  }
}
