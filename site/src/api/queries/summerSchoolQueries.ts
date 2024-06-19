import groq from 'groq';

export const schoolData = groq`*
[_type == 'summerSchool'][0]{
  'topText': topText[_key ==$language][0].value,
  'bottomText': bottomText[_key ==$language][0].value,
  'infographic': infographic[_key ==$language][0].value,
  gallery,
  'annualSummerSchool': *[_type == 'annualSummerSchool']{
    button,
     "slug": slug.current,
    isActive,
    applicationLink,
    year,
  }
}`;
export const annualCommonSchoolData = groq`*[_type== 'annualSummerSchool' && year==$year][0]{
  applicationLink, 
  button, 
  isActive, 
  isActiveConcerts, 
  isActiveConditions, 
  isActiveOrchestra, 
  isActiveParticipants, 
  isActiveProfessors, 
  isActiveSchedule, 
  "slug": slug.current,
  year,
  banner,
 "description": description[_key ==$language][0].value,
}`;

export const annualSchoolConditionsData = groq`*[_type== 'annualSummerSchool' && year==$year][0]{
  "conditions": conditions[_key ==$language][0].value,
}`;

export const annualSchoolProfessorAndScheduleData = groq`*[_type== 'annualSummerSchool' && year==$year][0]{
 
 "professors": professors[]{
    _key,
    photo,
    "about": about[_key ==$language][0].value,
    "instrument": instrument[_key ==$language][0].value,
    "name": name[_key ==$language][0].value,
    "role": role[_key ==$language][0].value,
    },
  "schedules": schedules[]{
    _key, lecture, date,
    "rehearsals": rehearsals[]{
       _key, time,
        "event": event[_key ==$language][0].value,
      },
  }
}`;

export const annualSchoolParticipantsData = groq`* [_type == 'annualSummerSchool' && year == $year][0]{
  "participants": participants[]{
      _key, avatar,age,
      "biography": biography[_key ==$language][0].value,
      "country": country[_key ==$language][0].value,
      "name": name[_key ==$language][0].value
    },
}`;

export const annualSchoolConcertsData = groq`* [_type == 'annualSummerSchool' && year == $year][0]{
  'concerts':concerts[]{
      _key,
      'img':coalesce( img[_key ==$language ][0].value, img[][0].value),
      'title': coalesce( title[_key ==$language][0].value, title[][0].value),
      'concertPrograms':coalesce(concertPrograms[_key ==$language][0].value,concertPrograms[][0].value),
    },
}`;

export const annualSchoolArtistsData = groq`* [_type == 'annualSummerSchool' && year == $year][0]{
 "orchestra": coalesce(orchestra[_key ==$language][0].value),
}`;
