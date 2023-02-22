import "./App.css"
// import {useState,useEffect} from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Sportsbook from "./Sportsbook";


function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: 
        <>
          <NavBar/>
          <Home/>
        </>
      },
      {
        path: '/login',
        element: 
        <>
          <Login/>
        </>
      },
      {
        path: '/SignUp',
        element: 
        <>
          <SignUp/>
        </>
      },
      {
        path: '/Sportsbook',
        element: 
        <>
          <Sportsbook/>
          <NavBar/>
        </>
      },
      {
        path:'*',
        element: <h1>404 not found!</h1>
      }
    ]
  )
  return (
    <RouterProvider router={router} />
    )}

export default App;
