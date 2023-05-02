import React, { useState } from "react";
import Box from '@mui/material/Box';

function Horses() {
    const buddy = require("../../../images/Buddy.jpeg");
    const dexi = require("../../../images/Dexi.jpeg");
    const goliath = require("../../../images/Goliath.jpeg");
    const rusty = require("../../../images/Rusty.jpeg");
    const tommy = require("../../../images/Tommy.jpeg");

    return(
        <div>Meet the Horses
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

            Buddy, Chicken Wing, Penny, Goliath, Rex, Harley, Cronk, Mia, Dexi, Tommy, Ember, Lucky,
            Daisy, Apache, Rusty, Hope, Tank, Betty White, Noodle,
        </div>
    )
}

export default Horses;