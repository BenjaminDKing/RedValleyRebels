import React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { horses } from './horses';

function Example(props)
{
    // var items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!"
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!"
    //     }
    // ]

    return (
        <Carousel>
            {/* {
                horses.map( (item, i) => <Item key={i} item={item} /> )
            } */}
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            {/* <p>{props.item.img}</p> */}
            <Box 
                sx={{ 
                    flexGrow: 1, 
                    height: 500,
                    width: 800,
                    mr: 1
                  }}
                  className="horse-box"
                  component="img"
                  src={props.item.img}>
                </Box>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Example;