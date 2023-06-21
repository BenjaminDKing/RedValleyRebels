import React, { useState } from "react";
import './activities.css'

function Activities() {
    return(
        <div className="activities">
            <h1>Horseback Riding</h1>
            <p>
                Red Valley Rebels operates their horseback rides at the old Heritage Ranch in Fairplay,
                Colorado. With access to over 2,000 acres we do rides a little differently. We are able to
                spread our horses out over the beautiful High Rocky terrain. Yes, that means we do not do
                nose to tail trail rides! You are able to really control your own horse. You a paired with the
                perfect mount to ensure you have a great experience. Here at Red Valley Rebels we strive
                to give the guests a laid back ride that they will never forget!
            </p>
            <div className="activities-div">
                <div className="activity-div-1">
                    <div className="1hr-ride-div activity">
                        <h3>1-Hour Ride</h3>
                        <ul>
                            <li>$75</li>
                            <li>Ages 8 and up</li>
                            <li>Side by side</li>
                            <li>Any experience level</li>
                        </ul>
                    </div>  
                    <div className="2hr-ride-div activity">
                        <h3>2-Hour Ride</h3>
                        <ul>
                            <li>$95</li>
                            <li>Ages 8 and up</li>
                            <li>Side by Side</li>
                            <li>Any experience level</li>
                        </ul>
                    </div>
                    <div className="3hr-ride-div activity">
                        <h3>3-Hour Ride</h3>
                        <ul>
                            <li>$150</li>
                            <li>Ages 8 and up</li>
                            <li>Side by Side</li>
                            <li>For more experienced Riders</li>
                        </ul>
                    </div>
                </div>

                <div className="activity-div-2">
                    <div className="private-ride-div activity">
                        <h3>Private Ride</h3>
                        <ul>
                            <li>$115</li>
                            <li>Ages 8 and up</li>
                            <li>Any experience level</li>
                        </ul>
                    </div>
                    <div className="lessons-div activity">
                        <h3>Lessons</h3>
                        <ul>
                            <li>$65 for an hour</li>
                            <li>Have to be old enough to control your own horse</li>
                            <li>Any experience level</li>
                        </ul>
                    </div>
                    <div className="pony-ride-div activity">
                        <h3>Pony Rides</h3>
                        <ul>
                            <li>Ages 2-7</li>
                            <li>30 minutes</li>
                            <li>Guardian walks pony around the round pen while child rides</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities;