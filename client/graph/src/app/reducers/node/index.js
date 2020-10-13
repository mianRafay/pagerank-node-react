import {
  NODES,
  SET_GRAPH,
  LINKS,
  PAGE_RANK,
  CURRENT_LINK,
} from "../../actions/types";

const initialState = {
  graph: [],
  nodes: [],
  links: [],
  current_link: [],
  pageRank: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NODES:
      return {
        ...state,
        nodes: action.payload,
      };
    case SET_GRAPH:
      return {
        ...state,
        graph: action.payload,
      };
    case LINKS:
      return {
        ...state,
        links: action.payload,
      };
    case PAGE_RANK:
      return {
        ...state,
        pageRank: action.payload,
      };
    case CURRENT_LINK:
      return {
        ...state,
        current_link: action.payload,
      };
    default:
      return state;
  }
}
