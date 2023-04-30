import React, { useState } from "react";

function Activities() {
    return(
        <div className="activities">
            <h1>Activities</h1>
            <h1>Horseback riding</h1>
            <p>
                Red Valley Rebels operates their horseback rides at the old Heritage Ranch in Fairplay,
                Colorado. With access to over 2,000 acres we do rides a little differently. We are able to
                spread our horses out over the beautiful High Rocky terrain. Yes, that means we do not do
                nose to tail trail rides! You are able to really control your own horse. You a paired with the
                perfect mount to ensure you have a great experience. Here at Red Valley Rebels we strive
                to give the guests a laid back ride that they will never forget!
            </p>
            <div className="1hr-ride-div">
                1hr ride
                <ul>
                    <li>$75</li>
                    <li>Ages 8 and up</li>
                    <li>Side by side</li>
                    <li>Any experience level</li>
                </ul>
            </div>  
            <div className="2hr-ride-div">
                2 hr ride
                <ul>
                    <li>$95</li>
                    <li>Ages 8 and up</li>
                    <li>Side by Side</li>
                    <li>Any experience level</li>
                </ul>
            </div>
            <div className="3hr-ride-div">
                3 hr ride
                <ul>
                    <li>$150</li>
                    <li>Ages 8 and up</li>
                    <li>Side by Side</li>
                    <li>For more experienced Riders</li>
                </ul>
            </div>
            <div className="private-ride-div">
                Private ride
                <ul>
                    <li>$115</li>
                    <li>Ages 8 and up</li>
                    <li>Any experience level</li>
                </ul>
            </div>
            <div className="lessons-div">
                Lessons
                <ul>
                    <li>$65 for an hour</li>
                    <li>Have to be old enough to control your own horse</li>
                    <li>Any experience level</li>
                </ul>
            </div>
            <div className="pony-ride-div">
                Pony Rides
                <ul>
                    <li>Ages 2-7</li>
                    <li>30 minutes</li>
                    <li>Guardian walks pony around the round pen while child rides</li>
                </ul>
            </div>
        </div>
    )
}

export default Activities;