import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-elastic-carousel';

const buddy = require("../images/Buddy.jpeg");
const dexi = require("../images/Dexi.jpeg");
const goliath = require("../images/Goliath.jpeg");
const rusty = require("../images/Rusty.jpeg");
const tommy = require("../images/Tommy.jpeg");
const mia = require("../images/mia.jpg");
const penny = require("../images/penny.jpg");
const harley = require("../images/harley.jpg");
const cronk = require("../images/cronk.jpg");
const calamity = require("../images/calamity.jpg");
const lucky = require("../images/lucky.jpg");
const chickenwing = require("../images/chicken wing.jpg");
const rex = require("../images/rex.jpeg");
const ember = require("../images/ember.jpeg");
const apache = require("../images/apache.jpeg");
const tank = require("../images/tank.jpg");
const bettywhite = require("../images/betty white.jpg");
const noodle = require("../images/noodle.jpg");
const daisy = require("../images/daisy.jpg");

function HorseCarousel() {

    return (
        <Carousel itemsToShow={3}>
            <Box 
                sx={{ 
                    flexGrow: 1, 
                    height: 300,
                    width: 600,
                    mr: 1
                  }}
                  className="buddy-box"
                  component="img"
                  src={buddy}>
                </Box>

            <Box 
                sx={{ 
                    flexGrow: 1, 
                    height: 300,
                    width: 600,
                    mr: 1
                  }}
                  className="dexi-box"
                  component="img"
                  src={dexi}>
            </Box>

            <div className='box'>1</div>
            <div className='box'>2</div>
            <div className='box'>3</div>
            <div className='box'>4</div>
            <div className='box'>5</div>
        </Carousel>
    )
    }

export default HorseCarousel;