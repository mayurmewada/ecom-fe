import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./AppRoutes.jsx";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "remixicon/fonts/remixicon.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Provider>
    // </StrictMode>
);
