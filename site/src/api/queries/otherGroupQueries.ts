import groq from 'groq';

export const otherGroupCommonQuery = groq`*[_type == 'group' && _id == $id][0]`;
// {
//   isActiveBooklet,
//     isActiveConditions,
//     isActiveGuests,
//     isActiveJury,
//     isActiveOrchestra,
//     isActiveParticipants,
//     isActiveRequirements,
//     isActiveRewards,

//     isActiveTimetable,
//     isActiveVenues,
//     isActiveWinners,
// }`;

// export const juniorGroupConditionQuery = groq`*[_type == 'junior' && _id == $id][0]{
//   "conditions": conditions[] {
//     "title":  title[_key ==$language][0].value,
//     'text': text[_key ==$language][0].value,
//     image
//       }
// }`;

// export const juniorGroupRequirementsQuery = groq`*[_type == 'junior' && _id == $id][0]{
//   "requirements": requirements[_key ==$language][0].value
// }`;

// export const juniorGroupTimetableQuery = groq`*[_type == 'junior' && _id == $id][0]{
//   "timetable": timetable[_key ==$language][0].value
// }`;

// export const juniorGroupVenuesQuery = groq`*[_type == 'junior' && _id == $id][0]{
//   "venues": venues[] {
//     "title":  title[_key ==$language][0].value,
//     'text': text[_key ==$language][0].value,
//     image
//       }
// }`;

// export const juniorGroupRewardsQuery = groq`*[_type == 'junior' && _id == $id][0]{
//   "rewards": rewards[]{
//     image,
//     'title': title[_key ==$language][0].value,
//     'description': description[_key ==$language][0].value,
//   },
//   'prizes':  prizes[_key ==$language][0].value,
// }`;

// export const juniorGroupArtistsQuery = groq`*[_type == 'junior' && _id == $id][0]{
//   "artists": orchestra[]{
//     image,
//     'title': title[_key ==$language][0].value,
//     'description': description[_key ==$language][0].value,
//     "copyRight": copyRight[_key ==$language][0].value,
//   },

// }`;

// export const juniorGroupJuryQuery = groq`*[_type == 'junior' && _id == $id][0]{
//   'jury': jury[]-> {
//     "about": about[_key ==$language][0].value,
//     "name": name[_key ==$language][0].value,
//     avatar,
//     "slug": slug.current,
//     "role":  role[_key ==$language][0].value,
//   }
// }`;

// export const juniorGroupStudentJury = groq`*[_type == 'junior' && _id == $id][0]{
//   "studentsJury": studentsJury[]{
//     _key,
//     age,
//     avatar,
//     "name": name[_key ==$language][0].value,
//     "about": phrase[_key ==$language][0].value,
//   }
// }
// `;

// export const juniorGroupGuests = groq`*[_type == 'junior' && _id == $id][0]{
//   "guests": guests[]-> {
//     'id': _id,
//     "about": about[_key ==$language][0].value,
//     "name": name[_key ==$language][0].value,
//     avatar,
//   }
// }
// `;

// export const juniorGroupBooklet = groq`*[_type == 'junior' && _id == $id][0]{
//  "booklet": booklet.file.asset->url
//  }
// `;

// export const juniorGroupParticipants = groq`*[_type == 'junior' && _id == $id][0]{
//   "debut": {
//     "groupA": groupA[]{
//       "id": _key,
//       age,
//       avatar,
//        "name": name[_key ==$language][0].value,
//       "biography": biography[_key ==$language][0].value,
//       "group": "groupA",
//       "slug": slug.current,
//     },
//     'groupB': groupB[]{
//        "id": _key,
//       age,
//       avatar,
//        "name": name[_key ==$language][0].value,
//       "biography": biography[_key ==$language][0].value,
//       "group": "groupB",
//       "slug": slug.current,
//     },
//     'groupC': groupC[]{
//        "id": _key,
//       age,
//       avatar,
//        "name": name[_key ==$language][0].value,
//       "biography": biography[_key ==$language][0].value,
//       "group": "groupC",
//       "slug": slug.current,
//     },
//     "groupD": groupD[]{
//        "id": _key,
//       age,
//       avatar,
//        "name": name[_key ==$language][0].value,
//       "biography": biography[_key ==$language][0].value,
//       "group": "groupD",
//       "slug": slug.current,
//     }
//   },

//   "junior": junior[]{
//      "id": _key,
//       age,
//       avatar,
//        "name": name[_key ==$language][0].value,
//       "biography": biography[_key ==$language][0].value,
//       "group": "junior",
//       "slug": slug.current,
//   }
// }
// `;

// export const juniorWinners = groq`*[_type == 'junior' && _id == $id][0]{

//   'galleries': {
//     'groupA': groupAPhoto,
//     'groupB': groupBPhoto,
//     'groupC': groupCPhoto,
//     'groupD': groupDPhoto,
//     'junior': juniorGroupPhoto,
//   },
//   "winners": {
//     'groupA': groupAWinners[]{
//          _key,
//         'champion': champion[_key ==$language][0].value,
//         img,
//         'name': name[_key ==$language][0].value
//     },
//     'groupB': groupBWinners[]{
//          _key,
//         'champion': champion[_key ==$language][0].value,
//         img,
//         'name': name[_key ==$language][0].value
//     },
//     'groupC': groupDWinners[]{
//          _key,
//         'champion': champion[_key ==$language][0].value,
//         img,
//         'name': name[_key ==$language][0].value
//     },
//     'groupD': groupCWinners[]{
//         _key,
//         'champion': champion[_key ==$language][0].value,
//         img,
//         'name': name[_key ==$language][0].value
//     },
//     'junior': juniorWinners[]{
//         _key,
//         'champion': champion[_key ==$language][0].value,
//         img,
//         'name': name[_key ==$language][0].value
//     },

//   }
// }
// `;
