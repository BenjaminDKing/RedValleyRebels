import React, { useState } from "react";
import Box from '@mui/material/Box';
import './horses.css';

function Horses() {
    const buddy = require("../../../images/Buddy.jpeg");
    const dexi = require("../../../images/Dexi.jpeg");
    const goliath = require("../../../images/Goliath.jpeg");
    const rusty = require("../../../images/Rusty.jpeg");
    const tommy = require("../../../images/Tommy.jpeg");
    const mia = require("../../../images/mia.jpg");
    const penny = require("../../../images/penny.jpg");
    const harley = require("../../../images/harley.jpg");
    const cronk = require("../../../images/cronk.jpg");
    const calamity = require("../../../images/calamity.jpg");
    const lucky = require("../../../images/lucky.jpg");
    const chickenwing = require("../../../images/chicken wing.jpg");
    const rex = require("../../../images/rex.jpeg");
    const ember = require("../../../images/ember.jpeg");
    const apache = require("../../../images/apache.jpeg");
    const tank = require("../../../images/tank.jpg");
    const bettywhite = require("../../../images/betty white.jpg");
    const noodle = require("../../../images/noodle.jpg");
    const daisy = require("../../../images/daisy.jpg");

    return(
        <div className="horses-div">
          <h1>Meet the Horses</h1>
          
            <div className="div-1 horse">
                <h3>Buddy</h3>
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

                <h3>Dexi</h3>
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
              </div>

            <div className="div-2 horse">

              <h3>Goliath</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="goliath-box"
                component="img"
                src={goliath}>
              </Box>

              <h3>Rusty</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="rusty-box"
                component="img"
                src={rusty}>
              </Box>
            </div>

            <div className="div-3 horse">

              <h3>Tommy</h3>
                <Box 
                sx={{ 
                    flexGrow: 1, 
                    height: 300,
                    width: 600,
                    mr: 1
                  }}
                  className="tommy-box"
                  component="img"
                  src={tommy}>
                </Box>

                <h3>Penny</h3>
                <Box 
                sx={{ 
                    flexGrow: 1, 
                    height: 300,
                    width: 600,
                    mr: 1
                  }}
                  className="penny-box"
                  component="img"
                  src={penny}>
                </Box>
            </div>

            <div className="div-4 horse">
              <h3>Harley</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="harley-box"
                component="img"
                src={harley}>
              </Box>

              <h3>Chicken Wing</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="chickenwing-box"
                component="img"
                src={chickenwing}>
              </Box>
            </div>

            <div className="div-5 horse">

              <h3>Rex</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="rex-box"
                component="img"
                src={rex}>
              </Box>

              <h3>Ember</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="ember-box"
                component="img"
                src={ember}>
              </Box>
            </div>

            <div className="div-6 horse">
              <h3>Lucky</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="lucky-box"
                component="img"
                src={lucky}>
              </Box>

              <h3>Daisy</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="daisy-box"
                component="img"
                src={daisy}>
              </Box>
            </div>

            <div className="div-7 horse">
              <h3>Apache</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="apache-box"
                component="img"
                src={apache}>
              </Box>

              <h3>Tank</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="tank-box"
                component="img"
                src={tank}>
              </Box>
            </div>

            <div className="div-8 horse">
            
            <h3>Betty White</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="bettywhite-box"
                component="img"
                src={bettywhite}>
              </Box>

              <h3>Noodle</h3>
              <Box 
              sx={{ 
                  flexGrow: 1, 
                  height: 300,
                  width: 600,
                  mr: 1
                }}
                className="noodle-box"
                component="img"
                src={noodle}>
              </Box>
            </div>

          </div>            
    )
}

export default Horses;