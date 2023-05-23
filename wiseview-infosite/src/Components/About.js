import react from "react"
import "./css/about.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import { Card } from "@mui/material";

const About = () =>{

    return(
        <div className="about" >

          
    
            <br></br> 
                <h2>ABOUT US</h2>

        
<Card className="card" sx={{width:'80%'}}>
     We are a group of students interested in computer technologies and programs .
             We welcome everyone, including those with diverse backgrounds and different majors. 
             Learn about a range of technical topics and gain new skills through hands-on workshops, events, and project-building activities online and in-person.
             Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn. 
    
</Card>
    <div className='link-icons' >

<a  href="https://github.com/Wise-view"><GitHubIcon fontSize="large" /></a> &nbsp; <a href="https://github.com/Wise-view"> <GroupWorkIcon  fontSize="large"/> </a>

</div>
        </div>
    )
}
export default About