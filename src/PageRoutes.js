import { CircularProgress } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import { isLogin } from "./utils/utils";

export default function PageRoutes() {
  const Home = lazy(() => import("./pages/Home"));
  const Cart = lazy(() => import("./pages/Cart"));
  const Checkout = lazy(() => import("./pages/Checkout"));
  const ProductManagement = lazy(() => import("./pages/ProductManagement"));
  const AddProduct = lazy(() => import("./pages/AddProduct"));
  const Login = lazy(() => import("./pages/Login"));
  const SignUp = lazy(() => import("./pages/SignUp"));

  function PrivateRoute({ children }) {
    const auth = isLogin();
    return auth ? children : <Navigate to="/login" />;
  }
  
  

  return (
    <Suspense fallback={<CircularProgress />}>
      <Layout>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productManagement" element={<PrivateRoute><ProductManagement /></PrivateRoute>} />
          <Route path="/addProduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
          <Route path="/editProduct/:id" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Layout>
    </Suspense>
  );
}
