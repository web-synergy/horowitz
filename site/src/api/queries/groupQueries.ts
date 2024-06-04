import groq from 'groq';

export const juniorGroupCommonQuery = groq`*[_type == 'group' && _id == $id][0]{
    isActiveBooklet,
    isActiveConditions,
    isActiveGuests,
    isActiveJury,
    isActiveArtists,
    isActiveParticipants,
    isActiveRequirements,
    isActiveRewards,
    isActiveStudentsJury,
    isActiveTimetable,
    isActiveVenues,
    isActiveWinners,
}`;

export const otherGroupCommonQuery = groq`*[_type == 'group' && _id == $id][0]{
    isActiveBooklet,
    isActiveConditions,
    isActiveGuests,
    isActiveJury,
    isActiveArtists,
    isActiveParticipants,
    isActiveRequirements,
    isActiveRewards,
    isActivePreselectionJury,
    isActiveTimetable,
    isActiveVenues,
    isActiveWinners,
}`;

export const groupConditionQuery = groq`*[_type == 'group' && _id == $id][0]{
  "conditions": conditions[] {
    "title":  title[_key ==$language][0].value, 
    'text': text[_key ==$language][0].value, 
    image
      }
}`;

export const groupJuryQuery = groq`*[_type == 'group' && _id == $id][0]{
  'juries': juries[]{
    "about": jury -> about[_key ==$language][0].value, 
    "name": jury -> name[_key ==$language][0].value,
    'avatar': jury -> avatar, 
    "slug": jury -> slug.current, 
     "role":  role[_key ==$language][0].value, 
  },
 
}`;

export const groupRequirementsQuery = groq`*[_type == 'group' && _id == $id][0]{
  "requirements": requirements[_key ==$language][0].value
}`;

export const groupTimetableQuery = groq`*[_type == 'group' && _id == $id][0]{
  "timetable": timetable[_key ==$language][0].value
}`;

export const groupVenuesQuery = groq`*[_type == 'group' && _id == $id][0]{
  "venues": venues[] {
    "title":  title[_key ==$language][0].value, 
    'text': text[_key ==$language][0].value, 
    image
      }
}`;

export const groupRewardsQuery = groq`*[_type == 'group' && _id == $id][0]{
  "rewards": rewards[_key ==$language][0].value, 
}`;

export const groupArtistsQuery = groq`*[_type == 'group' && _id == $id][0]{
  "artists": artists[]{
    image, 
    'title': title[_key ==$language][0].value, 
    'text': text[_key ==$language][0].value, 

  }, 
  
}`;

export const juniorGroupStudentJury = groq`*[_type == 'group' && _id == $id][0]{
  "studentJuryDesc": studentJuryDesc[_key ==$language][0].value,
  "studentsJury": studentsJury[]{
    _key,
    age, 
    avatar, 
    "name": name[_key ==$language][0].value, 
    "biography": biography[_key ==$language][0].value, 
  }
}
`;

export const otherGroupPreselectionJury = groq`*[_type == 'group' && _id == $id][0]{
 
  "preselectionJury": preselectionJury[] -> {
    "about":  about[_key ==$language][0].value, 
    "name": name[_key ==$language][0].value,
    'avatar': avatar, 
    "slug": slug.current, 
  }
}
`;

export const groupGuests = groq`*[_type == 'group' && _id == $id][0]{
  "guests": guests[]-> {
    'id': _id, 
    "about": about[_key ==$language][0].value, 
    "name": name[_key ==$language][0].value,
    avatar, 
  }
}
`;

export const groupBooklet = groq`*[_type == 'group' && _id == $id][0]{
 "booklet": booklet.asset->url
 }
`;

export const juniorGroupParticipants = groq`*[_type == 'group' && _id == $id][0]{
  "participants": participants[] {
      "id": _key, 
      age, 
      avatar, 
      "name": name[_key ==$language][0].value,
      "biography": biography[_key ==$language][0].value, 
      "group": subgroup,
      "slug": slug.current,
    }, 
}
`;

export const juniorWinners = groq`*[_type == 'group' && _id == $id][0]{
   "winners": winners[]{
      _key,
      'champion': champion[_key ==$language][0].value,
      "group": subgroup,
      'participantKey': participantKey
    }, 
    juniorGallery, 
}
`;
