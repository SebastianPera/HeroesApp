import { createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth";
import { DcPage, MarvelPage, NotFound, HeroPage, SearchPage } from "../heroes";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from "./PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <PrivateRoute>
        <HeroesApp />
      </PrivateRoute>,
    errorElement: <NotFound />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "hero/:id",
        element: <HeroPage />,
      },
    ],
  },
  {
    path: "login",
    element: 
    <PublicRoute>
      <LoginPage />,
    </PublicRoute>
  },
]);
