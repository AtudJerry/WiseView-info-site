import react from "react"
import './css/Image.css'
import { Button, IconButton } from "@mui/material" 
import { Link } from "react-router-dom"
import About from "./About"

const Image = () => {
    return(
      <div>
        <div className="intro-page">
          
      
        <Link to= "/join-us">   <Button  color="secondary"  variant="contained" size="large" className="button">Join Us</Button> </Link>
    
      <h3>A small community to exercise your<br></br> coding skills</h3>


            


        </div>
        <About/>
        </div>
    )

}
export default Image