import { createBrowserRouter, Navigate } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth";
import { DcPage, MarvelPage, NotFound, HeroPage, SearchPage } from "../heroes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    errorElement: <NotFound />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage/>,
      },
      {
        path: "search",
        element: <SearchPage/>,
      },
      {
        path: "hero",
        element: <HeroPage/>,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);
