import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from "react-router-dom";
import "./css/joinus.css"

const JoinUs = () =>{

    return(

        <div className="joinus">
<Link to="/">  <KeyboardReturnIcon className="return-button" fontSize="large"/>
</Link>
          
            <div className="content">

                Join us on GitHub  <a href="https://github.com/Wise-view">here</a>, or contact one of our members below👇<br></br> 
                <Accordion className='accordion-text'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className='accordion-text' variant="h5">
            Steve Yonkeu <i>details</i>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accordion-text' textAlign="left">
           Student at the University of Bamenda. Studying Computer Engineering at National Higher polytecnic institute.<br></br>
           Github link below👇<br></br> <a href="https://github.com/yokwejuste"> https://github.com/yokwejuste </a>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className='accordion-text' variant="h5">
            Atud Jerry <i>details</i>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accordion-text' textAlign="left">
           Student at the University of Bamenda. Studying Computer Engineering at National Higher polytecnic institute. React / JavaScript developer<br></br>
           Github link below👇<br></br> <a href="https://github.com/AtudJerry"> https://github.com/AtudJerry </a><br></br>
           Portfolio👇<br></br>  <a href="https://github.com/AtudJerry"> https://github.com/AtudJerry </a>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className='accordion-text' variant="h5">
          Ndongmo Christian <i>details</i>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accordion-text' textAlign="left">
           Student at the University of Bamenda. Studying Computer Engineering at National Higher polytecnic institute.<br></br>
           Github link below👇<br></br> <a href="https://github.com/Akashiutchiha"> https://github.com/Akashiutchiha </a>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className='accordion-text' variant="h5">
          Fotsing Boris <i>details</i>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accordion-text' textAlign="left">
           Student at the University of Bamenda. Studying Computer Engineering at National Higher polytecnic institute.<br></br>
           Github link below👇<br></br> <a href="https://github.com/Fotsingboris"> https://github.com/Fotsingboris </a>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className='accordion-text' variant="h5">
          Manka Velda <i>details</i>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='accordion-text' textAlign="left">
          Aspiring computer engineer. Student at the University of Bamenda. Studying Computer Engineering at National Higher polytecnic institute.<br></br>
           Github link below👇<br></br> <a href="https://github.com/Mankavelda"> https://github.com/Mankavelda </a>
          </Typography>
        </AccordionDetails>
        </Accordion>




            </div>








        </div>
    )
}
export default JoinUs