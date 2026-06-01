import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const getElem = document.getElementById("root");

if (getElem) {
  const root = createRoot(getElem);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
}
