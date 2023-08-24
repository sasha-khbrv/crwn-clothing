import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (categories) => {
  return {
    type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
    payload: categories,
  };
};
