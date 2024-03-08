import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import postsReducer from "../features/posts/postSlice";
import usersReducer from "../features/users/usersSlice";
import notificationsReducer from "../features/notifications/notificationSlice";
export default configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  }),
});
