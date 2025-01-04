
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./component/RootLayout.tsx";
import { Error } from "./pages/Error";
import {Dashboard} from "@mui/icons-material";



function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
         { path: "/", element: <Dashboard/> },
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
