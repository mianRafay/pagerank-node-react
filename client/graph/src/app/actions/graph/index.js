import { NODES, LINKS, PAGE_RANK, CURRENT_LINK } from "../types";

import { ApiCall } from "../../service/index";

export const addNode = (payload) => {
  return function (dispatch) {
    dispatch({
      type: NODES,
      payload: payload,
    });
  };
};

export const removeNode = (payload) => (dispatch) => {
  dispatch({
    type: NODES,
    payload: payload,
  });
};

export const addLink = (payload) => {
  return function (dispatch) {
    dispatch({
      type: CURRENT_LINK,
      payload: [],
    });
    dispatch({
      type: LINKS,
      payload: payload,
    });
  };
};
export const addCurrentLink = (payload) => {
  return function (dispatch) {
    dispatch({
      type: CURRENT_LINK,
      payload: payload,
    });
  };
};
export const getCurrentLink = (payload) => {
  return function (dispatch) {
    dispatch({
      type: CURRENT_LINK,
      payload: payload,
    });
  };
};
export const getPageRank = (params) => {
  return function (dispatch) {
    return ApiCall._post("graph/getPageRankAlgo", params)
      .then((response) => {
        dispatch({
          type: PAGE_RANK,
          payload: response.data,
        });
      })
      .catch((err) => {});
  };
};
export const resetData = () => {
  return function (dispatch) {
    dispatch({
      type: NODES,
      payload: [],
    });
    dispatch({
      type: PAGE_RANK,
      payload: [],
    });
    dispatch({
      type: LINKS,
      payload: [],
    });
    window.location.reload(false);
  };
};
