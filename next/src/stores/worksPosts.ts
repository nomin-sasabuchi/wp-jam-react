import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Stateの初期状態
const initialState = {
  posts: "",
  isSigneIn: false
};

// Sliceを生成する
const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {
    postsAction: (state, action) => {
      state.posts = action.payload.posts;
      state.isSigneIn = action.payload.isSigneIn;
    }
    // etc...
  }
});

// Reducerをエクスポートする
export default postsSlice.reducer;

// Action Creatorsをエクスポートする
export const { postsAction } = postsSlice.actions;

// 非同期処理は関数としてエクスポートする
export const jsonApi = () => {
  // dispatch 関数を引数に取る関数を返却する
  return async function (dispatch, getState) {
    const state = getState();
    const isSigneIn = state.isSigneIn;
    if (!isSigneIn) {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = await res.data;
      dispatch(postsAction({ posts: data, isSigneIn: true }));
    }
  };
};

