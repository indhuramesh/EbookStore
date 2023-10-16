// actions.js

// Action types
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_RECOMMEND = 'UPDATE_RECOMMEND';
export const TOGGLE_RATING = 'TOGGLE_RATING';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

// Action creators
export const updateName = (name) => {
  return {
    type: UPDATE_NAME,
    payload: name,
  };
};

export const updateEmail = (email) => {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
};

export const updateRecommend = (recommend) => {
  return {
    type: UPDATE_RECOMMEND,
    payload: recommend,
  };
};

export const toggleRating = (rating) => {
  return {
    type: TOGGLE_RATING,
    payload: { rating },
  };
};

export const updateComment = (comment) => {
  return {
    type: UPDATE_COMMENT,
    payload: comment,
  };
};