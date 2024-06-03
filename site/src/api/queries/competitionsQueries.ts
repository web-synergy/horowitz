import groq from 'groq';
export const competitionsQuery = groq`*[_type == 'competition' && slug.current == $slug][0]{
  "title": title[_key ==$language][0].value, 
   "description": description[_key ==$language][0].value, 
  isStubActive, 
  "stubText": stubText[_key ==$language][0].value, 
  juniorBtn, 
  intermediateBtn, 
  seniorBtn, 
  mainBanner, 
  "slug": slug.current, 
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
