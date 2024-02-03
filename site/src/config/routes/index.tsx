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
import ArchivePage from '@/components/Archive/ArchivePage';
import InDevelopmentPage from '@/components/InDevelopmentPage/InDevelopmentPage';
import WithPreview from '@/components/SanityPreview/WithPreview';
import { Routes } from '@/types/routes.d';
import NewsPageList from '@/components/NewsPageList/NewsPageList';
import NewsCurrentPage from '@/components/NewsCurrentPage/NewsCurrentPage';
import KyivGenevaConditions from '@/components/KyivGenevaSubPages/Conditions/KyivGenevaConditions';
import KyivGenevaJury from '@/components/KyivGenevaSubPages/JuryList/KyivGenevaJury';
import KyivGenevaParticipants from '@/components/KyivGenevaSubPages/Participants/KyivGenevaParticipants';
import KyivGenevaRequirements from '@/components/KyivGenevaSubPages/Requirements/KyivGenevaRequirements';
import KyivGenevaSelectionJury from '@/components/KyivGenevaSubPages/SelectionJury/KyivGenevaSelectionJury';
import KyivGenevaWinners from '@/components/KyivGenevaSubPages/Winners/KyivGenevaWinners';
import KyivGenevaRewards from '@/components/KyivGenevaSubPages/Rewards/KyivGenevaRewards';
import KyivGenevaOrchestra from '@/components/KyivGenevaSubPages/Orchestra/KyivGenevaOrchestra';
import KyivGenevaRegulation from '@/components/KyivGenevaSubPages/Regulation/KyivGenevaRegulation';

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
        path: Routes.HOROWITZ,
        element: <HorowitzPage />,
      },

      {
        path: `:${Routes.COMPETITION}`,
        element: <CompetitionPage />,
      },
      {
        path: `${Routes.ARCHIVE}`,
        element: <ArchivePage />,
      },

      { path: Routes.MASTER_CLASS, element: <MasterClassPage /> },
      { path: Routes.SUMMER_SCHOOL, element: <SummerSchoolPage /> },
      { path: Routes.VIRTUOSES, element: <VirtuosesPage /> },
      { path: Routes.NEWS, element: <NewsPageList /> },
      { path: Routes.CURRENT_NEWS, element: <NewsCurrentPage /> },
      { path: Routes.CONTACTS, element: <ContactsPage /> },
      { path: Routes.ADMINISTRATION, element: <AdministrationPage /> },

      {
        path: Routes.KYIV_GENEVA,
        element: <KyivGenevaPage />,
      },
      {
        path: `${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_CONDITIONS}`,
        element: <KyivGenevaConditions />,
      },
      {
        path: `${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_JURY}`,
        element: <KyivGenevaJury />,
      },
      {
        path: `${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_PARTICIPANTS}`,
        element: <KyivGenevaParticipants />,
      },
      {
        path: `${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_REQUIREMENTS}`,
        element: <KyivGenevaRequirements />,
      },
      {
        path: `${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_SELECTION_JURY}`,
        element: <KyivGenevaSelectionJury />,
      },
      {
        path: `${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_WINNERS}`,
        element: <KyivGenevaWinners />,
      },
      {
        path: `${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_REWARDS}`,
        element: <KyivGenevaRewards />,
      },
      {
        path: `${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_ORCHESTRA}`,
        element: <KyivGenevaOrchestra />,
      },
      {
        path: `${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_TIMETABLE}`,
        element: <KyivGenevaRegulation />,
      },
      {
        path: 'in-development',
        element: <InDevelopmentPage />,
      },
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
