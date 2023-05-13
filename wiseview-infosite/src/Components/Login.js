// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import { Box, Button } from "@mui/material";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from '@mui/material/FormControlLabel';

// const Login = () =>{
//     const [bank,setBank] = React.useState('')

//     const handleChange = (event: SelectChangeEvent) => {
//       setBank(event.target.value);
//     };

//     const [select,setSelect] = React.useState('')

//     const handleSelect = (event: SelectChangeEvent) => {
//       setSelect(event.target.value);
//     };


//     const [language,setLanguage] = React.useState('')

//     const handleLanguage = (event: SelectChangeEvent) => {
//       setLanguage(event.target.value);
//     };

//     return(
//         <Box sx={{display:"flex",flexDirection:'column'}}>
    

//   <div>
     
//       <FormControl sx={{  ml:50, padding : 1, minWidth: 400 }}>
//         <Select
//           value={bank}
//           onChange={handleChange}
//           displayEmpty
//         >
//           <MenuItem value="">
//             <em>CCA Bank</em>
//           </MenuItem>
//           <MenuItem value = '1'>CCA Bank</MenuItem>
          
          
//         </Select>
        
//       </FormControl>
//     </div>


//     <div>
//    <FormControl sx={{ ml:50, minWidth: 993, padding : 1, }}>
//     <TextField
//      className="textfield1"
//      name="login"
//      label="Login"
//      type="text"
    
//     />
//     </FormControl>

//    </div>



//     <div>
     
//      <FormControl sx={{  ml:50, minWidth: 400, padding : 1 }}>
//        <Select
//          value={select}
//          onChange={handleSelect}
//          displayEmpty
//        >
//          <MenuItem value="">
//            <em></em>
//          </MenuItem>
//          <MenuItem value = '1'>CCA Bank</MenuItem>
         
         
//        </Select>
       
//      </FormControl>
//    </div>

//    <div>
     
//      <FormControl sx={{  ml:50, minWidth: 400, padding : 1, }}>
//        <Select
//          value={language}
//          onChange={handleLanguage}
//          displayEmpty
//        >
//          <MenuItem value="">
//            <em>French</em>
//          </MenuItem>
//          <MenuItem value = "2" >English</MenuItem>
         
//        </Select>
       
//      </FormControl>
//    </div>
//    <div>
//    <FormControl sx={{ ml:50, minWidth: 993, padding : 1, }}>
//     <TextField
//      className="textfield1"
//      name="fullName"
//      label= '🔒Mot de passe'
//      type="text"
    
//     />
//     </FormControl>
//     <Box mr = "20px" sx = {{display :'flex', flexDirection : 'row', marginRight: '-30px'}}>
//     <FormControl sx={{ ml:50, minWidth: 993, padding : 1, }}>
//     <FormControlLabel Label control={<Checkbox />} label="Se Rappeler de Moi" />
//     </FormControl>
//     <FormControl sx={{ ml:-100, minWidth: 183, padding : 1, }}>
//         <Button variant="outlined" color = "secondary"> Connexion</Button>
//     </FormControl>
//     </Box>


    



//    </div>
//    <u></u>
//    <br></br>
//    <FormControl sx={{  ml:50, minWidth: 400, padding : 1, }}>
//    <div>
//     Pas encore inscrit? <a href = "/">Contacter l'Administrateur</a>
//    </div>
//    </FormControl>
//    <FormControl sx={{  ml:50, minWidth: 400, padding : 1, }}>
//    <div>
//     <h8> 2022 @ IWOMI Technologies Ltd</h8>
//    </div>
//    </FormControl>


//    </Box>
//     )
// }
// export default Login