import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import LoginForm from "../Login/Login";
import Home from "../Home/Home";
import RegisterForm from "../Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"login",
                element: <LoginForm></LoginForm>
            },
            {
                path: "register",
                element:<RegisterForm></RegisterForm>
            }
        ]
    }
])