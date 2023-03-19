export type Category = {
  id: number;
  name: string;
};

export type Categoris = Category[];

export type Cat = {
  id: string;
  url: string;
  width: string;
  heigth: string;
};

export type SingleCategory = {
  name: string;
  id: number;
};

export type Cates = Cat[];
export interface AppState {
  cats: Cates;
  category: SingleCategory;
  allCategories: SingleCategory[];
  limit: number;
  page: number;
}

// Define the actions that can be dispatched
export enum ActionTypes {
  SET_CATS = "SET_CATS",
  CLEAR_CATS = "CLEAR_CATS",
  SET_CATEGORY = "SET_CATEGORY",
  SET_ALL_CATEGORIES = "SET_ALL_CATEGORIES",
  CHANGE_LIMIT = "CHANGE_LIMIT",
  SET_PAGE = "SET_PAGE",
}
export interface SetCatsAction {
  type: ActionTypes.SET_CATS;
  payload: Cates;
}

export interface ClearCatsAction {
  type: ActionTypes.CLEAR_CATS;
}
export interface SetCategoryAction {
  type: ActionTypes.SET_CATEGORY;
  payload: SingleCategory;
}

export interface SetAllCategoriesAction {
  type: ActionTypes.SET_ALL_CATEGORIES;
  payload: SingleCategory[];
}

export interface ChangeLimitAction {
  type: ActionTypes.CHANGE_LIMIT;
  payload: number;
}

export interface SetPageAction {
  type: ActionTypes.SET_PAGE;
  payload: number;
}

export type AppAction =
  | SetCatsAction
  | ClearCatsAction
  | SetCategoryAction
  | SetAllCategoriesAction
  | ChangeLimitAction
  | SetPageAction;

export const initialState: AppState = {
  cats: [],
  category: { name: "Select a Category to show Cats", id: 0 },
  allCategories: [],
  limit: 10,
  page: 1,
};
