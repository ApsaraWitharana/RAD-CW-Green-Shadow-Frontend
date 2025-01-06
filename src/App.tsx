import {createBrowserRouter, RouterProvider} from "react-router";
import {SidebarProvider} from "./component/SidebarContext.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {Dashboard} from "@mui/icons-material";
import {Staff} from "./pages/Staff.tsx";
import {Error} from "./pages/Error.tsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/staff", element: <Staff /> },
      ],
      errorElement: <Error />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (

      <SidebarProvider>
        <RouterProvider router={routes} />
      </SidebarProvider>
  );
}
export default App;
