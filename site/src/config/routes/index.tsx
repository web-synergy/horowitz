import AdministrationPage from '@/components/Administration/AdministrationPage';
import ArchivePage from '@/components/Archive/ArchivePage';
import KyivGenevaConditions from '@/components/KyivGenevaSubPages/Conditions/KyivGenevaConditions';
import KyivGenevaOrchestra from '@/components/KyivGenevaSubPages/Orchestra/KyivGenevaOrchestra';
import KyivGenevaParticipants from '@/components/KyivGenevaSubPages/Participants/KyivGenevaParticipants';
import KyivGenevaRegulation from '@/components/KyivGenevaSubPages/Regulation/KyivGenevaRegulation';
import KyivGenevaRequirements from '@/components/KyivGenevaSubPages/Requirements/KyivGenevaRequirements';
import KyivGenevaRewards from '@/components/KyivGenevaSubPages/Rewards/KyivGenevaRewards';
import KyivGenevaPreselectionJury from '@/components/KyivGenevaSubPages/PreselectionJury/KyivGenevaPreselectionJury';
import KyivGenevaPreselectionJuryList from '@/components/KyivGenevaSubPages/PreselectionJury/KyivGenevaPreselectionJuryList';
import KyivGenevaWinners from '@/components/KyivGenevaSubPages/Winners/KyivGenevaWinners';
import KyivGenevaSponsorsPage from '@/components/KyivGenevaSubPages/Sponsors/KyivGenevaSponsors';
import KyivGenevaWFIMCPage from '@/components/KyivGenevaSubPages/WFIMC/KyivGenevaWFIMC';
import KyivGenevaLayout from '@/components/KyivGenevaSubPages/Layout/KyivGenevaLayout';
import KyivGenevaJuryList from '@/components/KyivGenevaSubPages/Jury/KyivGenevaJuryList';
import KyivGenevaJury from '@/components/KyivGenevaSubPages/Jury/KyivGenevaJury';
import UkrainianComposition from '@/components/UkrainianComposition/UkrainianComposition';
import NewsCurrentPage from '@/components/NewsCurrentPage/NewsCurrentPage';
import NewsPageList from '@/components/NewsPageList/NewsPageList';
import WithPreview from '@/components/SanityPreview/WithPreview';
import SponsorsPage from '@/components/Sponsors/SponsorsPage';
import { Routes } from '@/types/routes.d';
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
import VirtuosesPage from '../../components/Virtuoses/Main/VirtuosesPage';
import ApplyPage from '@/components/Apply/ApplyPage';
import SupportUsPage from '@/components/SupportUs/SupportUsPage';
import VirtuosasArticles from '@/components/Virtuoses/VirtuosesArticles/VirtuosasArticles';
import VirtuososCurrentArticle from '@/components/Virtuoses/VirtuososCurrentArticle/VirtuososCurrentArticle';

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
        path: Routes.UKRAINIAN_WORKS,
        element: <UkrainianComposition />,
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
      { path: Routes.VIRTUOSES_ARTICLE, element: <VirtuosasArticles /> },
      {
        path: Routes.VIRTUOSES_CURRENT_ARTICLE,
        element: <VirtuososCurrentArticle />,
      },

      { path: Routes.NEWS, element: <NewsPageList /> },
      { path: Routes.CURRENT_NEWS, element: <NewsCurrentPage /> },
      { path: Routes.CONTACTS, element: <ContactsPage /> },
      { path: Routes.ADMINISTRATION, element: <AdministrationPage /> },
      {
        path: Routes.SPONSORS,
        element: <SponsorsPage />,
      },

      {
        path: Routes.KYIV_GENEVA,
        element: <KyivGenevaLayout />,
        children: [
          {
            index: true,
            element: <KyivGenevaPage />,
          },
          {
            path: Routes.KYIV_GENEVA_CONDITIONS,
            element: <KyivGenevaConditions />,
          },
          {
            path: Routes.KYIV_GENEVA_JURY,
            element: <KyivGenevaJuryList />,
          },
          {
            path: `${Routes.KYIV_GENEVA_JURY}/:id`,
            element: <KyivGenevaJury />,
          },
          {
            path: Routes.KYIV_GENEVA_PARTICIPANTS,
            element: <KyivGenevaParticipants />,
          },
          {
            path: Routes.KYIV_GENEVA_REQUIREMENTS,
            element: <KyivGenevaRequirements />,
          },
          {
            path: Routes.KYIV_GENEVA_SELECTION_JURY,
            element: <KyivGenevaPreselectionJuryList />,
          },

          {
            path: `${Routes.KYIV_GENEVA_SELECTION_JURY}/:id`,
            element: <KyivGenevaPreselectionJury />,
          },

          {
            path: Routes.KYIV_GENEVA_WINNERS,
            element: <KyivGenevaWinners />,
          },
          {
            path: Routes.KYIV_GENEVA_REWARDS,
            element: <KyivGenevaRewards />,
          },
          {
            path: Routes.KYIV_GENEVA_ORCHESTRA,
            element: <KyivGenevaOrchestra />,
          },
          {
            path: Routes.KYIV_GENEVA_TIMETABLE,
            element: <KyivGenevaRegulation />,
          },
          {
            path: Routes.KYIV_GENEVA_SPONSORS,
            element: <KyivGenevaSponsorsPage />,
          },
          {
            path: Routes.KYIV_GENEVA_WFIMC,
            element: <KyivGenevaWFIMCPage />,
          },
        ],
      },

      {
        path: Routes.APPLY,
        element: <ApplyPage />,
      },
      {
        path: Routes.SUPPORT,
        element: <SupportUsPage />,
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
