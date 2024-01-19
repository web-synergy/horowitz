import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainPage from '../../components/Main/MainPage';
import NotFoundPage from '../../components/NotFound/NotFoundPage';
import AboutPage from '../../components/About/AboutPage';
import KyivGenevaPage from '../../components/KyivGeneva/KyivGenevaPage';
import HorowitzPage from '../../components/Horowitz/HorowitzPage';
import CompetitionPage from '../../components/Competition/CompetitionPage';
import MasterClassPage from '../../components/MasterClass/MasterClassPage';
import SummerSchoolPage from '../../components/SummerSchool/SummerSchoolPage';
import VirtuosesPage from '../../components/Virtuoses/VirtuosesPage';
import ContactsPage from '../../components/Contacts/ContactsPage';
import AdministrationPage from '@/components/Administration/AdministrationPage';

import { Routes } from '@/types/routes.d';
import WithPreview from '@/components/SanityPreview/WithPreview';
import NewsPageList from '../../components/News/NewsPageList';
import NewsCurrentPage from '@/components/News/NewsCurrentPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <WithPreview />,
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
      {
        path: `:${Routes.COMPETITION}`,
        element: <CompetitionPage />,
      },
      { path: Routes.MASTER_CLASS, element: <MasterClassPage /> },
      { path: Routes.SUMMER_SCHOOL, element: <SummerSchoolPage /> },
      { path: Routes.VIRTUOSES, element: <VirtuosesPage /> },
      { path: Routes.NEWS, element: <NewsPageList /> },
      { path: Routes.CURRENT_NEWS, element: <NewsCurrentPage /> },
      { path: Routes.CONTACTS, element: <ContactsPage /> },
      { path: Routes.ADMINISTRATION, element: <AdministrationPage /> },
      {
        path: '404',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'404'} />,
  },
]);

export default routes;
