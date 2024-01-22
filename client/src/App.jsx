import About from "./pages/AboutPage";
import Blog from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomeLayout from "./pages/HomeLayout"
import LandingPage from "./pages/LandingPage";
import Admin from "./pages/Admin";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [
      {
        index: true,
        element: <LandingPage/>
      },
      {
        path: "/sobre-mim",
        element: <About/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/contato",
        element: <ContactPage/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/registro",
        element: <Register/>
      },
      {
        path: "/admin",
        element: <Admin/>
      }

    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
