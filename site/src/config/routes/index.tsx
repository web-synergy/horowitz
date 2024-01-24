import AdministrationPage from '@/components/Administration/AdministrationPage';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import AboutPage from '../../components/About/AboutPage';
import CompetitionPage from '../../components/Competition/CompetitionPage';
import ContactsPage from '../../components/Contacts/ContactsPage';
import HorowitzPage from '../../components/Horowitz/HorowitzPage';
import KyivGenevaPage from '../../components/KyivGeneva/KyivGenevaPage';
import MainPage from '../../components/Main/MainPage';
import MasterClassPage from '../../components/MasterClass/MasterClassPage';
import NotFoundPage from '../../components/NotFound/NotFoundPage';
import SummerSchoolPage from '../../components/SummerSchool/SummerSchoolPage';
import VirtuosesPage from '../../components/Virtuoses/VirtuosesPage';

import InDevelopmentPage from '@/components/InDevelopmentPage/InDevelopmentPage';
import WithPreview from '@/components/SanityPreview/WithPreview';
import { Routes } from '@/types/routes.d';
import NewsPageList from '@/components/NewsPageList/NewsPageList';
import NewsCurrentPage from '@/components/NewsCurrentPage/NewsCurrentPage';

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
      {
        path: 'in-development',
        element: <InDevelopmentPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'404'} />,
  },
]);

export default routes;
