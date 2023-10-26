import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionSec() {
  return (
    <div>
      <Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{border:"1px solid #08b69c",fontSize:"50px", borderRadius:"50%", color:" #08b69c"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:"23px"}}>How much have I made?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This amount is shown to you when you visit the wallet page on the mobile app.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{border:"1px solid #08b69c",fontSize:"50px", borderRadius:"50%", color:" #08b69c"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"23px"}}>Can I withdraw this money?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you can withdraw from your wallet at any time, but the interest is automatically paid into your wallet at the start of a new month. After that, you can then proceed to withdraw.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{border:"1px solid #08b69c",fontSize:"50px", borderRadius:"50%", color:" #08b69c"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"23px"}}>What happens when I withdraw?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can withdraw as many times as possible, there are no penalties.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{border:"1px solid #08b69c",fontSize:"50px", borderRadius:"50%", color:" #08b69c"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"23px"}}>How do I get interest on my wallet balance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Leaving money in your Bitstock wallet automatically earns you interest.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}