import { Navigate, RouteObject } from "react-router-dom";

import { isAuthenticated } from "@utils/helpers";

import Main from "@layouts/Main";
import Products from "@pages/Products/Products";
import Cart from "@pages/Products/Cart";
import Address from "@pages/Address/Address";

const Default = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to={"/"} />;
};

const routes: RouteObject[] = [
  {
    path: "/app",
    element: <Main />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "address",
        element: <Address />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/app/products"} />,
  },
];

export default routes;
