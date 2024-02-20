import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Search, Landing } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },

      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
