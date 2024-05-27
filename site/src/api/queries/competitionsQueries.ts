import groq from 'groq';
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
