import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./components/context/ContextProvider.jsx";
import AuthContextProvider from "./components/context/AuthContext.jsx";
import { UserProvider } from "./components/context/UserContext.jsx";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AuthContextProvider>
      <UserProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UserProvider>
    </AuthContextProvider>
  </ContextProvider>
);
