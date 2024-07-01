import groq from 'groq';

export const searchQuery = groq`*[_type == 'administration'][0]{
    'administration': {
        "members": members[name[_key == $language].value match $text]{
            "name": name[_key==$language][0].value, 
            'role': role[_key==$language][0].value, 
        },
    }, 
    'horowitz': *[_type == 'horowitz'][0]{
        'literature': select(literature match $text =>literature), 
        'lowerTextBlock': select(lowerTextBlock[_key == $language][0].value match $text =>lowerTextBlock[_key == $language][0].value), 
        'upperTextBlock': select(upperTextBlock[_key == $language][0].value match $text => upperTextBlock[_key == $language][0].value), 
    }, 
    "about": *[_type=='aboutHorowitzCompetition'][0]{
        'blockTexts': select(pt::text(blocks[].textBlock[_key == $language][0].value) match $text => pt::text(blocks[].textBlock[_key == $language][0].value)),
        'additionalText': select(pt::text(additionalText[_key == $language][0].value) match $text => pt::text(additionalText[_key == $language][0].value))
    },         
    'urkWork': *[_type == 'ukrainianWorks' && pt::text(text[_key == $language][0].value) match $text][0]{
        'text': pt::text(text[_key == $language][0].value)
    },
    'masterClass': *[_type == 'masterClass' && ([description[_key == $language][0].value, title[_key == $language][0].value] match $text)]{
        'description': select(description[_key == $language][0].value match $text => description[_key == $language][0].value), 
        'title': title[_key == $language][0].value, 
        "slug": slug.current
    },
    'news': *[_type == 'news' && ([pt::text(description[_key == $language][0].value), title[_key == $language][0].value] match $text)]{
        'description': select(description[_key == $language][0].value match $text => description[_key == $language][0].value), 
        'title': title[_key == $language][0].value, 
        "slug": slug.current,
    }, 
    'virtuososMain': *[_type == 'virtuosos' && description[_key == $language][0].value match $text][0]{
        'text': description[_key == $language][0].value
    }, 
    'virtuosos': *[_type == 'virtuososArticle'  && ([pt::text(description[_key == $language][0].value),title[_key == $language][0].value ] match $text)]{
        'description': select(pt::text(description[_key == $language][0].value) match $text =>pt::text(description[_key == $language][0].value)), 
        'title': title[_key == $language][0].value, 
        "slug": slug.current
    }, 
    'summerSchoolMain': *[_type == 'summerSchool' && ([bottomText[_key == $language][0].value, topText[_key == $language][0].value] match $text)][0]{
        'topText': select(topText[_key == $language][0].value match $text => topText[_key == $language][0].value), 
        'bottomText': select(bottomText[_key == $language][0].value match $text => bottomText[_key == $language][0].value) 
    },
    'summerSchools': *[_type == 'annualSummerSchool' && (concerts[].concertPrograms[_key == $language][0].value match $text || [description[_key == $language][0].value, pt::text(conditions[_key == $language][0].value), pt::text(orchestra[_key == $language][0].value)] match $text || participants[].biography[_key == $language][0].value match $text || participants[].name[_key == $language][0].value match $text || professors[].about[_key == $language][0].value match $text || professors[].name[_key == $language][0].value match $text)]{
        "slug": slug.current,
        'concerts': select(concerts[].concertPrograms[_key == $language][0].value match $text => concerts[]{
            'description': select(concertPrograms[_key == $language][0].value match $text => concertPrograms[_key == $language][0].value), 
            'title': title[_key == $language][0].value, 
            'slug': _key

        }), 
        'description': select(description[_key == $language][0].value match $text => description[_key == $language][0].value), 
        'conditions': select(pt::text(conditions[_key == $language][0].value) match $text => pt::text(conditions[_key == $language][0].value)), 
        'artists':  select(pt::text(orchestra[_key == $language][0].value) match $text => pt::text(conditions[_key == $language][0].value)), 
        'participants': select(participants[].biography[_key == $language][0].value match $text || participants[].name[_key == $language][0].value match $text => participants[]{
            'slug': slug.current, 
            'biography': select(biography[_key == $language][0].value match $text => biography[_key == $language][0].value), 
            'name': select(biography[_key == $language][0].value match $text || name[_key == $language][0].value match $text => name[_key == $language][0].value), 
        }), 
        'professors': select(professors[].about[_key == $language][0].value match $text || professors[].name[_key == $language][0].value match $text => professors[]{
            'slug': slug.current, 
            'about': select(about[_key == $language][0].value match $text => about[_key == $language][0].value), 
            'name': select(about[_key == $language][0].value match $text|| name[_key == $language][0].value match $text => name[_key == $language][0].value), 
        }), 


    }, 
}`;
