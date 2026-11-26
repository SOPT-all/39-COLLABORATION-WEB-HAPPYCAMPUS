import { createBrowserRouter } from 'react-router';

import CartPage from '@pages/cart/cart';
import MaterialDetailPage from '@pages/material-detail/material-detail';
import NotFoundPage from '@pages/not-found/not-found';
import { ROUTE_PATH } from '@shared/constants/path';
import MainLayout from '@shared/ui/layout/layout';

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
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
