import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "src/store";

import "src/index.css";
import { HashRouter } from "react-router-dom";
import Router from "src/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </HashRouter>
);
