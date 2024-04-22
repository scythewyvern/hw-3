import { RouterProvider, createHashRouter } from 'react-router-dom';

import RootLayout, { rootLoader } from './pages/RootLayout';
import ShipPage from './pages/Ship';
import { shipLoader } from './pages/Ship/shipLoader';
import { shipsLoader } from './pages/Ships';
import ShipsPage from './pages/Ships/Ships';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    loader: rootLoader,
    children: [
      {
        path: '',
        element: <ShipsPage />,
        loader: shipsLoader,
      },
      {
        path: 'ships/:id',
        element: <ShipPage />,
        loader: shipLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
