import React from "react";
import ReactDOM from "react-dom/client";
import 'regenerator-runtime/runtime';
// import { Provider } from "react-redux"
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { store } from './components/YTclone/store/store.js'

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
<Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>
);

