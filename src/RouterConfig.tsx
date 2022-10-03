import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Test = lazy(() => import('./pages/Test'));
const Test2 = lazy(() => import('./pages/Test2'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: '/test', element: <Test /> },
    { path: '/test2', element: <Test2 /> },
  ]);

  return routes;
};

export default RouterConfig;
