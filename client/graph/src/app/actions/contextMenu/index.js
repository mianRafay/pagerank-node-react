import { CONTEXT_TOGGLE } from "../types";

/**
 * @name HandleContextToggle
 * @summary to manage context menu opening and closing
 * @param value
 */
export const HandleContextToggle = (value) => (dispatch) => {
  dispatch({
    type: CONTEXT_TOGGLE,
    payload: value,
  });
};
