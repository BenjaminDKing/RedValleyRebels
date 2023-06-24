import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "./faq.css";


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  
    function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
      <div className="accordian">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Do I need a reservation?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                Yes, activites including horseback riding require reservations made in advance. Please, reach out a week prior to make a reservation.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>What are the age requirements for horseback rides?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                Horseback rides are restricted for ages 8 and up.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Are we allowed to ride double?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                No, we do not allow riders to ride double for safety reasons.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Are helmets provided for horseback rides?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                Yes, helmets are provided upon request.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>What do I need to wear?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                Closed-toed shoes and pants are necessary for hoseback rides.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography>Are we allowed to run the horses?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                No, we do not run our horses.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography>What weather conditions do you ride in?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                We go out in all weather except for thunder and lightening.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <Typography>Can I bring water on the ride?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                Yes, you can bring water on the ride
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
            <Typography>Should I bring anything with me?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                Don't forget your sunscreen!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
          <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
            <Typography>Is there a weight limit to ride?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, depending on your height, there is a 275lb weight limit.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

function FAQ() {
    return(
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <CustomizedAccordions className="accordian" />
        </div>
    )
}

export default FAQ;