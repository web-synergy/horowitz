import groq from 'groq';
export const homeQuery = groq`*[_type == 'home'][0]{
  'news':*[_type == 'news'  && length(title[_key ==$language].value) != 0]| order( dateTime(date)  desc) [0 ...3]{
    date,
   img,
  'title':  title[_key ==$language ][0].value,
  'slug':slug.current,},
  'videos':videos[]{
    'title':title[_key==$language][0].value,
    link,
    _key
  }, 
  'banner': banner{
    background, 
    'img':  img[_key ==$language ][0].value, 
   }
}`;

export const settingsQuery = groq`*[_type == 'settings']{
  'logo':logo.asset->url,
  "seoImage": seoImage.asset->url, 
  'sociable':*[_type == 'social'][0],
  'contacts':*[_type == 'contacts'][0]{
    'about':about[_key ==$language].value,
    phone,
    email,
    'address':address[_key ==$language].value,
     pressCenter
  },
  "competitions": *[_type == 'competitions']{
  'slug':slug.current,
  'title':title[_key ==$language].value,
  }
}`;

export const horowitzQuery = groq`*[_type == 'horowitz'][0] {
  'bannerData': mainBanner,
  'upperTextBlock': upperTextBlock[_key ==$language][0].value,
  'quote':quote{
    'author': author[_key ==$language].value,
    'quote': quote[_key ==$language].value,
  },
  'lowerTextBlock': lowerTextBlock[_key ==$language][0].value,
  'literature': literature[],
}`;

export const newsQuery = groq`*[_type == 'news' && length(title[_key ==$language].value) != 0] | order(dateTime(date) desc
) [$firstEl ...$lastEl]{
  _createdAt,
   date,
   img,
   'title':  title[_key ==$language].value,
   'slug':slug.current,
   'shortDescription':shortDescription[_key ==$language].value,
   'count':count(*[_type == "news" && length(title[_key ==$language].value) != 0])
}`;

export const currentNewsQuery = groq`*[_type == 'news'&& slug.current == $slug][0]{
   _id,
   _createdAt,
    date,
   img,
   'title': coalesce( title[_key ==$language][0].value, title[][0].value), 
   'slug':slug.current,
   'description': coalesce(description[_key ==$language][0].value, description[][0].value)
}`;

export const partners = groq`*[_type == 'partners'][0]{
  'organizers': organizers[]{
    _key,title, size, link, 'img': coalesce(img[_key ==$language][0].value, img[][0].value)
  },
  'mainPartners':  mainPartners[]{
    _key,title, size,link, 'img': coalesce(img[_key ==$language][0].value, img[][0].value)
  },
  'sponsors':  sponsors[]{
   _key, title, size, link,'img': coalesce(img[_key ==$language][0].value, img[][0].value)
  },
  'generalInfoPartners':  generalInfoPartners[]{
    _key,title, size,link, 'img': coalesce(img[_key ==$language][0].value, img[][0].value)
  },
  'mainInfoPartners': mainInfoPartners[]{
    _key,title, size,link, 'img': coalesce(img[_key ==$language][0].value, img[][0].value)
  },
  'officialInfoPartners': officialInfoPartners[]{
   _key, title, size, link,'img': coalesce(img[_key ==$language][0].value, img[][0].value)
  },
  'partners':  partners[]{
    _key, title, size, link,'img': coalesce(img[_key ==$language][0].value, img[][0].value)
  },
}`;

export const aboutCompetitionQuery = groq`*[_type == 'aboutHorowitzCompetition'][0] {
  'mainBanner': mainBanner,
  'upperTextBlock': upperTextBlock[_key ==$language][0].value,
  'middleTextBlock': middleTextBlock[_key ==$language][0].value,
  'lowerTextBlock': lowerTextBlock[_key ==$language][0].value,
  'imgHistoryOne': imgHistoryOne[_key ==$language][0].value,
  'imgHistoryTwo': imgHistoryTwo[_key ==$language][0].value,
  'imgStatistics': imgStatistics[_key ==$language][0].value,
  'additionalText': additionalText[_key ==$language][0].value,

}`;

export const administrationQuery = groq`*[_type == 'administration'][0] {
  'banner': mainBanner,
  'members':members[]{
    'name': name[_key ==$language][0].value,
    'role': role[_key ==$language][0].value,
    img
    },
}`;

export const virtuososQuery = groq`*[_type == 'virtuosos'][0]{
 banner,
  gallery,
  'description':description[_key ==$language].value,
    'article':*[_type == 'virtuososArticle'  && length(title[_key ==$language].value) != 0]| order(dateTime(date)desc) [0 ...3]{
   _id,
   img,
   'title':   title[_key ==$language][0].value,
   'slug':slug.current,}
} `;

export const virtuososArticleQuery = groq`*[_type == 'virtuososArticle' && length(title[_key ==$language].value) != 0] | order(dateTime(date)  desc
) [$firstEl ...$lastEl]{
_createdAt,
 date,
   img,
   'title':  title[_key ==$language].value,
   'slug':slug.current,
   'shortDescription':shortDescription[_key ==$language].value,
   'count':count(*[_type == "virtuososArticle" && length(title[_key ==$language].value) != 0])
}`;

export const currentArticleQuery = groq`*[_type == 'virtuososArticle'&& slug.current == $slug][0]{
   _createdAt,
    date,
   img,
   'title': coalesce( title[_key ==$language][0].value, title[][0].value), 
   'slug':slug.current,
   'description': coalesce(description[_key ==$language][0].value, description[][0].value)
}`;
export const ukrWorksQuery = groq`*[_type == 'ukrainianWorks'][0]{
 'text': text[_key ==$language][0].value,
    'list': list[_key ==$language][0].value,
    'banner': mainBanner
}`;

export const getPDFQuery = groq`*[_type == 'magazinePdf' && title[_key ==$language][0].value == $name][0]{
  'title':title[_key ==$language][0].value,
  "URL": file.asset->url
}`;

export const schoolData = groq`*
[_type == 'summerSchool'][0]{
  'topText': topText[_key ==$language][0].value,
  'bottomText': bottomText[_key ==$language][0].value,
  'infographic': infographic[_key ==$language][0].value,
  gallery,
  'annualSummerSchool': *[_type == 'annualSummerSchool']{
    button,
    slug,
    isActive,
    applicationLink,
    year,
  }
}`;
export const annualSchoolData = groq`*[_type== 'annualSummerSchool' && year==$year][0]{
  applicationLink, 
  button, 
  isActive, 
  isActiveConcerts, 
  isActiveConditions, 
  isActiveOrchestra, 
  isActiveParticipants, 
  isActiveProfessors, 
  isActiveSchedule, 
  slug,
  year,
  banner,
  'concerts':concerts[]{
    _key,
    'img':coalesce( img[_key ==$language ][0].value, img[][0].value),
    'title': coalesce( title[_key ==$language][0].value, title[][0].value),  
    'concertPrograms':coalesce(concertPrograms[_key ==$language][0].value,concertPrograms[][0].value),
  },
  "description": description[_key ==$language][0].value, 
  "conditions": conditions[_key ==$language][0].value, 
  "orchestra": orchestra[_key ==$language][0].value, 
  "participants": participants[]{
    _key, avatar,age,
    "about": about[_key ==$language][0].value, 
    "country": country[_key ==$language][0].value, 
    "name": name[_key ==$language][0].value
    }, 
  "professors": professors[]{
    _key, avatar, 
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

export const competitionsQuery = groq`*[_type == 'competition' && slug.current == $slug][0]{
  "title": title[_key ==$language][0].value, 
   "description": description[_key ==$language][0].value, 
  isWarState, 
  juniorBtn, 
  intermediateBtn, 
  seniorBtn, 
  mainBanner, 
  "junior":junior->{
    _id, 
    isActive, 
  }, 
  "intermediate": intermediate->{
    _id,
    isActive, 
     },
  "senior": senior->{
    _id,
    isActive, 
     },
}`;

export const juniorGroupCommonQuery = groq`*[_type == 'junior' && _id == $id][0]{
  isActiveBooklet,
    isActiveConditions,
    isActiveGuests,
    isActiveJury,
    isActiveOrchestra,
    isActiveParticipants,
    isActiveRequirements,
    isActiveRewards,
    isActiveStudentsJury,
    isActiveTimetable,
    isActiveVenues,
    isActiveWinners,
}`;

export const juniorGroupConditionQuery = groq`*[_type == 'junior' && _id == $id][0]{
  "conditions": conditions[] {
    "title":  title[_key ==$language][0].value, 
    'text': text[_key ==$language][0].value, 
    image
      }
}`;

export const juniorGroupRequirementsQuery = groq`*[_type == 'junior' && _id == $id][0]{
  "requirements": requirements[_key ==$language][0].value
}`;

export const juniorGroupTimetableQuery = groq`*[_type == 'junior' && _id == $id][0]{
  "timetable": timetable[_key ==$language][0].value
}`;

export const juniorGroupVenuesQuery = groq`*[_type == 'junior' && _id == $id][0]{
  "venues": venues[] {
    "title":  title[_key ==$language][0].value, 
    'text': text[_key ==$language][0].value, 
    image
      }
}`;

export const juniorGroupRewardsQuery = groq`*[_type == 'junior' && _id == $id][0]{
  "rewards": rewards[]{
    image, 
    'title': title[_key ==$language][0].value, 
    'description': description[_key ==$language][0].value, 
  }, 
  'prizes':  prizes[_key ==$language][0].value, 
}`;

export const juniorGroupArtistsQuery = groq`*[_type == 'junior' && _id == $id][0]{
  "artists": orchestra[]{
    image, 
    'title': title[_key ==$language][0].value, 
    'description': description[_key ==$language][0].value, 
    "copyRight": copyRight[_key ==$language][0].value,
  }, 
  
}`;

export const juniorGroupJuryQuery = groq`*[_type == 'junior' && _id == $id][0]{
  'jury': jury[]-> {
    "about": about[_key ==$language][0].value, 
    "name": name[_key ==$language][0].value,
    avatar, 
    "slug": slug.current, 
    "role":  role[_key ==$language][0].value, 
  }
}`;

export const juniorGroupStudentJury = groq`*[_type == 'junior' && _id == $id][0]{
  "studentsJury": studentsJury[]{
    _key,
    age, 
    avatar, 
    "name": name[_key ==$language][0].value, 
    "about": phrase[_key ==$language][0].value, 
  }
}
`;

export const juniorGroupGuests = groq`*[_type == 'junior' && _id == $id][0]{
  "guests": guests[]-> {
    'id': _id, 
    "about": about[_key ==$language][0].value, 
    "name": name[_key ==$language][0].value,
    avatar, 
  }
}
`;

export const juniorGroupBooklet = groq`*[_type == 'junior' && _id == $id][0]{
 "booklet": booklet.file.asset->url
 }
`;

export const juniorGroupParticipants = groq`*[_type == 'junior' && _id == $id][0]{
  "debut": {
    "groupA": groupA[]{
      "id": _key, 
      age, 
      avatar, 
       "name": name[_key ==$language][0].value,
      "biography": biography[_key ==$language][0].value, 
      "group": "groupA",
      "slug": slug.current,
    }, 
    'groupB': groupB[]{
       "id": _key, 
      age, 
      avatar, 
       "name": name[_key ==$language][0].value,
      "biography": biography[_key ==$language][0].value, 
      "group": "groupB",
      "slug": slug.current,
    }, 
    'groupC': groupC[]{
       "id": _key, 
      age, 
      avatar, 
       "name": name[_key ==$language][0].value,
      "biography": biography[_key ==$language][0].value, 
      "group": "groupC",
      "slug": slug.current,
    }, 
    "groupD": groupD[]{
       "id": _key, 
      age, 
      avatar, 
       "name": name[_key ==$language][0].value,
      "biography": biography[_key ==$language][0].value, 
      "group": "groupD",
      "slug": slug.current,
    }
  },   

  "junior": junior[]{
     "id": _key, 
      age, 
      avatar, 
       "name": name[_key ==$language][0].value,
      "biography": biography[_key ==$language][0].value, 
      "group": "junior",
      "slug": slug.current,
  }
}
`;

export const juniorWinners = groq`*[_type == 'junior' && _id == $id][0]{

  'galleries': {
    'groupA': groupAPhoto, 
    'groupB': groupBPhoto, 
    'groupC': groupCPhoto, 
    'groupD': groupDPhoto, 
    'junior': juniorGroupPhoto,
  }, 
  "winners": {
    'groupA': groupAWinners[]{
         _key,
        'champion': champion[_key ==$language][0].value,
        img,
        'name': name[_key ==$language][0].value
    }, 
    'groupB': groupBWinners[]{
         _key,
        'champion': champion[_key ==$language][0].value,
        img,
        'name': name[_key ==$language][0].value
    }, 
    'groupC': groupDWinners[]{
         _key,
        'champion': champion[_key ==$language][0].value,
        img,
        'name': name[_key ==$language][0].value
    },
    'groupD': groupCWinners[]{
        _key,
        'champion': champion[_key ==$language][0].value,
        img,
        'name': name[_key ==$language][0].value
    }, 
    'junior': juniorWinners[]{
        _key,
        'champion': champion[_key ==$language][0].value,
        img,
        'name': name[_key ==$language][0].value
    }, 

      
  } 
}
`;
