import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Search, Landing, TopRented } from "./pages";
const router = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL,
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },

      {
        path: `${import.meta.env.BASE_URL}search`,
        element: <Search />,
      },

      {
        path: `${import.meta.env.BASE_URL}toprented`,
        element: <TopRented />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
