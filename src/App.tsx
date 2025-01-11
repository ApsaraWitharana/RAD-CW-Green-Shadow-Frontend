import {createBrowserRouter, RouterProvider} from "react-router";
import {SidebarProvider} from "./component/SidebarContext.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {Staffs} from "./pages/Staff.tsx";
import {Error} from "./pages/Error.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import  {FieldForm} from "./pages/Field.tsx";
import {CropForm} from "./pages/Crop.tsx";
import {EquipmentForm} from "./pages/Equipment.tsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/staff", element: <Staffs/> },
        { path: "/field", element: <FieldForm/> },
        { path: "/crop", element: <CropForm/> },
        { path: "/equipment", element: <EquipmentForm/> },
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
