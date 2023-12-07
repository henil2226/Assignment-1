import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About1 from "./About1";
import Product from "./Product";
import Exampal from "./Exampal";
import Header from "./Com-Comp/Header";
// import Loginpagr from "./Functioncompo/Loginpagr";
// import { Children } from 'react';

// const Classroutes = React.lazy(() => import("./Classcompo/Classroutes"));
const Denish = React.lazy(() => import("./Classcompo/Classroutes"))
const Functionroutes = React.lazy(() =>
  import("./Functioncompo/Funtionroutes")
);

const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Header />
      </>
    ),
  },
  {
    
    path: "/Home",
    element: (
      <>
        <Header />
        <Home/>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header/><About1/>
      </>
    ),
  },
  {
    path: "/product",
    element: (
      <>
        <Header />
        <Product />
      </>
    ),
  },
  {
    path: "/Exampal",
    element: (
      <>
        <Header />
        <Exampal />
      </>
    ),
    // Children: [
    //     {
    //         path : "Classcompo/*",
    //         // element : <Suspense fallback={<h1>ruko shber karo........</h1>}><Denish/></Suspense>
    //         element : <Suspense fallback={<h1>ruko shber karo........</h1>}><Classroutes/></Suspense>
    //     },
    //     {
    //         path : "Functioncompo/*",
    //         element : <Suspense fallback={<h1>hello....</h1>}><Functionroutes/></Suspense>
    //     },
    // ]

    children: [
      {
        path: "Classcompo/*",
        element: (
          <Suspense fallback={<h1>ruko shbar karo........</h1>}>
            <Denish />
          </Suspense>
        ),
        // element: (
        //   <Suspense fallback={<h1>ruko shber karo........</h1>}>
        //     <Classroutes />
        //   </Suspense>
        // ),
      },
      {
        path: "Functioncompo/*",
        element: (
          <Suspense fallback={<h1>hello....</h1>}>
            <Functionroutes />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Mainrouter;
