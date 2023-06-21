import React, { useState } from "react";
import Example from "../../carousel";


function FAQ() {
    return(
        <div className="faq">
        <Example/>
        <h1>Frequently Asked Questions</h1>
            <ul>
                <li>By Reservation Only</li>
                <li>Ages 8 and up for Horseback Rides</li>
                <li>We do not ride double for safety reasons</li>
                <li>Helmets are provided if requested.</li>
                <li>Closed toed shoes and pants are necessary.</li>
                <li>We do not run our horses.</li>
                <li>We go out in all weather besides thunder and lightening.</li>
                <li>You can bring water on the ride</li>
                <li>Don&#39;t forget your Sunscreen!</li>
                <li>Weight limit of 275lbs depending on height.</li>
            </ul>
        </div>
    )
}

export default FAQ;