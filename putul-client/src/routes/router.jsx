import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import AllToys from "../pages/AllToys";
import AddToy from "../pages/AddToy";
import MyToys from "../pages/MyToys";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Page404 from "../pages/Page404";
import UserProfile from "../pages/UserProfile";
import PrivateRoute from "./PrivateRouter";
import ToyDetail from "../pages/ToyDetail";
import { allToyLoader, homeLoader } from "../utils/loader";
import AllToysDataProvider from "../providers/AllToysDataProvider";
import AddToyDataProvider from "../providers/AddToyDataProvider";
import MyToysDataProvider from "../providers/MyToysDataProvider";
import EditToy from "../pages/EditToy";
import MyToyEditDataProvider from "../providers/MyToyEditDataProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/all-toys",
        element: (
          <AllToysDataProvider>
            <AllToys />
          </AllToysDataProvider>
        ),
        loader: allToyLoader,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://putul-server.vercel.app/v1/figure/${params.id}`),
      },
      {
        path: "/add-a-toy",
        element: (
          <PrivateRoute>
            <AddToyDataProvider>
              <AddToy />
            </AddToyDataProvider>
          </PrivateRoute>
        ),
        loader: () => fetch("https://putul-server.vercel.app/v1/categories"),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToysDataProvider>
              <MyToys />
            </MyToysDataProvider>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-toys/edit/:id",
        element: (
          <PrivateRoute>
            <MyToyEditDataProvider>
              <EditToy />
            </MyToyEditDataProvider>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://putul-server.vercel.app/v1/figure/${params.id}`),
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
