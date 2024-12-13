import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home";
import Register from "../Layout/Register";
import SignIn from "../Layout/SignIn";
import AllJobs from "../Layout/AllJobs";
import JobDetail from "../Layout/JobDetail";
import PrivateRoute from "../Auth/PrivateRoute";
import ApplyJob from "../Layout/ApplyJob";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <h2>Error</h2>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/alljobs',
          element: <AllJobs></AllJobs>,
          loader: ()=> fetch('http://localhost:5000/jobs')
        },
        {
          path: '/jobsdetail/:id',
          element: <PrivateRoute><JobDetail></JobDetail></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/applyjob/:id',
          element: <PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>,
          // loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
      ],
    },
  ]);

export default router;