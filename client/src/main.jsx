import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./components/context/ContextProvider.jsx";
import AuthContextProvider from "./components/context/AuthContext.jsx";
import { UserProvider } from "./components/context/UserContext.jsx";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { SidebarProvider } from "./components/context/SidebarContext.jsx";
import { ProductProvider } from "./components/context/ProductContext.jsx";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AuthContextProvider>
      <UserProvider>
        <ProductProvider>
          <SidebarProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </SidebarProvider>
        </ProductProvider>
      </UserProvider>
    </AuthContextProvider>
  </ContextProvider>
);
