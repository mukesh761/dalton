import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import GoogleAuthWrapper from "./wrapper/GoogleAuthWrapper";
import {UserProvider} from './context/User.context.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <GoogleAuthWrapper>

      <App />
    </GoogleAuthWrapper>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);