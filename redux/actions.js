import {
  fetchHeadlinesAPI,
  fetchCategoryNewsAPI,
  fetchSearchNewsAPI,
} from "../api";

// action types
export const FETCH_HEADLINES = "FETCH_HEADLINES";
export const FETCH_HEADLINES_SUCCEED = "FETCH_HEADLINES_SUCCEED";
export const FETCH_HEADLINES_FAILED = "FETCH_HEADLINES_FAILED";
export const FETCH_CATEGORY_NEWS = "FETCH_CATEGORY_NEWS";
export const FETCH_SEARCH_NEWS = "FETCH_SEARCH_NEWS";

export const fetchHeadlines = () => async (dispatch) => {
  dispatch({ type: FETCH_HEADLINES });
  try {
    const response = await fetchHeadlinesAPI();
    dispatch({ type: FETCH_HEADLINES_SUCCEED, payload: response });
  } catch (err) {
    dispatch({ type: FETCH_HEADLINES_FAILED, payload: err.message });
  }
};

export const fetchNewsCategory = (category) => async (dispatch) => {
  dispatch({ type: FETCH_HEADLINES });
  try {
    const response = await fetchCategoryNewsAPI(category);
    dispatch({ type: FETCH_CATEGORY_NEWS, payload: response });
  } catch (err) {
    dispatch({ type: FETCH_HEADLINES_FAILED, payload: err.message });
  }
};

export const fetchSearchNews = (value) => async (dispatch) => {
  dispatch({ type: FETCH_HEADLINES });
  try {
    const response = await fetchSearchNewsAPI(value);
    dispatch({ type: FETCH_SEARCH_NEWS, payload: response });
  } catch (err) {
    dispatch({ type: FETCH_HEADLINES_FAILED, payload: err.message });
  }
};
