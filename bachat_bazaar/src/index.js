import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./contexts/product-context";
import { CategoryProvider } from "./contexts/category-context"
import { AuthProvider } from "./contexts/auth-context";
import { signupHandler } from "./custom-hooks/useSignup";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <App />

          </CategoryProvider>
        </ProductProvider>

      </AuthProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
