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
        'description': description[_key == $language][0].value, 
        'title': title[_key == $language][0].value, 
        "slug": slug.current, 
        date
    },
    'news': *[_type == 'news' && ([pt::text(description[_key == $language][0].value), title[_key == $language][0].value] match $text)]{
        'description': pt::text(description[_key == $language][0].value), 
        'title': title[_key == $language][0].value, 
        "slug": slug.current,
        date
    }, 
    'virtuososMain': *[_type == 'virtuosos' && description[_key == $language][0].value match $text][0]{
        'text': description[_key == $language][0].value
    }, 
    'virtuosos': *[_type == 'virtuososArticle'  && ([pt::text(description[_key == $language][0].value),title[_key == $language][0].value ] match $text)]{
        'description':pt::text(description[_key == $language][0].value), 
        'title': title[_key == $language][0].value, 
        "slug": slug.current, 
        date
    }, 
    'summerSchoolMain': *[_type == 'summerSchool' && ([bottomText[_key == $language][0].value, topText[_key == $language][0].value] match $text)][0]{
        'topText': select(topText[_key == $language][0].value match $text => topText[_key == $language][0].value), 
        'bottomText': select(bottomText[_key == $language][0].value match $text => bottomText[_key == $language][0].value) 
    },
    'summerSchools': *[_type == 'annualSummerSchool' && (concerts[].concertPrograms[_key == $language][0].value match $text || [description[_key == $language][0].value, pt::text(conditions[_key == $language][0].value), pt::text(orchestra[_key == $language][0].value)] match $text || participants[].biography[_key == $language][0].value match $text || participants[].name[_key == $language][0].value match $text || professors[].about[_key == $language][0].value match $text || professors[].name[_key == $language][0].value match $text)]{
        "slug": slug.current,
        "date": _createdAt,
        year, 
        'concerts': concerts[concertPrograms[_key == $language][0].value match $text]{
            'description': concertPrograms[_key == $language][0].value, 
            'title': title[_key == $language][0].value, 
            'slug': _key

        }, 
        'description': select(description[_key == $language][0].value match $text => description[_key == $language][0].value), 
        'conditions': select(pt::text(conditions[_key == $language][0].value) match $text => pt::text(conditions[_key == $language][0].value)), 
        'artists':  select(pt::text(orchestra[_key == $language][0].value) match $text => pt::text(orchestra[_key == $language][0].value)), 
        'participants': participants[biography[_key == $language][0].value match $text || name[_key == $language][0].value match $text]{
            'slug': slug.current, 
            'description': biography[_key == $language][0].value, 
            'title': name[_key == $language][0].value, 
        }, 
        'professors': professors[about[_key == $language][0].value match $text || name[_key == $language][0].value match $text]{
            'slug': slug.current, 
            'description': about[_key == $language][0].value, 
            'title': name[_key == $language][0].value, 
        }, 
    }, 
    'competitions': *[_type == 'competition' && ([description[_key == $language][0].value, pt::text(junior -> timetable[_key == $language][0].value), pt::text(junior -> requirements[_key == $language][0].value)] match $text || junior -> juries[].jury ->name[_key == $language][0].value match $text || junior -> conditions[].text[_key == $language][0].value match $text || junior -> artists[].text[_key == $language][0].value match $text || junior -> guests[] -> name[_key == $language][0].value match $text || junior -> participants[].name[_key == $language][0].value match $text || junior -> studentsJury[].name[_key == $language][0].value match $text)]{
        'slug': slug.current,
        'date': _createAt, 
        'title': title[_key == $language][0].value,
        'description':  select(description[_key == $language][0].value match $text => description[_key == $language][0].value), 
        'junior': junior -> {
            'juniorDate': _createAt, 
            'juniorConditions': conditions[text[_key == $language][0].value match $text].text[_key == $language][0].value, 
            'juniorTimetable': select(pt::text(timetable[_key == $language][0].value) match $text => pt::text(timetable[_key == $language][0].value)), 
            'juniorRequirements': select(pt::text(requirements[_key == $language][0].value) match $text => pt::text(requirements[_key == $language][0].value)), 
            'juniorJuries':  juries[jury -> name[_key == $language][0].value match $text].jury -> {
                'title': name[_key == $language][0].value, 
                'description': about[_key == $language][0].value, 
                'slug': slug.current,
            },  
            "juniorArtists": artists[text[_key == $language][0].value match $text || title[_key == $language][0].value match $text]{
                'title': title[_key == $language][0].value, 
                'description': text[_key == $language][0].value, 
                "slug": _key,
            }, 
            
            'juniorGuests': guests[@ -> name[_key == $language][0].value match $text]->{
                'title': name[_key == $language][0].value, 
                'description': about[_key == $language][0].value, 
                'slug': _id,
            }, 
           'juniorParticipants': participants[name[_key == $language][0].value match $text]{
                'title': name[_key == $language][0].value, 
                'description': biography[_key == $language][0].value, 
                'slug': subgroup,
           },
           'juniorPreJury': studentsJury[name[_key == $language][0].value match $text]{
                 'title': name[_key == $language][0].value, 
                'description': biography[_key == $language][0].value, 
                'slug': _key,
           }, 
           'juniorVenues': venues[text[_key == $language][0].value match $text || title[_key == $language][0].value match $text]{
                'title': title[_key == $language][0].value, 
                'description': text[_key == $language][0].value, 
                "slug": _key,
            },  
           'juniorWinners': null
        },
    }
}`;
