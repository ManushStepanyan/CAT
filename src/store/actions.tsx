import {
  ActionTypes,
  Cates,
  ChangeLimitAction,
  ClearCatsAction,
  SetAllCategoriesAction,
  SetCategoryAction,
  SetCatsAction,
  SetPageAction,
  SingleCategory,
} from "../constants/types";

export const setCats = (cats: Cates): SetCatsAction => {
  return { type: ActionTypes.SET_CATS, payload: cats };
};

export const clearCats = (): ClearCatsAction => {
  return { type: ActionTypes.CLEAR_CATS };
};

export const setCategory = (category: SingleCategory): SetCategoryAction => {
  return { type: ActionTypes.SET_CATEGORY, payload: category };
};

export const setAllCategories = (
  allCategories: SingleCategory[]
): SetAllCategoriesAction => {
  return { type: ActionTypes.SET_ALL_CATEGORIES, payload: allCategories };
};

export const changeLimit = (limit: number): ChangeLimitAction => {
  return { type: ActionTypes.CHANGE_LIMIT, payload: limit };
};

export const setPage = (page: number): SetPageAction => {
  return { type: ActionTypes.SET_PAGE, payload: page };
};
