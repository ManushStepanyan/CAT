import {
  ActionTypes,
  AppAction,
  AppState,
  initialState,
} from "../constants/types";

export const appReducer = (
  state = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case ActionTypes.SET_CATS:
      return { ...state, cats: [...state.cats, ...action.payload] };
    case ActionTypes.CLEAR_CATS:
      return { ...state, cats: [] };
    case ActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    case ActionTypes.SET_ALL_CATEGORIES:
      return { ...state, allCategories: action.payload };
    case ActionTypes.CHANGE_LIMIT:
      return { ...state, limit: action.payload };
    case ActionTypes.SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
