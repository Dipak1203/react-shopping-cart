import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Cart>
      <App />
  </Cart>
);
