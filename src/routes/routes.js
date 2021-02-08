import paths from "./paths";
import features from "../features";
import {
  Home,
  Login,
  Register,
  Checkout,
  OrderSummary,
  ActiveOrders,
} from "../pages";
import strings from "../utils/localization";

import { appendPathTemplate, pathTemplate } from "../utils/routing";

export const homepage = {
  ...features.homepage,
  path: pathTemplate(paths.home),
  name: strings.home,
  component: Home,
};

export const publicRoutes = [
  homepage,
  {
    ...features.login,
    path: pathTemplate(paths.login),
    name: strings.login,
    component: Login,
  },
  {
    ...features.register,
    path: pathTemplate(paths.register),
    name: strings.register,
    component: Register,
  },
];

export const gaurdedRoutes = [
  {
    ...features.checkout,
    path: pathTemplate(paths.checkout),
    name: strings.checkout,
    component: Checkout,
  },
  {
    id: "orders",
    name: strings.orders,
    children: [
      {
        ...features.orderSummary,
        path: pathTemplate(paths.orderSummary),
        name: strings.orderSummary,
        component: OrderSummary,
      },
      {
        ...features.activeOrders,
        path: pathTemplate(paths.activeOrders),
        name: strings.activeOrders,
        component: ActiveOrders,
      },
    ],
  },
];

const reducer = (links = [], current) => {
  if (current.children) {
    return links.concat(current.children.reduce(reducer, []));
  } else {
    return links.concat(current);
  }
};

export default []
  .concat(publicRoutes.reduce(reducer, []))
  .concat(gaurdedRoutes.reduce(reducer, []));
