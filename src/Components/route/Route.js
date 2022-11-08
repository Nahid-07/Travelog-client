import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Services from "../Services/Services";
import Signup from "../SignUp/Signup";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
           {
            path:'/services',
            element:<Services></Services>
           },
           {
            path:'/login', element:<Login></Login>
           },
           {
            path:'/signup', element:<Signup></Signup>
           },
           {
            path:'/servicedetails/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
           }
        ]
    }
])