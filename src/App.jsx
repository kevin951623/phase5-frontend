import "./App.css"
import {useState,useEffect} from "react";
import GuestNavBar from "./GuestNavBar";
import GuestSportsbook from "./GuestSportsbook";
import UserNavBar from "./UserNavBar";
import UserSportsbook from "./UserSportsbook";
import Home from "./Home";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import SignUp from "./SignUp";
import MyBets from "./MyBets";
import Login from "./Login";



function App() {
  const [user, setUser] = useState(null);
  
  
 
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  



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
          <Login setUser={setUser}/>
        </>
      },
      {
        path: '/SignUp',
        element: 
        <>
          <SignUp  setUser={setUser} />
        </>
      },
      {
        path: '/GuestSportsbook',
        element: 
        <>
          <GuestNavBar/>
          <GuestSportsbook user={user}/>
          
        </>
      },
      {
        path: '/MyBets',
        element: 
        <>
          <UserNavBar user={user}/>
          <MyBets user={user}/>
        </>
      },
      {
        path: '/UserSportsbook',
        element: 
        <>
          <UserNavBar user={user} setUser={setUser}/>
          <UserSportsbook user={user} setUser={setUser}/>
      
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
