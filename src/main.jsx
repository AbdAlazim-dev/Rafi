import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/rafi-minimalest-e-commerce-6mv8xri41-abdalazim-dev">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
