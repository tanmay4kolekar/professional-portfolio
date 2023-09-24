import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";

const store = configureStore({
  reducer: {
    UserReducer: UserReducer,
  },
});

export default store;
