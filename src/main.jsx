import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import "./index.css";

import { fetchUsers } from "./features/users/usersSlice.jsx";
import { worker } from "./api/server.js";

async function main() {
  await worker.start({ onUnhandledRequest: "bypass" });
  store.dispatch(fetchUsers());

  ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
main();
