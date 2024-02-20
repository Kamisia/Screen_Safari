import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Search } from "./pages";
const router = createBrowserRouter([
  { path: "/", element: <HomeLayout /> },
  {
    path: "/search",
    element: <Search />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
