import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Layout from "./components/Layout/index";
import Home from "./pages/Home";
import { pageBaseUrl } from "./utils/constants";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

const AppRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path={`/products`} element={<Products />} />
                <Route path={`/product`} element={<ProductDetail />} />
                <Route path={`/cart`} element={<Cart />} />
                <Route path={`/my-orders`} element={<Orders />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/404"} element={<NotFound />} />
                <Route path={`/login`} element={<Login />} />
                <Route path={`/signup`} element={<Signup />} />
            </Routes>
        </Layout>
    );
};

export default AppRoutes;
