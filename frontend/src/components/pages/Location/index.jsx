import React, { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

// Longitude: -105.993770
// Latitude: 39.219960

const coordinates = {
    lat: 39.219960,
    lng: -105.993770
}

function Location() {
    const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY});

    if ( !isLoaded ) { return <div>Loading...</div>}
    return(
        <div className="location">
            <h1>Directions</h1>
            <div className="location-body">    
                    <Map />
                <div className="location-text-container">
                    <div className="breckenridge-div">
                        <h2>From Breckenridge</h2>
                        <p>
                            Drive South 22 miles on highway 9 towards Fairplay. Drive to the end of town and turn left at
                            the stop light. Drive about six miles until you see the red roof ranch on the left. GPS will tell
                            you, you have arrived at the top of red hill pass. Total Drive time about 45 minutes.
                        </p>
                    </div>
                    <div className="denver-div">
                        <h2>From Denver</h2>
                        <p>
                            Drive approximately 65 miles to the town of Jefferson. From here keep driving another 11
                            miles the red roof ranch on the right hand side of 285. Total Drive time about 1.5 hours.
                            Take Hwy 24 to highway 9. Turn right onto 9 to get into the town of Fairplay, roughly 83
                            miles. From Fairplay keep driving through town past the stoplight about six miles to the
                            reed roof ranch on the left hand side. Total Drive time about 1.5 hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Map() {
    return (
        <GoogleMap
            zoom={15}
            center={coordinates}
            mapContainerClassName="map-container"
        >
            <MarkerF position={{lat: 39.219960, lng: -105.993770}}> </MarkerF>
        </GoogleMap>
    )
}

export default Location;