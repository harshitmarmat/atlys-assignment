import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/wrapper/LayoutWrapper";

const Auth = lazy(()=>import("./components/auth/Auth"))
const Home = lazy(()=>import("./components/home/Home"))
const NotFound = lazy(()=>import("./components/common/NotFound"))


const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Suspense fallback={<div>Loading...</div>}><Auth /></Suspense>,
  },
  {
    path: "/",
    element:  <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>,
  },
  {
    path : "*",
    element : <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>
  }
]);

function App() {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
