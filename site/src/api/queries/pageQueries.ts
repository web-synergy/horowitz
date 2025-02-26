import groq from 'groq';

export const homeQuery = groq`*[_type == 'home'][0]{
  'news':*[_type == 'news'  && length(title[_key ==$language].value) != 0]| order( dateTime(date)  desc) [0 ...3]{
        date,
        img,
        banner, 
        'title':  title[_key ==$language ][0].value,
        'slug':slug.current,},
  'videos':videos[]{
        'title':title[_key==$language][0].value,
        link,
        _key
  }, 
  'banner': banner{
    background, 
    'img':  img[_key ==$language][0].value, 
   }, 
   "winners": {
      "title": winnersTitle[_key ==$language][0].value, 
      "list": winners[]{
        ..., 
        "name": name[_key ==$language][0].value, 
       "title": title[_key ==$language][0].value, 
       "photo": photo.asset->url
      }, 
      "link": winnersLink
   }, 
   "events": {
    "title": eventsTitle[_key ==$language][0].value, 
    "text": eventsText[_key ==$language][0].value, 
    "button": eventsButtonText[_key ==$language][0].value, 
    "link": eventsLink

   }

}`;

export const settingsQuery = groq`*[_type == 'settings'][0]{
  'logo':logo.asset->url,
  "sociable": {
    facebook, 
    instagram, 
    youTube, 
    issuu
  }, 
  'contacts': {
    'about':about[_key ==$language].value,
    phone, 
    email, 
    'address':address[_key ==$language].value,
    "pressCenter": {
      "email":pressCenterEmail, 
      "phone": pressCenterPhone
    },
  },
  "competitions": *[_type == 'competition']{
      'slug':slug.current,
      'title':title[_key ==$language].value,
  }, 
}`;

export const horowitzQuery = groq`*[_type == 'horowitz'][0] {
  'bannerData': mainBanner,
  'upperTextBlock': upperTextBlock[_key ==$language][0].value,
  'quote':quote{
    'author': author[_key ==$language].value,
    'quote': quote[_key ==$language].value,
  },
  'lowerTextBlock': lowerTextBlock[_key ==$language][0].value,
  'literature': literature,
}`;

export const newsQuery = groq`*[_type == 'news' && length(title[_key ==$language].value) != 0] | order(dateTime(date) desc
) [$firstEl ...$lastEl]{
  _createdAt,
   date,
   img,
   banner,
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
  'blocks': blocks[]{
    "textBlock": textBlock[_key ==$language][0].value,
    "imageBlock": imageBlock[_key ==$language][0].value,
  },  
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
  'description': description[_key ==$language][0].value,
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

export const masterClassQuery = groq`*[_type == 'masterClass' && length(title[_key ==$language].value) != 0] | order(dateTime(date) desc
) [$firstEl ...$lastEl]{
  _createdAt,
   date,
   img,
   'video': video,
   'title':  title[_key ==$language].value,
   'slug':slug.current,
   'description':description[_key ==$language][0].value,
   'count':count(*[_type == "masterClass" && length(title[_key ==$language].value) != 0])
}`;

export const currentMasterClassQuery = groq`*[_type == 'masterClass'&& slug.current == $slug][0]{
  _id,
  _createdAt,
  img,
  'video': video,
  'title': coalesce( title[_key ==$language][0].value, title[][0].value), 
  'slug':slug.current,
  'description': coalesce(description[_key ==$language][0].value, description[][0].value)
}`;
