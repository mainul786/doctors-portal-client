import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import Signup from "../../Pages/Signup/Signup";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashbordLayout from "../../Layout/DashbordLayout";
import MyAppointment from "../../Pages/Dashbord/Dashbord/MyAppointment/MyAppointment";

export const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/signup',
                    element:<Signup></Signup>
                },
                {
                    path:'/appointment',
                    element:<Appoinment></Appoinment>
                }
            ]
        },
        {
            path:'/dashboard',
            element:<PrivateRoute><DashbordLayout></DashbordLayout></PrivateRoute>,
            children:[
                {
                    path:'/dashboard',
                    element:<MyAppointment></MyAppointment>
                }
            ]
        }
    ]
);

