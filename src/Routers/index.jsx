import { Suspense, lazy } from "react";
import Layout from "../layouts/Layout";
import { routeNames } from "./const";
import LazyLoading from "../components/Loading/LazyLoading";
import { Stack } from "@mui/system";

const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const AboutPage = lazy(() => import("../pages/aboutPage/About"));
const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));
const SearchingPage = lazy(() => import("../pages/searchingPage/SearchingPage"));
const ChosenMoviePage = lazy(() => import("../pages/chosenMoviePage/ChosenMoviePage"));

const Loader = () => <Stack height='75vh' 
                            width='100vw' 
                            justifyContent='center' 
                            alignItems='center'><LazyLoading/></Stack>;

export const routes = [
  {
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    path: routeNames.HOME,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: routeNames.ABOUT,
        element: (
          <Suspense fallback={<Loader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: routeNames.CHOSEN,
        element: (
          <Suspense fallback={<Loader />}>
            <ChosenMoviePage />
          </Suspense>
        ),
      },
      {
        path: routeNames.SEARCHING,
        element: (
          <Suspense fallback={<Loader />}>
            <SearchingPage />
          </Suspense>
        ),
      },
      {
        path: routeNames.NOTFOUND,
        element: (
          <Suspense fallback={<Loader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];
