import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Routes } from '@/types/routes.d';
import WithPreview from '@/components/SanityPreview/WithPreview';
//цієї сторінки не буде, замість неї буде посилання на анкету для участі
import ApplyPage from '@/components/Apply/ApplyPage';

import LazyAboutPage from '@/components/About/LazyAboutPage';
import LazyAdministrationPage from '@/components/Administration/LazyAdministrationPage';
import LazyArchivePage from '@/components/Archive/LazyArchivePage';
import LazyHorowitzPage from '@/components/Horowitz/LazyHorowitzvPage';
import LazySponsorsPage from '@/components/Sponsors/LazySponsorsPage';
import LazyUkrainianWork from '@/components/UkrainianWork/LazyUkrainianWirk';
import LazyKyivGenevaPage from '@/components/KyivGeneva/LazyKyivGenevaPage';
import LazyKyivGenevaConditions from '@/components/KyivGenevaSubPages/Conditions/LazyKyivGenevaConditionsPage';
import LazyKyivGenevaJury from '@/components/KyivGenevaSubPages/Jury/LazyKyivGenevaJury';
import LazyKyivGenevaJuryList from '@/components/KyivGenevaSubPages/Jury/LazyKyivGenevaJuryList';
import LazyKyivGenevaLayout from '@/components/KyivGenevaSubPages/Layout/LazyKyivGenevaLayout';
import LazyKyivGenevaOrchestra from '@/components/KyivGenevaSubPages/Orchestra/LazyKyivGenevaArchestra';
import LazyKyivGenevaParticipants from '@/components/KyivGenevaSubPages/Participants/LazyKyivGenevaParticipants';
import LazyKyivGenevaPreselectionJury from '@/components/KyivGenevaSubPages/PreselectionJury/LazyKyivGenevaPreselectionJury';
import LazyKyivGenevaPreselectionJuryList from '@/components/KyivGenevaSubPages/PreselectionJury/LazyKyivGenevaPreselectionJuryList';
import LazyKyivGenevaRegulation from '@/components/KyivGenevaSubPages/Regulation/LazyKyivGenevaRegulation';
import LazyKyivGenevaRequirements from '@/components/KyivGenevaSubPages/Requirements/LazyKyivGenevaRequirements';
import LazyKyivGenevaRewards from '@/components/KyivGenevaSubPages/Rewards/LazyKyivGenevaRewards';
import LazyKyivGenevaSponsorsPage from '@/components/KyivGenevaSubPages/Sponsors/LazyKyivGenevaSpomsors';
import LazyKyivGenevaWFIMCPage from '@/components/KyivGenevaSubPages/WFIMC/LazyKyivGenevaWFIMC';
import LazyKyivGenevaWinners from '@/components/KyivGenevaSubPages/Winners/LazyKyivGenevaWinners';

import LazySummerSchoolPage from '@/components/SummerSchool/LazySummerSchoolPage';
import LazySchoolLayout from '@/components/SummerSchoolSubPages/SchoolLayout/LazySchoolLayout';
import LazyMainSchool from '@/components/SummerSchoolSubPages/Main/LazyMainSchool';
import LazyEnvironments from '@/components/SummerSchoolSubPages/Environments/LazyEnvironments';
import LazyProfessors from '@/components/SummerSchoolSubPages/Professors/LazyProfessors';
import LazyProfessor from '@/components/SummerSchoolSubPages/Professor/LazyProfessor';
import LazyStudents from '@/components/SummerSchoolSubPages/Students/LazySturdents';
import LazySchedules from '@/components/SummerSchoolSubPages/Schedules/LazySchedules';

import LazyPlaces from '@/components/SummerSchoolSubPages/Places/LazyPlaces';

import LazyVirtuosasArticles from '@/components/Virtuoses/VirtuosesArticles/LazyVirtuosasArticles';
import LazyVirtuososCurrentArticle from '@/components/Virtuoses/VirtuososCurrentArticle/LazyVirtuososCurrentArticle';
import LazyVirtuosesPage from '../../components/Virtuoses/Main/LazyVirtuosesPage';

import LazyPdfPage from '@/components/PdfRender/LazyPdfPage';
import LazyNewsCurrentPage from '@/components/NewsCurrentPage/LazyNewsCurrentPage';
import LazyNewsPageList from '@/components/NewsPageList/LazyNewsPageList';
import LazySupportUsPage from '@/components/SupportUs/LazySupportUsPage';
import LazyCompetitionPage from '@/components/Competition/LazyCompetitionPage';
import LazyContactsPage from '@/components/Contacts/LazyContactsPage';
import LazyMainPage from '@/components/Main/LazyMainPage';
import LazyMasterClassPage from '@/components/MasterClass/LazyMasterClassPage';
import LazyNotFoundPage from '@/components/NotFound/LazyNotFoundPage';
import LazyCurrentConcert from '@/components/SummerSchoolSubPages/Concerts/CurrentConcert/LazyCurrentConcert';
import LazyConcertsList from '@/components/SummerSchoolSubPages/Concerts/ConcertsList/LazyConcertsList';

import LazyGroupLayout from '@/components/Templates/GroupLayout/LazyGroupLayout';
import LazyGroupPage from '@/components/Group/LazyGroupPage';
import LazyJuniorPage from '@/components/Junior/LazyJuniorPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <WithPreview />,
    children: [
      {
        index: true,
        element: <LazyMainPage />,
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
        element: <LazyCompetitionPage />,
      },
      {
        path: `${Routes.COMPETITIONS}/:${Routes.COMPETITION}/${Routes.JUNIOR}`,
        element: <LazyGroupLayout />,
        children: [
          {
            index: true,
            element: <LazyJuniorPage />,
          },
        ],
      },
      {
        path: `${Routes.COMPETITIONS}/:${Routes.COMPETITION}/${Routes.INTERMEDIATE}`,
        element: <LazyGroupLayout />,
        children: [
          {
            index: true,
            element: <LazyGroupPage title={Routes.INTERMEDIATE} />,
          },
        ],
      },
      {
        path: `${Routes.COMPETITIONS}/:${Routes.COMPETITION}/${Routes.SENIOR}`,
        element: <LazyGroupLayout />,
        children: [
          {
            index: true,
            element: <LazyGroupPage title={Routes.SENIOR} />,
          },
        ],
      },
      {
        path: `${Routes.ARCHIVE}`,
        element: <LazyArchivePage />,
      },
      {
        path: `pdf/:name`,
        element: <LazyPdfPage />,
      },

      { path: Routes.MASTER_CLASS, element: <LazyMasterClassPage /> },
      { path: Routes.SUMMER_SCHOOL, element: <LazySummerSchoolPage /> },
      {
        path: `${Routes.SUMMER_SCHOOL}/:${Routes.SUMMER_SCHOOL_MAIN}`,
        element: <LazySchoolLayout />,
        children: [
          {
            index: true,
            element: <LazyMainSchool />,
          },
          {
            path: Routes.SUMMER_SCHOOL_CONDITIONS,
            element: <LazyEnvironments />,
          },
          {
            path: Routes.SUMMER_SCHOOL_PROFESSORS,
            element: <LazyProfessors />,
          },
          {
            path: `${Routes.SUMMER_SCHOOL_PROFESSORS}/:${Routes.SUMMER_SCHOOL_PROFESSOR}`,
            element: <LazyProfessor />,
          },
          {
            path: Routes.SUMMER_SCHOOL_STUDENTS,
            element: <LazyStudents />,
          },
          {
            path: Routes.SUMMER_SCHOOL_SCHEDULES,
            element: <LazySchedules />,
          },
          {
            path: Routes.SUMMER_SCHOOL_CONCERTS,
            element: <LazyConcertsList />,
          },
          {
            path: Routes.SUMMER_SCHOOL_CURRENT_CONCERTS,
            element: <LazyCurrentConcert />,
          },
          {
            path: Routes.SUMMER_SCHOOL_PLACES,
            element: <LazyPlaces />,
          },
        ],
      },

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

      { path: Routes.NEWS, element: <LazyNewsPageList /> },
      { path: Routes.CURRENT_NEWS, element: <LazyNewsCurrentPage /> },
      { path: Routes.CONTACTS, element: <LazyContactsPage /> },

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
        element: <LazySupportUsPage />,
      },
      {
        path: '404',
        element: <LazyNotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'404'} />,
  },
]);

export default routes;
