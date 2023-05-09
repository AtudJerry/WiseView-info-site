import react from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from '@mui/icons-material/Close';

const Topbar = () => {

    const  handletoggle = () =>{
        const cl = document.querySelector(".closed")
        cl.classList.toggle("opened")
    }
   


    return (
        <div className='topbar'>
       <div className='menubar'>  <IconButton onClick={handletoggle}>   <MenuOutlinedIcon sx = {{color :"white"}} className='bar'   fontSize='large'/> </IconButton> </div>
       <div className='closed'>
        
       <h2>MEMBERS</h2>
     <IconButton onClick={handletoggle } >  <CloseIcon className='close-icon' sx = {{color :"white"}} /></IconButton>  
    
      <Accordion className='accordion-text'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className='accordion-text' variant="h5">
            Steve Yonkeu details
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
            Atud Jerry details
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
          Ndongmo Christian details
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
          Fotsing Boris details
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
          Manka Velda details
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
export default Topbar