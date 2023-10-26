import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{border:"1px solid #08b69c",fontSize:"50px", borderRadius:"50%", color:" #08b69c"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:"23px"}}>How does Bitstock work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bitstock works like a personal investment manager and adviser that lives on your smartphone, helping you invest in dollar denominated assets carefully selected to deliver safe, consistent dollar returns over time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{border:"1px solid #08b69c",fontSize:"50px", borderRadius:"50%", color:" #08b69c"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"23px"}}>What kind of investments do I get with Bitstock?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bitstock is the only platform that allows you to allocate capital across a portfolio of US stocks, US rental properties and global fixed income assets, all in dollars. We vet the assets for quality, long term potential and their capacity to deliver stable returns for you in all market conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{border:"1px solid #08b69c",fontSize:"50px", borderRadius:"50%", color:" #08b69c"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"23px"}}>
What is the minimum investment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can start investing from just $500 and there is no maximum. Bitstock can invest for you whether you’re just starting your journey or you have millions in capital to preserve.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{border:"1px solid #08b69c",fontSize:"50px", borderRadius:"50%", color:" #08b69c"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"23px"}}>When can I withdraw my investments?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          For real estate and fixed income plans, youcan withdraw on maturity, and the shortest duration is 3 months. For stocks plan, there is no lockup period so you can withdraw at any time. All withdrawal requests are processed within 24 hours.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{border:"1px solid #08b69c",fontSize:"50px", borderRadius:"50%", color:" #08b69c"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"23px"}}>How is Bitstock Regulated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bitstock is registered in Delaware, USA and in Nigeria. All our investments are held with regulated third parties and we also work with SEC licensed trustees to provide oversight for our users.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{border:"1px solid #08b69c",fontSize:"50px", borderRadius:"50%", color:" #08b69c"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"23px"}}>Can I trade on Bitstock?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes. Bitstock is a digital wealth manager, we provide managed portfolios selected and managed through our app. Users can trade and pick securities by themselves.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}