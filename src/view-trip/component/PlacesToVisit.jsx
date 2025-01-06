import React from "react";
import PlaceCarditem from "./PlaceCarditem";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-2xl mt-20">Ready To Explore</h2>
      <h2 className="font-bold text-sm text-gray-800 mt-2">Day Wise Plan 🏖️</h2>

      <div>
        {trip?.tripData?.itinerary?.map((item, index) => (
          <div>
            {trip?.tripData?.itinerary.map((item, index) => (
              <div>
                <h2 className="font-medium text-lg">Day {item.day}</h2>
                {item.activities.map((place, index) => (
                  <div className="my-5">
                    <PlaceCarditem place={place} />
                    <h2>{place.place_name}</h2>

                    <h2>{place.time_travel}</h2>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
