import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { ROUTE_PATH } from '../constants';

const Keyboard = lazy(() => import('../pages/KeyboardPage'));
const Test2 = lazy(() => import('../pages/Test2'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: ROUTE_PATH.ROOT, element: <Navigate to={ROUTE_PATH.KEYBOARD} /> },
    { path: ROUTE_PATH.KEYBOARD, element: <Keyboard /> },
    { path: ROUTE_PATH.TEST2, element: <Test2 /> },
  ]);

  return routes;
};

export default RouterConfig;
