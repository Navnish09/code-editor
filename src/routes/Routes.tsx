import React from "react";

import pageRoutes from "configs/pageRoutes.json";
import { Landing } from "pages";

/****Pages*****/
const componentsMap = {
  Landing
}

/*****Routes******/
export const Routes = pageRoutes.map((route) => {
  const Component = componentsMap[route.component as keyof typeof componentsMap];

  return ({
    path: route.path,
    element: <Component key={route.path} />,
  });
})

export default Routes;
