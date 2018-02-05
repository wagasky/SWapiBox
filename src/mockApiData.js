/* eslint-disable */ 

const peopleData = 
  [
    {"name":"Luke Skywalker","homeworld":"Tatooine","species":"Human","population":"200000"},
    {"name":"C-3PO","homeworld":"Tatooine","species":"Droid","population":"200000"},
    {"name":"R2-D2","homeworld":"Naboo","species":"Droid","population":"4500000000"},
    {"name":"Darth Vader","homeworld":"Tatooine","species":"Human","population":"200000"},
    {"name":"Leia Organa","homeworld":"Alderaan","species":"Human","population":"2000000000"},
    {"name":"Owen Lars","homeworld":"Tatooine","species":"Human","population":"200000"},
    {"name":"Beru Whitesun lars","homeworld":"Tatooine","species":"Human","population":"200000"},
    {"name":"R5-D4","homeworld":"Tatooine","species":"Droid","population":"200000"},
    {"name":"Biggs Darklighter","homeworld":"Tatooine","species":"Human","population":"200000"},
    {"name":"Obi-Wan Kenobi","homeworld":"Stewjon","species":"Human","population":"unknown"}
    ];

const planetData = [
  {"name":"Alderaan","terrain":"grasslands, mountains","population":"2000000000","climate":"temperate","residents":"Leia Organa\nBail Prestor Organa\nRaymus Antilles"},
  {"name":"Yavin IV","terrain":"jungle, rainforests","population":"1000","climate":"temperate, tropical","residents":"none"},
  {"name":"Hoth","terrain":"tundra, ice caves, mountain ranges","population":"unknown","climate":"frozen","residents":"none"},
  {"name":"Dagobah","terrain":"swamp, jungles","population":"unknown","climate":"murky","residents":"none"},
  {"name":"Bespin","terrain":"gas giant","population":"6000000","climate":"temperate","residents":"Lobot"},
  {"name":"Endor","terrain":"forests, mountains, lakes","population":"30000000","climate":"temperate","residents":"Wicket Systri Warrick"},
  {"name":"Naboo","terrain":"grassy hills, swamps, forests, mountains","population":"4500000000","climate":"temperate","residents":"R2-D2\nPalpatine\nJar Jar Binks\nRoos Tarpals\nRugor Nass\nRic Olié\nQuarsh Panaka\nGregar Typho\nCordé\nDormé\nPadmé Amidala"},
  {"name":"Coruscant","terrain":"cityscape, mountains","population":"1000000000000","climate":"temperate","residents":"Finis Valorum\nAdi Gallia\nJocasta Nu"},
  {"name":"Kamino","terrain":"ocean","population":"1000000000","climate":"temperate","residents":"Boba Fett\nLama Su\nTaun We"},
  {"name":"Geonosis","terrain":"rock, desert, mountain, barren","population":"100000000000","climate":"temperate, arid","residents":"Poggle the Lesser"}];

const vehicleData = [
  {"name":"Sand Crawler","model":"Digger Crawler","vehicleClass":"wheeled","passengers":"30"},
  {"name":"T-16 skyhopper","model":"T-16 skyhopper","vehicleClass":"repulsorcraft","passengers":"1"},
  {"name":"X-34 landspeeder","model":"X-34 landspeeder","vehicleClass":"repulsorcraft","passengers":"1"},
  {"name":"TIE/LN starfighter","model":"Twin Ion Engine/Ln Starfighter","vehicleClass":"starfighter","passengers":"0"},
  {"name":"Snowspeeder","model":"t-47 airspeeder","vehicleClass":"airspeeder","passengers":"0"},
  {"name":"TIE bomber","model":"TIE/sa bomber","vehicleClass":"space/planetary bomber","passengers":"0"},
  {"name":"AT-AT","model":"All Terrain Armored Transport","vehicleClass":"assault walker","passengers":"40"},
  {"name":"AT-ST","model":"All Terrain Scout Transport","vehicleClass":"walker","passengers":"0"},
  {"name":"Storm IV Twin-Pod cloud car","model":"Storm IV Twin-Pod","vehicleClass":"repulsorcraft","passengers":"0"},
  {"name":"Sail barge","model":"Modified Luxury Sail Barge","vehicleClass":"sail barge","passengers":"500"}];

const filmData = [
    {
      "title":"A New Hope",
      "releaseYear":"1977-05-25",
      "number": 'IV',
      "text":"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    }
  ]

const favoritesData = [
   {"name":"Luke Skywalker","homeworld":"Tatooine","species":"Human","population":"200000"},
   {"name":"Sand Crawler","model":"Digger Crawler","vehicleClass":"wheeled","passengers":"30"},
   {"name":"Alderaan","terrain":"grasslands, mountains","population":"2000000000","climate":"temperate","residents":"Leia Organa\nBail Prestor Organa\nRaymus Antilles"},
]

// const homeWorldData = [
//   {
//     name: "Tatooine",
//     population: "200000"
//   }
// ]

// const speciesData = [
//   {
//     name: "Human"
//   }
// ]

// const residentNameData = [
//   {
//     name: "Bail Prestor Organa"
//   }
// ]

// const mockRawData = {
//   "people": {
//     "count": 1, 
//     "next": "https://swapi.co/api/people/?page=2", 
//     "previous": null, 
//     "results": [
//       {
//         "name": "Luke Skywalker", 
//         "height": "172", 
//         "mass": "77", 
//         "hair_color": "blond", 
//         "skin_color": "fair", 
//         "eye_color": "blue", 
//         "birth_year": "19BBY", 
//         "gender": "male", 
//         "homeworld": "https://swapi.co/api/planets/1/", 
//         "films": [
//           "https://swapi.co/api/films/2/", 
//           "https://swapi.co/api/films/6/", 
//           "https://swapi.co/api/films/3/", 
//           "https://swapi.co/api/films/1/", 
//           "https://swapi.co/api/films/7/"
//         ], 
//         "species": [
//           "https://swapi.co/api/species/1/"
//         ], 
//         "vehicles": [
//           "https://swapi.co/api/vehicles/14/", 
//           "https://swapi.co/api/vehicles/30/"
//         ], 
//         "starships": [
//           "https://swapi.co/api/starships/12/", 
//           "https://swapi.co/api/starships/22/"
//         ], 
//         "created": "2014-12-09T13:50:51.644000Z", 
//         "edited": "2014-12-20T21:17:56.891000Z", 
//         "url": "https://swapi.co/api/people/1/"
//       }
//     ]
//   },
//   "planets": {
//     "count": 1, 
//     "next": "https://swapi.co/api/planets/?page=2", 
//     "previous": null, 
//     "results": [
//       {
//         "name": "Alderaan", 
//         "rotation_period": "24", 
//         "orbital_period": "364", 
//         "diameter": "12500", 
//         "climate": "temperate", 
//         "gravity": "1 standard", 
//         "terrain": "grasslands, mountains", 
//         "surface_water": "40", 
//         "population": "2000000000", 
//         "residents": [
//           "https://swapi.co/api/people/5/", 
//           "https://swapi.co/api/people/68/", 
//           "https://swapi.co/api/people/81/"
//         ], 
//         "films": [
//           "https://swapi.co/api/films/6/", 
//           "https://swapi.co/api/films/1/"
//         ], 
//         "created": "2014-12-10T11:35:48.479000Z", 
//         "edited": "2014-12-20T20:58:18.420000Z", 
//         "url": "https://swapi.co/api/planets/2/"
//       }
//     ]
//   },
//   "vehicles": {
//     "count": 1, 
//     "next": "https://swapi.co/api/vehicles/?page=2", 
//     "previous": null, 
//     "results": [
//       {
//         "name": "Sand Crawler", 
//         "model": "Digger Crawler", 
//         "manufacturer": "Corellia Mining Corporation", 
//         "cost_in_credits": "150000", 
//         "length": "36.8", 
//         "max_atmosphering_speed": "30", 
//         "crew": "46", 
//         "passengers": "30", 
//         "cargo_capacity": "50000", 
//         "consumables": "2 months", 
//         "vehicle_vehicleClass": "wheeled", 
//         "pilots": [], 
//         "films": [
//           "https://swapi.co/api/films/5/", 
//           "https://swapi.co/api/films/1/"
//         ], 
//         "created": "2014-12-10T15:36:25.724000Z", 
//         "edited": "2014-12-22T18:21:15.523587Z", 
//         "url": "https://swapi.co/api/vehicles/4/"
//       }
//     ]
//   },
//   "films": {
//     "count": 7, 
//     "next": null, 
//     "previous": null, 
//     "results": [
//       {
//         "title": "A New Hope", 
//         "episode_id": 4, 
//         "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
//         "director": "George Lucas", 
//         "producer": "Gary Kurtz, Rick McCallum", 
//         "release_date": "1977-05-25", 
//         "characters": [
//           "https://swapi.co/api/people/1/", 
//           "https://swapi.co/api/people/2/", 
//           "https://swapi.co/api/people/3/", 
//           "https://swapi.co/api/people/4/", 
//           "https://swapi.co/api/people/5/", 
//           "https://swapi.co/api/people/6/", 
//           "https://swapi.co/api/people/7/", 
//           "https://swapi.co/api/people/8/", 
//           "https://swapi.co/api/people/9/", 
//           "https://swapi.co/api/people/10/", 
//           "https://swapi.co/api/people/12/", 
//           "https://swapi.co/api/people/13/", 
//           "https://swapi.co/api/people/14/", 
//           "https://swapi.co/api/people/15/", 
//           "https://swapi.co/api/people/16/", 
//           "https://swapi.co/api/people/18/", 
//           "https://swapi.co/api/people/19/", 
//           "https://swapi.co/api/people/81/"
//         ], 
//         "planets": [
//           "https://swapi.co/api/planets/2/", 
//           "https://swapi.co/api/planets/3/", 
//           "https://swapi.co/api/planets/1/"
//         ], 
//         "starships": [
//           "https://swapi.co/api/starships/2/", 
//           "https://swapi.co/api/starships/3/", 
//           "https://swapi.co/api/starships/5/", 
//           "https://swapi.co/api/starships/9/", 
//           "https://swapi.co/api/starships/10/", 
//           "https://swapi.co/api/starships/11/", 
//           "https://swapi.co/api/starships/12/", 
//           "https://swapi.co/api/starships/13/"
//         ], 
//         "vehicles": [
//           "https://swapi.co/api/vehicles/4/", 
//           "https://swapi.co/api/vehicles/6/", 
//           "https://swapi.co/api/vehicles/7/", 
//           "https://swapi.co/api/vehicles/8/"
//         ], 
//         "species": [
//           "https://swapi.co/api/species/5/", 
//           "https://swapi.co/api/species/3/", 
//           "https://swapi.co/api/species/2/", 
//           "https://swapi.co/api/species/1/", 
//           "https://swapi.co/api/species/4/"
//         ], 
//         "created": "2014-12-10T14:23:31.880000Z", 
//         "edited": "2015-04-11T09:46:52.774897Z", 
//         "url": "https://swapi.co/api/films/1/"
//       }
//     ]
//   }
// }

export default { favoritesData, peopleData, planetData, vehicleData, filmData };