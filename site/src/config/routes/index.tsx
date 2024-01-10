import { createBrowserRouter } from 'react-router-dom';
import SharedLayout from '../../components/Common/SharedLayout';
import MainPage from '../../components/Main/MainPage';
import NotFoundPage from '../../components/NotFound/NotFoundPage';
import AboutPage from '../../components/About/AboutPage';
import KyivGenevaPage from '../../components/KyivGeneva/KyivGenevaPage';
import HorowitzPage from '../../components/Horowitz/HorowitzPage';
import CompetitionPage from '../../components/Competition/CompetitionPage';
import MasterClassPage from '../../components/MasterClass/MasterClassPage';
import SummerSchoolPage from '../../components/SummerSchool/SummerSchoolPage';
import VirtuosesPage from '../../components/Virtuoses/VirtuosesPage';
import NewsPage from '../../components/News/NewsPage';
import ContactsPage from '../../components/Contacts/ContactsPage';

import { Routes } from '../../types/routes';

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
        path: Routes.DETAILS,
        element: <AboutPage />,
      },
      {
        path: Routes.KYIV_GENEVA,
        element: <KyivGenevaPage />,
      },
      {
        path: Routes.HOROWITZ,
        element: <HorowitzPage />,
      },
      { path: `:${Routes.COMPETITION}`, element: <CompetitionPage /> },
      { path: Routes.MASTER_CLASS, element: <MasterClassPage /> },
      { path: Routes.SUMMER_SCHOOL, element: <SummerSchoolPage /> },
      { path: Routes.VIRTUOSES, element: <VirtuosesPage /> },
      { path: Routes.NEWS, element: <NewsPage /> },
      { path: Routes.CONTACTS, element: <ContactsPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default routes;
