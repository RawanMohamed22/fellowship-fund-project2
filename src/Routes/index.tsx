import { createBrowserRouter , createRoutesFromElements , Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Layout from "../pages/Layout";
import LoginPage from "../pages/Login";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Layout />} >
            <Route index element={<Signup />} />
            <Route path="/login" element={<LoginPage/>} />
        </Route>
        </>
    )
)
