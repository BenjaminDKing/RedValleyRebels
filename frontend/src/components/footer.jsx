import React, { useState } from "react";
import { Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
const instagram = require("../images/instagram_icon.png");
const tripadvisor = require("../images/tripadvisor_icon.png");

const logo = require("../images/rvr_logo1.png");

function Footer() {

    return(
        <div className="footer">
            <div className="social-links-div">
                <a href="https://www.facebook.com/RedValleyRebels/">
                    <FacebookIcon 
                        sx={{
                            display: { 
                                color: '#4267B2',

                            },
                            height: 40,
                            width: 40,
                        }}
                    />
                </a>
                <a href="https://www.instagram.com/redvalleyrebels/?hl=en">
                    <Box
                        className="instagram"
                        sx={{
                            height: 40,
                            width: 40,
                        }}
                        component="img"
                        src={instagram}
                    >
                    </Box>
                </a>
                <a href="https://www.tripadvisor.com/Attraction_Review-g33416-d23663133-Reviews-Red_Valley_Rebels-Fairplay_Colorado.html">
                <Box
                    sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'none', md: 'flex' },
                        height: 40,
                        width: 40,
                        mr: 1
                    }}
                    component="img"
                    src={tripadvisor}>
                </Box></a>
            </div>
            <div className="contact-info">
                <h2>Red Valley Rebels</h2>
                <Box 
                    sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'none', md: 'flex' },
                        height: 100,
                        width: 160,
                        mr: 1
                    }}
                    component="img"
                    src={logo}>
                </Box>
                <h4 className="contact-info-title">Contact Us</h4>
                <ul>
                    <li>28195 US Highway 285, Fairplay, CO 80550</li>
                    <li>970-393-7848</li>
                    <li>redvalleyrebels@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;