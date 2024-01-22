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
  'upperBlockText': upperBlockText[_key ==$language].value,
  'quote':quote{
    'author': author[_key ==$language].value,
    'quote': quote[_key ==$language].value,
  },
  'lowerBlockText': lowerBlockText[_key ==$language].value,
  'literature': literature[],
}`;

// export const horowitzQuery = groq`*[_type == 'horowitz'][0] {
//   'bannerData': {
//     'bannerImg': bannerData.bannerImg.asset->url,
//     'bannerCopyright': bannerData.bannerCopyright
//   },
//   'upperBlockText': upperBlockText[_key ==$language].value[].children[0].text,
//   'quote':quote{
//     'author': author[_key ==$language].value,
//     'quote': quote[_key ==$language].value,
//   },
//   'lowerBlockText': upperBlockText[_key ==$language].value,
//   'literature': literature[].children[0],
// }`;
