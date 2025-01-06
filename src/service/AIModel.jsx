import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location :las Vegas, for 3 Days for couple with cheap budget , give me a hotel options list with hotel name, hotel adress ,hotel price ,hotel image url , geo coordinates , rating ,description and suggest itineary with placename ,place details ,place image url , geo coordinates , ticket pricing , time travel each of location for 3 days with each day plan with best time to visit in json formate dont forget to give hotel list and all the details should be in json formate dont forget hotel price"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"location\": \"Las Vegas, Nevada\",\n  \"duration\": \"3 Days\",\n  \"budget\": \"Cheap\",\n  \"travelers\": \"Couple\",\n  \"hotel_options\": [\n    {\n      \"hotel_name\": \"Circus Circus Hotel & Casino\",\n      \"hotel_address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"hotel_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/1a/72/6d/2a/exterior.jpg\",\n       \"geo_coordinates\": {\n        \"latitude\": 36.1378,\n        \"longitude\": -115.1696\n      },\n      \"rating\": 3.5,\n       \"description\": \"A classic Vegas hotel with affordable rates, a circus theme, and a variety of entertainment options including the Adventuredome theme park.\"\n\n    },\n    {\n      \"hotel_name\": \"Excalibur Hotel & Casino\",\n       \"hotel_address\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"hotel_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/19/d3/76/6e/excalibur-hotel-casino.jpg\",\n       \"geo_coordinates\": {\n        \"latitude\": 36.0987,\n        \"longitude\": -115.1742\n      },\n      \"rating\": 4.0,\n      \"description\": \"A medieval-themed hotel offering budget-friendly rooms, pools, and a variety of dining choices. Good location at the south end of the Strip.\"\n    },\n   {\n      \"hotel_name\": \"OYO Hotel and Casino Las Vegas\",\n       \"hotel_address\": \"115 E Tropicana Ave, Las Vegas, NV 89109\",\n      \"hotel_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/15/2f/20/71/oyo-hotel-and-casino-las.jpg\",\n       \"geo_coordinates\": {\n        \"latitude\": 36.1014,\n        \"longitude\": -115.1671\n      },\n       \"rating\": 3.0,\n      \"description\": \"Budget-friendly option with basic amenities, located near the Las Vegas Strip. Offers decent value for those on a tight budget.\"\n   }\n\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Exploring the Strip (South)\",\n      \"best_time_to_visit\": \"Morning and Evening\",\n      \"activities\": [\n        {\n          \"place_name\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"place_details\": \"Iconic photo opportunity, must-visit for first-timers.\",\n          \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Welcome_to_Fabulous_Las_Vegas_sign.JPG/1280px-Welcome_to_Fabulous_Las_Vegas_sign.JPG\",\n           \"geo_coordinates\": {\n            \"latitude\": 36.0827,\n            \"longitude\": -115.1726\n          },\n          \"ticket_pricing\": \"Free\",\n          \"time_travel\": \"Walking distance from southern end of the strip.\"\n        },\n        {\n          \"place_name\": \"Bellagio Conservatory & Botanical Gardens\",\n          \"place_details\": \"Beautifully themed botanical displays, free to enter.\",\n          \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/15/9a/1e/34/bellagio-conservatory.jpg\",\n           \"geo_coordinates\": {\n            \"latitude\": 36.1127,\n            \"longitude\": -115.1741\n          },\n           \"ticket_pricing\": \"Free\",\n          \"time_travel\": \"Short walk or bus ride from the sign\"\n        },\n         {\n           \"place_name\": \"Fountains of Bellagio\",\n           \"place_details\": \"Spectacular water fountain show set to music, free to watch.\",\n           \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/18/6f/69/79/fountains-of-bellagio.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 36.1125,\n             \"longitude\": -115.1738\n           },\n          \"ticket_pricing\": \"Free\",\n           \"time_travel\": \"Right in front of the Bellagio\"\n         },\n        {\n          \"place_name\": \"Mirage Volcano\",\n           \"place_details\": \"Volcanic eruption show with fire and smoke, free to watch.\",\n          \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/10/d7/14/e8/the-volcano.jpg\",\n           \"geo_coordinates\": {\n            \"latitude\": 36.1205,\n            \"longitude\": -115.1737\n          },\n          \"ticket_pricing\": \"Free\",\n          \"time_travel\": \"Walking distance from the Bellagio\"\n        },\n       {\n          \"place_name\": \"Explore LINQ Promenade\",\n          \"place_details\": \"Outdoor shopping, dining, and entertainment district.\",\n          \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/0c/4c/d0/26/the-linq-promenade.jpg\",\n           \"geo_coordinates\": {\n              \"latitude\": 36.1177,\n              \"longitude\": -115.1704\n            },\n          \"ticket_pricing\": \"Free to enter, activities vary\",\n          \"time_travel\": \"Walking distance from the Mirage\"\n       }\n      ]\n    },\n    \"day2\": {\n        \"theme\": \"Exploring the Strip (North) & Downtown\",\n         \"best_time_to_visit\": \"Afternoon and Evening\",\n      \"activities\": [\n          {\n            \"place_name\": \"Fremont Street Experience\",\n             \"place_details\": \"Pedestrian mall with a huge video screen canopy, free light show.\",\n            \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/11/29/18/c2/fremont-street-experience.jpg\",\n              \"geo_coordinates\": {\n               \"latitude\": 36.1705,\n               \"longitude\": -115.1427\n             },\n            \"ticket_pricing\": \"Free\",\n             \"time_travel\": \"Bus or ride-share from the Strip (~20-30 minutes)\"\n          },\n          {\n            \"place_name\": \"Mob Museum\",\n             \"place_details\": \"Interactive museum about the history of organized crime (admission fee applies).\",\n            \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/0d/a8/90/9a/exterior.jpg\",\n              \"geo_coordinates\": {\n               \"latitude\": 36.1719,\n               \"longitude\": -115.1416\n             },\n            \"ticket_pricing\": \" ~$30 per person ( consider cheaper after 5 pm price)\",\n            \"time_travel\": \"walking distance from Fremont Street\"\n        },\n         {\n              \"place_name\": \"Container Park\",\n               \"place_details\": \"Unique shopping and dining complex built from shipping containers.\",\n              \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/0e/b2/63/13/container-park.jpg\",\n              \"geo_coordinates\": {\n                \"latitude\": 36.1694,\n                \"longitude\": -115.1404\n              },\n               \"ticket_pricing\": \"Free to enter, costs for dining/shopping\",\n               \"time_travel\": \"short walk from Fremont Street\"\n            },\n\n        {\n          \"place_name\": \"Stratosphere Tower\",\n          \"place_details\": \"Enjoy views from the observation deck (admission fee applies).\",\n           \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/15/af/e4/2e/strat-hotel-casino-sky.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 36.1521,\n              \"longitude\": -115.1578\n            },\n          \"ticket_pricing\": \"~ $25 - 30 for basic access to the tower\",\n           \"time_travel\": \"Short Bus ride or ride share from downtown\"\n        },\n         {\n           \"place_name\": \"Walk The strip at Night\",\n           \"place_details\": \"Enjoy the beautiful lights of Las Vegas\",\n            \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/1a/83/0b/83/night-time-on-the-strip.jpg\",\n            \"geo_coordinates\": {\n            \"latitude\": 36.1176,\n             \"longitude\": -115.1726\n            },\n            \"ticket_pricing\": \"Free\",\n            \"time_travel\": \"walking distance from the hotels in strip area\"\n\n         }\n       ]\n    },\n    \"day3\": {\n      \"theme\": \"Pool Day & Cheap Thrills\",\n      \"best_time_to_visit\": \"Daytime\",\n      \"activities\": [\n          {\n          \"place_name\": \"Pool Time\",\n            \"place_details\": \"Enjoy your hotel pool or a cheap public pool.\",\n            \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/16/4c/a3/2e/hotel-pool.jpg\",\n             \"geo_coordinates\": {\n              \"latitude\": 36.1022,\n              \"longitude\": -115.1683\n            },\n            \"ticket_pricing\": \"Free if staying at a hotel with pool access or ~$10 - $20 for a cheap day-pass.\",\n            \"time_travel\": \"Within your Hotel\"\n        },\n        {\n          \"place_name\": \"M&M's World\",\n          \"place_details\": \"Fun, interactive candy store with displays.\",\n          \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/10/0b/e3/8d/m-m-s-world.jpg\",\n          \"geo_coordinates\": {\n            \"latitude\": 36.1048,\n            \"longitude\": -115.1708\n          },\n          \"ticket_pricing\": \"Free to enter, costs for purchases\",\n           \"time_travel\":\"Walkable distance from the hotel\"\n        },\n        {\n            \"place_name\": \"Coca-Cola Store\",\n            \"place_details\": \"Unique Coca-Cola merchandise and tasting experience.\",\n           \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/0f/1a/d1/32/coca-cola-store.jpg\",\n             \"geo_coordinates\": {\n              \"latitude\": 36.1054,\n              \"longitude\": -115.1708\n            },\n            \"ticket_pricing\": \"Free to enter, costs for purchases\",\n             \"time_travel\": \"Next to M&M's World\"\n        },\n        {\n          \"place_name\": \"People Watching on the Strip\",\n          \"place_details\": \"Enjoy the unique Vegas street scene and free entertainment.\",\n           \"place_image_url\":\"https://media-cdn.tripadvisor.com/media/photo-s/12/38/19/b8/the-strip-in-the-evening.jpg\",\n            \"geo_coordinates\": {\n                \"latitude\": 36.1166,\n                \"longitude\": -115.1721\n            },\n          \"ticket_pricing\": \"Free\",\n          \"time_travel\": \"Anywhere on the Strip\"\n        },\n        {\n          \"place_name\": \"Cheap Buffets\",\n           \"place_details\": \"Have a last cheap and fulfilling buffet meal before departure\",\n           \"place_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/19/c0/7a/19/the-buffet.jpg\",\n           \"geo_coordinates\": {\n              \"latitude\": 36.1000,\n              \"longitude\": -115.1681\n            },\n          \"ticket_pricing\": \"$20 - $30 per person\",\n           \"time_travel\": \"Near most of the hotels\"\n        }\n      ]\n    }\n  }\n}\n```"},
        ],
      },
    ],
  });

 