import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from './LayOut/MainLayOut';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Build from './pages/Build/Build';
import Cloud from './pages/Cloud/Cloud';
import Mail from './pages/Mail/Mail';
import Bookmark from './pages/Bookmark/Bookmark';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/build',
        element: <Build />,
      },
      {
        path: '/cloud',
        element: <Cloud />,
      },
      {
        path: '/mail',
        element: <Mail />,
      },
      {
        path: '/bookmark',
        element: <Bookmark />,
      },
    ],
  },
]);

export default router;
