import Layout from "../layouts/Layout";
import { AboutPage, HomePage, NotFoundPage, SearchingPage, ChosenMoviePage } from "../pages";
import { routeNames } from "./const";

export const routes = [
    {
      element : <Layout/>,
      path : routeNames.HOME,
      children : [

      {  index : true,
        element : <HomePage/>,
      },
      {element : <AboutPage/>,
        path : routeNames.ABOUT
      },
      {element : <ChosenMoviePage/>,
        path : routeNames.CHOSEN
      },
      {element : <SearchingPage/>,
        path : routeNames.SEARCHING
      },
      {element : <NotFoundPage/>,
        path : routeNames.NOTFOUND
      },
      ]
    },

]