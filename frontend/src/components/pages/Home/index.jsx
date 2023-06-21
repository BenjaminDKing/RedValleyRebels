import React, {useState} from "react";
import { Box } from "@mui/material";
import './index.css';

function Home() {
    return (
        <div className="home-page">
            <div className="about-us-div">
                <h2>About Us</h2>
                <p><b>
                Red Valley Rebels is a newer operation founded by Chuck Moore and Ella Kupperberg. Being
                raised around horses and working for many different types of ranches, these two wanted to

                provide a unique authentic experience to their guests.

                In the beginning of 2021 Mr. and Mrs. Klaiber allowed them to graciously start their operation
                on the beautiful Heritage Ranch of the Rockies in Fairplay, Colorado. Red Valley Rebels shares
                Heritage Ranch of the Rockies with wild mustangs and burros that the Rocky Mountain Mustang
                Refuge has adopted. If you would like to donate to their amazing mission please visit their
                website below: 
                </b></p>

                <b><a href="https://rockymountainmustang.org/donatermmr/">https://rockymountainmustang.org/donatermmr/</a></b>
                <p><b>
                Red Valley Rebels caters to their guests needs and give them a one of a kind personal ride. They
                take the time to get to know their guests and make them feel comfortable. Their well taken care
                of horses will be perfectly paired with their riders depending on experience. Red Valley Rebels
                and their knowledgable guides ensure the safety of every rider that steps onto the ranch.
                </b></p>
            </div>
        </div>  
    )
}

export default Home;