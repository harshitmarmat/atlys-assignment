import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/wrapper/LayoutWrapper";
import Auth from "./components/auth/Auth";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Auth />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path:'/home',
      element : <Home />,
    }
  ]);

  return (
    <div className="App">
      <Layout>
        <RouterProvider router={appRouter}/>
      </Layout>
    </div>
  );
}

export default App;
