import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Routes } from '@/types/routes.d';

import LazyAdministrationPage from '@/components/Administration/LazyAdministrationPage';
import LazyAboutPage from '@/components/About/LazyAboutPage';
import LazyHorowitzPage from '@/components/Horowitz/LazyHorowitzvPage';
import LazyUkrainianWork from '@/components/UkrainianWork/LazyUkrainianWirk';
import LazyArchivePage from '@/components/Archive/LazyArchivePage';
import LazySponsorsPage from '@/components/Sponsors/LazySponsorsPage';
// import SuspenseComponent from '@/components/Common/SuspenseComponent';
import LazyKyivGenevaPage from '@/components/KyivGeneva/LazyKyivGenevaPage';
import LazyKyivGenevaConditions from '@/components/KyivGenevaSubPages/Conditions/LazyKyivGenevaConditionsPage';
import LazyKyivGenevaOrchestra from '@/components/KyivGenevaSubPages/Orchestra/LazyKyivGenevaArchestra';
import LazyKyivGenevaParticipants from '@/components/KyivGenevaSubPages/Participants/LazyKyivGenevaParticipants';
import LazyKyivGenevaRegulation from '@/components/KyivGenevaSubPages/Regulation/LazyKyivGenevaRegulation';
import LazyKyivGenevaRequirements from '@/components/KyivGenevaSubPages/Requirements/LazyKyivGenevaRequirements';
import LazyKyivGenevaRewards from '@/components/KyivGenevaSubPages/Rewards/LazyKyivGenevaRewards';
import LazyKyivGenevaPreselectionJury from '@/components/KyivGenevaSubPages/PreselectionJury/LazyKyivGenevaPreselectionJury';
import LazyKyivGenevaPreselectionJuryList from '@/components/KyivGenevaSubPages/PreselectionJury/LazyKyivGenevaPreselectionJuryList';
import LazyKyivGenevaWinners from '@/components/KyivGenevaSubPages/Winners/LazyKyivGenevaWinners';
import LazyKyivGenevaSponsorsPage from '@/components/KyivGenevaSubPages/Sponsors/LazyKyivGenevaSpomsors';
import LazyKyivGenevaWFIMCPage from '@/components/KyivGenevaSubPages/WFIMC/LazyKyivGenevaWFIMC';
import LazyKyivGenevaLayout from '@/components/KyivGenevaSubPages/Layout/LazyKyivGenevaLayout';
import LazyKyivGenevaJuryList from '@/components/KyivGenevaSubPages/Jury/LazyKyivGenevaJuryList';
import LazyKyivGenevaJury from '@/components/KyivGenevaSubPages/Jury/LazyKyivGenevaJury';

import LazyVirtuosesPage from '../../components/Virtuoses/Main/LazyVirtuosesPage';
import LazyVirtuosasArticles from '@/components/Virtuoses/VirtuosesArticles/LazyVirtuosasArticles';
import LazyVirtuososCurrentArticle from '@/components/Virtuoses/VirtuososCurrentArticle/LazyVirtuososCurrentArticle';

import WithPreview from '@/components/SanityPreview/WithPreview';

import NewsCurrentPage from '@/components/NewsCurrentPage/NewsCurrentPage';
import NewsPageList from '@/components/NewsPageList/NewsPageList';
import CompetitionPage from '../../components/Competition/CompetitionPage';
import ContactsPage from '../../components/Contacts/ContactsPage';
import MainPage from '../../components/Main/MainPage';
import MasterClassPage from '../../components/MasterClass/MasterClassPage';
import NotFoundPage from '../../components/NotFound/NotFoundPage';
import SummerSchoolPage from '../../components/SummerSchool/SummerSchoolPage';

import ApplyPage from '@/components/Apply/ApplyPage';
import SupportUsPage from '@/components/SupportUs/SupportUsPage';
import PdfPage from '@/components/PdfRender/PdfPage';

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
        element: <LazyAboutPage />,
      },

      {
        path: Routes.HOROWITZ,
        element: <LazyHorowitzPage />,
      },
      {
        path: Routes.ADMINISTRATION,
        element: <LazyAdministrationPage />,
      },
      {
        path: Routes.UKRAINIAN_WORKS,
        element: <LazyUkrainianWork />,
      },
      {
        path: `${Routes.COMPETITIONS}/:${Routes.COMPETITION}`,
        element: <CompetitionPage />,
      },
      {
        path: `${Routes.ARCHIVE}`,
        element: <LazyArchivePage />,
      },
      {
        path: `pdf/:name`,
        element: <PdfPage />,
      },

      { path: Routes.MASTER_CLASS, element: <MasterClassPage /> },
      { path: Routes.SUMMER_SCHOOL, element: <SummerSchoolPage /> },
      {
        path: Routes.VIRTUOSES,
        element: <LazyVirtuosesPage />,
      },
      {
        path: Routes.VIRTUOSES_ARTICLE,
        element: <LazyVirtuosasArticles />,
      },
      {
        path: Routes.VIRTUOSES_CURRENT_ARTICLE,
        element: <LazyVirtuososCurrentArticle />,
      },

      { path: Routes.NEWS, element: <NewsPageList /> },
      { path: Routes.CURRENT_NEWS, element: <NewsCurrentPage /> },
      { path: Routes.CONTACTS, element: <ContactsPage /> },

      {
        path: Routes.SPONSORS,
        element: <LazySponsorsPage />,
      },

      {
        path: Routes.KYIV_GENEVA,
        element: <LazyKyivGenevaLayout />,
        children: [
          {
            index: true,
            element: <LazyKyivGenevaPage />,
          },
          {
            path: Routes.KYIV_GENEVA_CONDITIONS,
            element: <LazyKyivGenevaConditions />,
          },
          {
            path: Routes.KYIV_GENEVA_JURY,
            element: <LazyKyivGenevaJuryList />,
          },
          {
            path: `${Routes.KYIV_GENEVA_JURY}/:id`,
            element: <LazyKyivGenevaJury />,
          },
          {
            path: Routes.KYIV_GENEVA_PARTICIPANTS,
            element: <LazyKyivGenevaParticipants />,
          },
          {
            path: Routes.KYIV_GENEVA_REQUIREMENTS,
            element: <LazyKyivGenevaRequirements />,
          },
          {
            path: Routes.KYIV_GENEVA_SELECTION_JURY,
            element: <LazyKyivGenevaPreselectionJuryList />,
          },

          {
            path: `${Routes.KYIV_GENEVA_SELECTION_JURY}/:id`,
            element: <LazyKyivGenevaPreselectionJury />,
          },

          {
            path: Routes.KYIV_GENEVA_WINNERS,
            element: <LazyKyivGenevaWinners />,
          },
          {
            path: Routes.KYIV_GENEVA_REWARDS,
            element: <LazyKyivGenevaRewards />,
          },
          {
            path: Routes.KYIV_GENEVA_ORCHESTRA,
            element: <LazyKyivGenevaOrchestra />,
          },
          {
            path: Routes.KYIV_GENEVA_TIMETABLE,
            element: <LazyKyivGenevaRegulation />,
          },
          {
            path: Routes.KYIV_GENEVA_SPONSORS,
            element: <LazyKyivGenevaSponsorsPage />,
          },
          {
            path: Routes.KYIV_GENEVA_WFIMC,
            element: <LazyKyivGenevaWFIMCPage />,
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
