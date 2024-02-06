import groq from "groq";
export const homeQuery = groq`*[_type == 'home'][0]{
 'quote':quote{
       'author': author[_key ==$language].value,
         'quote':quote[_key ==$language].value,
     },
         
      'banner':banner{
      'title':  title[_key ==$language].value,
       'dateEvent':dateEvent[_key ==$language].value,
       'img':img.asset->url,
       srcVideo


      },
    'winner':winner[]{
    'name': name[_key ==$language].value,
    'champion': champion[_key ==$language].value,
      img


    },
    'news':news[]->{
      'description':description[_key ==$language].value,
      'title':title[_key ==$language].value,
      img

    },
    sponsors,
    'videos':videos[]{
      'title':title[_key ==$language].value,
      link
    },
}`;

export const settingsQuery = groq`*[_type == 'settings']{
  'logo':logo.asset->url,
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
  'bannerData': {
    'bannerImg': bannerData.bannerImg.asset->url,
    'bannerCopyright': bannerData.bannerCopyright
  },
  'upperTextBlock': upperTextBlock[_key ==$language].value,
  'quote':quote{
    'author': author[_key ==$language].value,
    'quote': quote[_key ==$language].value,
  },
  'lowerTextBlock': lowerTextBlock[_key ==$language].value,
  'literature': literature[],
}`;

export const newsQuery = groq`*[_type == 'news' && length(title[_key ==$language].value) != 0] | order( _createdAt desc
) [$firstEl ...$lastEl]{
  _id,
   dateStart,
   dateEnd,
   img,
   'title':  title[_key ==$language].value,
   'slug':slug.current,
   'shortDescription':shortDescription[_key ==$language].value,
   'count':count(*[_type == "news" && length(title[_key ==$language].value) != 0])
}`;

export const currentNewsQuery = groq`*[_type == 'news'&& slug.current == $slug][0]{
   _id,
   dateStart,
   dateEnd,
   img,
   'title': coalesce( title[_key ==$language][0].value, title[][0].value), 
   'slug':slug.current,
   'description': coalesce(description[_key ==$language][0].value, description[][0].value)
}`;

export const partners = groq`*[_type == 'partners'][0]{
  organizers,
  mainPartners,
  sponsors,
  generalInfoPartners,
  mainInfoPartners,
  officialInfoPartners,
  partners,
}`;

export const administrationQuery = groq`*[_type == 'administration'][0] {
  'members':members[]{
    'name': name[_key ==$language][0].value,
    'role': role[_key ==$language][0].value,
    img
    },
}`;
