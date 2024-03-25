import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Routes } from '@/types/routes.d'

import LazyAboutPage from '@/components/About/LazyAboutPage'
import LazyAdministrationPage from '@/components/Administration/LazyAdministrationPage'
import LazyArchivePage from '@/components/Archive/LazyArchivePage'
import LazyHorowitzPage from '@/components/Horowitz/LazyHorowitzvPage'
import LazySponsorsPage from '@/components/Sponsors/LazySponsorsPage'
import LazyUkrainianWork from '@/components/UkrainianWork/LazyUkrainianWirk'
// import SuspenseComponent from '@/components/Common/SuspenseComponent';
import LazyKyivGenevaPage from '@/components/KyivGeneva/LazyKyivGenevaPage'
import LazyKyivGenevaConditions from '@/components/KyivGenevaSubPages/Conditions/LazyKyivGenevaConditionsPage'
import LazyKyivGenevaJury from '@/components/KyivGenevaSubPages/Jury/LazyKyivGenevaJury'
import LazyKyivGenevaJuryList from '@/components/KyivGenevaSubPages/Jury/LazyKyivGenevaJuryList'
import LazyKyivGenevaLayout from '@/components/KyivGenevaSubPages/Layout/LazyKyivGenevaLayout'
import LazyKyivGenevaOrchestra from '@/components/KyivGenevaSubPages/Orchestra/LazyKyivGenevaArchestra'
import LazyKyivGenevaParticipants from '@/components/KyivGenevaSubPages/Participants/LazyKyivGenevaParticipants'
import LazyKyivGenevaPreselectionJury from '@/components/KyivGenevaSubPages/PreselectionJury/LazyKyivGenevaPreselectionJury'
import LazyKyivGenevaPreselectionJuryList from '@/components/KyivGenevaSubPages/PreselectionJury/LazyKyivGenevaPreselectionJuryList'
import LazyKyivGenevaRegulation from '@/components/KyivGenevaSubPages/Regulation/LazyKyivGenevaRegulation'
import LazyKyivGenevaRequirements from '@/components/KyivGenevaSubPages/Requirements/LazyKyivGenevaRequirements'
import LazyKyivGenevaRewards from '@/components/KyivGenevaSubPages/Rewards/LazyKyivGenevaRewards'
import LazyKyivGenevaSponsorsPage from '@/components/KyivGenevaSubPages/Sponsors/LazyKyivGenevaSpomsors'
import LazyKyivGenevaWFIMCPage from '@/components/KyivGenevaSubPages/WFIMC/LazyKyivGenevaWFIMC'
import LazyKyivGenevaWinners from '@/components/KyivGenevaSubPages/Winners/LazyKyivGenevaWinners'

import LazySummerSchoolPage from '@/components/SummerSchool/LazySummerSchoolPage'
import LazyVirtuosasArticles from '@/components/Virtuoses/VirtuosesArticles/LazyVirtuosasArticles'
import LazyVirtuososCurrentArticle from '@/components/Virtuoses/VirtuososCurrentArticle/LazyVirtuososCurrentArticle'
import LazyVirtuosesPage from '../../components/Virtuoses/Main/LazyVirtuosesPage'

import WithPreview from '@/components/SanityPreview/WithPreview'

import ApplyPage from '@/components/Apply/ApplyPage'
import NewsCurrentPage from '@/components/NewsCurrentPage/NewsCurrentPage'
import NewsPageList from '@/components/NewsPageList/NewsPageList'
import PdfPage from '@/components/PdfRender/PdfPage'
import SupportUsPage from '@/components/SupportUs/SupportUsPage'
import CompetitionPage from '../../components/Competition/CompetitionPage'
import ContactsPage from '../../components/Contacts/ContactsPage'
import MainPage from '../../components/Main/MainPage'
import MasterClassPage from '../../components/MasterClass/MasterClassPage'
import NotFoundPage from '../../components/NotFound/NotFoundPage'

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
      { path: Routes.SUMMER_SCHOOL, element: <LazySummerSchoolPage /> },
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
])

export default routes
