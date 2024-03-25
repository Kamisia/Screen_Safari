import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Search, Landing, TopRented } from "./pages";
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

      {
        path: "/toprented",
        element: <TopRented />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
