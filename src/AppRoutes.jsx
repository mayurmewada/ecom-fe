import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Layout from "./components/Layout/index";
import Home from "./pages/Home";

const AppRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path={"/products"} element={<Products />} />
                <Route path={"/"} element={<Home />} />
            </Routes>
        </Layout>
    );
};

export default AppRoutes;
