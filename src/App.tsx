import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/wrapper/LayoutWrapper";
import Auth from "./components/auth/Auth";
import NotFound from "./components/common/NotFound";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path : "*",
    element : <NotFound />
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
