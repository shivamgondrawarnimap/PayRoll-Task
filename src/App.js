import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import { PATH } from './utils/constants';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import Home from './components/pages/home/Home';

function App() {

  const routing = createBrowserRouter([
    ...Object.values(PATH.publicRoutes).map(route => ({
      path: route.path,
      element: <PublicRoute component={route.element} />,
    })),
    {
      path: "/",
      element: <PrivateRoute component={Home} />,
      children: [
        ...Object.values(PATH.privateRoutes).map(child => ({
          path: child.path,
          element: child.element,
          permissionName: child.permissionName,
          children: child?.children && Object.values(child.children).map(x => ({
            path: x.path,
            element: x.element,
          })),
        })),
        {
          path: "/",
          element: <Navigate to={PATH.privateRoutes.HOME.path} />
        },
        {
          path: "*",
          element: <Navigate to={PATH.privateRoutes.HOME.path} />
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routing} />
    </div>
  );
}

export default App;
