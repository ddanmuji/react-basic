import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTE_PATH } from '../constants';

const Test = lazy(() => import('../pages/Test'));
const Test2 = lazy(() => import('../pages/Test2'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: ROUTE_PATH.TEST, element: <Test /> },
    { path: ROUTE_PATH.TEST2, element: <Test2 /> },
  ]);

  return routes;
};

export default RouterConfig;
