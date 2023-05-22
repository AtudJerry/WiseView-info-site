import react from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from '@mui/icons-material/Close';
import'./css/Topbar.css'

const Topbar = () => {

    const  handletoggle = () =>{
        const close = document.querySelector(".closed")
        close.classList.toggle("opened")
    }
   


    return (
        <div className='topbar'>
            <h1>W.V </h1> 
            
       <div className='menubar'> <IconButton onClick={handletoggle}>   <MenuOutlinedIcon sx = {{color :"white"}} className='bar'   fontSize='large'/> </IconButton> </div>
        <div className='closed'>
        
       <h2>MEMBERS</h2>
     <IconButton onClick={handletoggle } >  <CloseIcon className='close-icon' sx = {{color :"white"}}  fontSize='large'/></IconButton>  
    
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
export default Topbar