
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./component/RootLayout.tsx";
import { Error } from "./pages/Error";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Staff} from "./pages/Staff.tsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
         { path: "/dashboard", element: <Dashboard/> },
         { path: "/staff", element: <Staff/> },

      ],
      errorElement: <Error />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
      <RouterProvider router={routes} />
  )
}

export default App
