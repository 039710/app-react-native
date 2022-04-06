import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const URL = "http://localhost:3332/login";
const initialState = {
  isLoggedIn: false,
  user: {
    name: "",
    username: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: {
          name: "",
          username: "",
        },
      };
    default:
      return state;
  }
};

export const setUser = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const clearUser = () => {
  return {
    type: "LOGOUT",
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL, data);
      dispatch(setUser(response.data.user));
    } catch (err) {
      // throw err;
      console.log(err);
    }
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
