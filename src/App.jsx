import React from "react";
// import Counter from "./components/Counter";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //   Redirect,
} from "react-router-dom";
import { PostsList } from "./posts/PostsList";
import { AddPostForm } from "./posts/AddPostForm";
import { SinglePage } from "./posts/singlePage";
import { Navbar } from "./Navbar";
import { EditPostForm } from "./posts/EditPostForm";
import { UsersList } from "./features/users/UsersList";
import { UserPage } from "./features/users/UserPage";
import { NotificationList } from "./features/notifications/NotificaitonList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          ></Route>
          <Route exact path="/posts/:postid" element={<SinglePage />}></Route>
          <Route
            exact
            path="/editPost/:editpost"
            element={<EditPostForm />}
          ></Route>
          <Route exact path="/users" element={<UsersList />}></Route>
          <Route exact path="/users/:userId" element={<UserPage />}></Route>
          <Route exact path="/notifications" element={<NotificationList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
