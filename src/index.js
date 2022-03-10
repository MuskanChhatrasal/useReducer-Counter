import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { WishlistProvider } from "./wishlist-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </StrictMode>,
  rootElement
);
