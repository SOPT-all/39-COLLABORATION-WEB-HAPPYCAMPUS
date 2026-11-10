import CartPage from "@pages/cart/cart";
import MaterialDetailPage from "@pages/material-detail/material-detail";
import { ROUTE_PATH } from "@routes/path";
import MainLayout from "@shared/ui/layout/layout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: ROUTE_PATH.MATERIAL_DETAIL,
        Component: MaterialDetailPage,
      },
      {
        path: ROUTE_PATH.CART,
        Component: CartPage,
      },
    ],
  },
]);

export default router;
