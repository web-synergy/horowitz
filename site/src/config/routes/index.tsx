import { createBrowserRouter } from 'react-router-dom'

import SharedLayout from '../../components/Common/SharedLayout'
import Contacts from '../../components/Contacts/Contacts'
import MainPage from '../../components/Main/MainPage'
import NotFoundPage from '../../components/NotFound/NotFoundPage'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default routes
