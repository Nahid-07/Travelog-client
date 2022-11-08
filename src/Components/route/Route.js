import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import PrivetRouter from "../../PrivetRouter/PrivetRouter";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import MyReviews from "../Myreviews/MyReviews";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Services from "../Services/Services";
import Signup from "../SignUp/Signup";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
           },
           {
            path:'/myreviews',
            element:<PrivetRouter><MyReviews></MyReviews></PrivetRouter>
           }
        ]
    }
])