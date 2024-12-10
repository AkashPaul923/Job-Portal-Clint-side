import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home";
import Register from "../Layout/Register";
import SignIn from "../Layout/SignIn";


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