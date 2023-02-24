import "./App.css"
// import {useState,useEffect} from "react";
import GuestNavBar from "./GuestNavBar";
import GuestSportsbook from "./GuestSportsbook";
import UserNavBar from "./UserNavBar";
import UserSportsbook from "./UserSportsbook";
import Home from "./Home";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";



function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: 
        <>
         
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
        path: '/GuestSportsbook',
        element: 
        <>
          <GuestSportsbook/>
          <GuestNavBar/>
        </>
      },
      {
        path: '/UserSportsbook',
        element: 
        <>
          <UserSportsbook/>
          <UserNavBar/>
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
