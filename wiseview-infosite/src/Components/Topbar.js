import react from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Topbar = () => {


    return (
        <div className='topbar'>
       <div className='menubar'>  <IconButton >   <MenuOutlinedIcon color ="secondary" fontSize='large'/> </IconButton> </div>
       <div>
        
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        <h2>MEMBERS</h2>
        <ul type = "none">
            <li>Steve Yonkeu</li>
            <li>Atud Jerry</li>
            <li>Ndongmo Christian</li>
            <li>Fotsingboris</li>
            <li>Manka Velda</li>




        </ul>




       </div>


        </div>
    )

    
}
export default Topbar