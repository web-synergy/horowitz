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

// import LazyPdfPage from '@/components/PdfRender/LazyPdfPage';
import LazyNewsCurrentPage from '@/components/NewsCurrentPage/LazyNewsCurrentPage';
import LazyNewsPageList from '@/components/NewsPageList/LazyNewsPageList';
import LazySupportUsPage from '@/components/SupportUs/LazySupportUsPage';
import LazyCompetitionPage from '@/components/Competition/LazyCompetitionPage';
import LazyContactsPage from '@/components/Contacts/LazyContactsPage';
import LazyMainPage from '@/components/Main/LazyMainPage';
import LazyMasterClassPage from '@/components/MasterClass/LazyMasterClassPage';
import LazyMasterClassCurrentPage from '@/components/MasterClassCurrentPage/LazyMasterClassCurrentPage';
import LazyNotFoundPage from '@/components/NotFound/LazyNotFoundPage';
import LazyCurrentConcert from '@/components/SummerSchoolSubPages/Concerts/CurrentConcert/LazyCurrentConcert';
import LazyConcertsList from '@/components/SummerSchoolSubPages/Concerts/ConcertsList/LazyConcertsList';

import LazyJuniorGroupLayoutPage from '@/components/JuniorGroup/JuniorGroupLayout/LazyJuniorGroupLayoutPage';
import LazyJuniorMainPage from '@/components/JuniorGroup/JuniorMain/LazyJuniorMainPage';
import LazyJuniorConditionsPage from '@/components/JuniorGroup/JuniorConditions/LazyJuniorConditionsPage';
import LazyJuniorJuryListPage from '@/components/JuniorGroup/JuniorJuryList/LazyJuniorJuryListPage';
import LazyJuniorTimetablePage from '@/components/JuniorGroup/JuniorTimetable/LazyJuniorTimetablePage';
import LazyJuniorRequirementsPage from '@/components/JuniorGroup/JuniorRequirements/LazyJuniorRequirementsPage';
import LazyJuniorStudentsListPage from '@/components/JuniorGroup/JuniorStudentJunryList/LazyJuniorStudentsListPage';
import LazyJuniorParticipantsPage from '@/components/JuniorGroup/JuniorParticipants/LazyJuniorParticipantsPage';
import LazyJuniorRewardsPage from '@/components/JuniorGroup/JuniorRewards/LazyJuniorRewardsPage';
import LazyJuniorArtistsPage from '@/components/JuniorGroup/JuniorArtists/LazyJuniorArtistsPage';
import LazyJuniorWinnersPage from '@/components/JuniorGroup/JuniorWinners/LazyJuniorWinnersPage';
import LazyJuniorVenuesPage from '@/components/JuniorGroup/JuniorVenues/LazyJuniorVenuesPage';
import LazyJuniorGuestsPage from '@/components/JuniorGroup/JuniorGuests/LazyJuniorGuestsPage';
import LazyJuniorBookletPage from '@/components/JuniorGroup/JuniorBooklet/LazyJuniorBookletPage';
import LazyJuniorJuryProfilePage from '@/components/JuniorGroup/JuniorJuryProfile/LazyJuniorJuryProfile';
import LazyJuniorParticipantProfilePage from '@/components/JuniorGroup/JuniorParticipantProfile/LazyJuniorParticipantProfile';

import LazyOtherGroupLayout from '@/components/OtherGroupPages/OtherGroupLayout/LazyOtherGroupLayout';
import LazyOtherGroupMainPage from '@/components/OtherGroupPages/OtherGroupMain/LazuOtherGroupMainPage';
import LazyOtherGroupConditionsPage from '@/components/OtherGroupPages/OtherGroupConditions/LazyOtherGroupConditionsPage';
import LazyOtherGroupJuryPage from '@/components/OtherGroupPages/OtherGroupJury/LazyOtherGroupJuryPage';
import LazyOtherGroupTimetablePage from '@/components/OtherGroupPages/OtherGroupTimetable/LazyOtherGroupTimerablePage';
import LazyOtherGroupRequirementsPage from '@/components/OtherGroupPages/OtherGroupRequirements/LazyOtherGroupRequirementsPage';
import LazyOtherGroupRewardsPage from '@/components/OtherGroupPages/OtherGroupRewards/LazyOtherGroupRewardsPage';
import LazyOtherGroupPreselectionJuryPage from '@/components/OtherGroupPages/OtherGroupPreselectionJury/LazyOtherGroupPreselectionJuryPage';
import LazyOtherGroupParticipantsPage from '@/components/OtherGroupPages/OtherGroupParticipants/LazyOtherGroupParticipantsPage';
import LazyOtherGroupArtistPage from '@/components/OtherGroupPages/OtherGroupArtists/LazyOtherGroupArtistsPage';
import LazyOtherGroupWinnersPage from '@/components/OtherGroupPages/OtherGroupWinners/LazyOtherGroupWinnersPage';
import LazyOtherGroupVenuesPage from '@/components/OtherGroupPages/OtherGroupVenues/LazyOtherGroupVenuesPage';
import LazyOtherGroupGuestsPage from '@/components/OtherGroupPages/OtherGroupGuests/LazeOtherGroupGuestsPage';
import LazyOtherGroupBookletPage from '@/components/OtherGroupPages/OtherGroupBooklet/LazyOtherGroupBookletPage';
import LazyOtherGroupJuryProfilePage from '@/components/OtherGroupPages/OtherGroupJuryProfile/LazyOtherGroupJuryProfilePage';
import LazyOtherGroupParticipantProfilePage from '@/components/OtherGroupPages/OtherGroupParticipantProfile/LazyOtherGroupParticipantProfilePage';

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
        element: <LazyJuniorGroupLayoutPage />,
        children: [
          {
            index: true,
            element: <LazyJuniorMainPage />,
          },
          {
            path: Routes.GROUP_CONDITIONS,
            element: <LazyJuniorConditionsPage />,
          },
          {
            path: Routes.GROUP_JURY,
            element: <LazyJuniorJuryListPage />,
          },
          {
            path: `${Routes.GROUP_JURY}/:slug`,
            element: <LazyJuniorJuryProfilePage />,
          },
          {
            path: Routes.GROUP_PARTICIPANTS,
            element: <LazyJuniorParticipantsPage />,
          },
          {
            path: `${Routes.GROUP_PARTICIPANTS}/:slug`,
            element: <LazyJuniorParticipantProfilePage />,
          },
          {
            path: Routes.GROUP_REQUIREMENTS,
            element: <LazyJuniorRequirementsPage />,
          },
          {
            path: Routes.GROUP_TIMETABLE,
            element: <LazyJuniorTimetablePage />,
          },
          {
            path: Routes.GROUP_STUDENT_JURY,
            element: <LazyJuniorStudentsListPage />,
          },

          {
            path: Routes.GROUP_REWARDS,
            element: <LazyJuniorRewardsPage />,
          },
          {
            path: Routes.GROUP_ORCHESTRA,
            element: <LazyJuniorArtistsPage />,
          },
          {
            path: Routes.GROUP_WINNERS,
            element: <LazyJuniorWinnersPage />,
          },
          {
            path: Routes.GROUP_VENUES,
            element: <LazyJuniorVenuesPage />,
          },
          {
            path: Routes.GROUP_GUESTS,
            element: <LazyJuniorGuestsPage />,
          },
          {
            path: Routes.GROUP_BOOKLET,
            element: <LazyJuniorBookletPage />,
          },
        ],
      },
      {
        path: `${Routes.COMPETITIONS}/:${Routes.COMPETITION}/${Routes.INTERMEDIATE}`,
        element: <LazyOtherGroupLayout group={Routes.INTERMEDIATE} />,
        children: [
          {
            index: true,
            element: <LazyOtherGroupMainPage group={Routes.INTERMEDIATE} />,
          },
          {
            path: Routes.GROUP_CONDITIONS,
            element: (
              <LazyOtherGroupConditionsPage group={Routes.INTERMEDIATE} />
            ),
          },
          {
            path: Routes.GROUP_JURY,
            element: <LazyOtherGroupJuryPage group={Routes.INTERMEDIATE} />,
          },
          {
            path: `${Routes.GROUP_JURY}/:slug`,
            element: (
              <LazyOtherGroupJuryProfilePage group={Routes.INTERMEDIATE} />
            ),
          },
          {
            path: Routes.GROUP_PARTICIPANTS,
            element: (
              <LazyOtherGroupParticipantsPage group={Routes.INTERMEDIATE} />
            ),
          },
          {
            path: `${Routes.GROUP_PARTICIPANTS}/:slug`,
            element: (
              <LazyOtherGroupParticipantProfilePage
                group={Routes.INTERMEDIATE}
              />
            ),
          },
          {
            path: Routes.GROUP_REQUIREMENTS,
            element: (
              <LazyOtherGroupRequirementsPage group={Routes.INTERMEDIATE} />
            ),
          },
          {
            path: Routes.GROUP_TIMETABLE,
            element: (
              <LazyOtherGroupTimetablePage group={Routes.INTERMEDIATE} />
            ),
          },
          {
            path: Routes.GROUP_PRESELECTION_JURY,
            element: (
              <LazyOtherGroupPreselectionJuryPage group={Routes.INTERMEDIATE} />
            ),
          },

          {
            path: Routes.GROUP_REWARDS,
            element: <LazyOtherGroupRewardsPage group={Routes.INTERMEDIATE} />,
          },
          {
            path: Routes.GROUP_ORCHESTRA,
            element: <LazyOtherGroupArtistPage group={Routes.INTERMEDIATE} />,
          },
          {
            path: Routes.GROUP_WINNERS,
            element: <LazyOtherGroupWinnersPage group={Routes.INTERMEDIATE} />,
          },
          {
            path: Routes.GROUP_VENUES,
            element: <LazyOtherGroupVenuesPage group={Routes.INTERMEDIATE} />,
          },
          {
            path: Routes.GROUP_GUESTS,
            element: <LazyOtherGroupGuestsPage group={Routes.INTERMEDIATE} />,
          },
          {
            path: Routes.GROUP_BOOKLET,
            element: <LazyOtherGroupBookletPage group={Routes.INTERMEDIATE} />,
          },
        ],
      },
      {
        path: `${Routes.COMPETITIONS}/:${Routes.COMPETITION}/${Routes.SENIOR}`,
        element: <LazyOtherGroupLayout group={Routes.SENIOR} />,
        children: [
          {
            index: true,
            element: <LazyOtherGroupMainPage group={Routes.SENIOR} />,
          },
          {
            path: Routes.GROUP_CONDITIONS,
            element: <LazyOtherGroupConditionsPage group={Routes.SENIOR} />,
          },
          {
            path: Routes.GROUP_JURY,
            element: <LazyOtherGroupJuryPage group={Routes.SENIOR} />,
          },
          {
            path: `${Routes.GROUP_JURY}/:slug`,
            element: <LazyOtherGroupJuryProfilePage group={Routes.SENIOR} />,
          },
          {
            path: Routes.GROUP_PARTICIPANTS,
            element: <LazyOtherGroupParticipantsPage group={Routes.SENIOR} />,
          },
          {
            path: `${Routes.GROUP_PARTICIPANTS}/:slug`,
            element: (
              <LazyOtherGroupParticipantProfilePage group={Routes.SENIOR} />
            ),
          },
          {
            path: Routes.GROUP_REQUIREMENTS,
            element: <LazyOtherGroupRequirementsPage group={Routes.SENIOR} />,
          },
          {
            path: Routes.GROUP_TIMETABLE,
            element: <LazyOtherGroupTimetablePage group={Routes.SENIOR} />,
          },
          {
            path: Routes.GROUP_PRESELECTION_JURY,
            element: (
              <LazyOtherGroupPreselectionJuryPage group={Routes.SENIOR} />
            ),
          },

          {
            path: Routes.GROUP_REWARDS,
            element: <LazyOtherGroupRewardsPage group={Routes.SENIOR} />,
          },
          {
            path: Routes.GROUP_ORCHESTRA,
            element: <LazyOtherGroupArtistPage group={Routes.SENIOR} />,
          },
          {
            path: Routes.GROUP_WINNERS,
            element: <LazyOtherGroupWinnersPage group={Routes.SENIOR} />,
          },
          {
            path: Routes.GROUP_VENUES,
            element: <LazyOtherGroupVenuesPage group={Routes.SENIOR} />,
          },
          {
            path: Routes.GROUP_GUESTS,
            element: <LazyOtherGroupGuestsPage group={Routes.SENIOR} />,
          },
          {
            path: Routes.GROUP_BOOKLET,
            element: <LazyOtherGroupBookletPage group={Routes.SENIOR} />,
          },
        ],
      },
      {
        path: `${Routes.ARCHIVE}`,
        element: <LazyArchivePage />,
      },

      { path: Routes.MASTER_CLASS, element: <LazyMasterClassPage /> },
      {
        path: Routes.CURRENT_MASTER_CLASS,
        element: <LazyMasterClassCurrentPage />,
      },
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
