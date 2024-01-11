import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./Admin";
import User from "./User";
import Userdata from "./Userdata";
import Useradd from "./Useradd";
import Useredit from "./Useredit";
import Userdetails from "./Userdetails";

const Mainrouter = createBrowserRouter([
    {
        path : "/",
        element : <>
        <Navbar/> <Home/>
        </>
    },
    {
        path : "/login",
        element : <>
        <Navbar/> <Login/>
        </>
    },
    {
        path : "/Signup",
        element : <>
        <Navbar/> <Signup/>
        </>
    },
    {
        path : "/admin",
        element: <>
        <Navbar/> <Admin/>
        </>
    },
    {
        path : "/user",
        element: <>
        <Navbar/> <User/>
        </>
    },
    {
        path : "/userdata",
        element: <>
        <Navbar/> <Userdata/>
        </>
    },
    {
        path : "/useradd",
        element: <>
        <Navbar/> <Useradd/>
        </>
    },
    {
        path : "/useredit/:userid",
        element: <>
        <Navbar/> <Useredit/>
        </>
    },
    {
        path : "/userdetails/:userid",
        element: <>
        <Navbar/> <Userdetails/>
        </>
    }
])

export default Mainrouter