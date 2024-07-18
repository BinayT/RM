import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import Layout from "./components/layout/Layout";
import { MyProvider } from "./context/meetupContext";
import ErrorPage from './pages/404';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><AllMeetupsPage /></Layout>,
      errorElement: <Layout><ErrorPage /></Layout>
    },
    {
      path: '/favorite-meetups',
      element: <Layout><FavoritesPage /></Layout>
    },
    {
      path: '/new-meetup',
      element: <Layout><NewMeetupsPage /></Layout>
    },
  ]);

  return (
    <MyProvider>
      <div data-test="app">
        <RouterProvider router={router} />
      </div>
    </MyProvider>
  );
}

export default App;
