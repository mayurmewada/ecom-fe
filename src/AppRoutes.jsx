import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Layout from "./components/Layout/index";
import Home from "./pages/Home";
import { pageBaseUrl } from "./utils/constants";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path={`/products`} element={<Products />} />
                <Route path={`/product`} element={<ProductDetail />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/404"} element={<NotFound />} />
            </Routes>
        </Layout>
    );
};

export default AppRoutes;
