import {useState,useEffect,useContext} from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonGroup, Button, IconButton} from "@mui/material";
import NewPostIcon from '@mui/icons-material/AddBoxOutlined';
import UploadPop from "./UploadPop";
import api from "../API";


const Search = styled.input`
    
    border: none;
    background-color:#EFEFEF;
    border-radius:5px;
    outline: none;
    margin-right:3rem;
    padding: 0.2rem 1rem;
    height: 2.3rem;
    flex:1;
    font-family:'Roboto';
    margin-left:2rem;
    
    &::placeholder{
        color:#949694;
        font-weight:200;
    }
    
`





const Navbar = (props) => {

  const [uploading,setUploading] = useState(false)
  const user = useContext(UserContext);


  function logout()
  {
    api.get("account/logout");
    user.setState(null);
  }


  return (
    <div style={{width:"100%"}}>
     {uploading && <UploadPop user={user.state} setUploading={setUploading}/>}

    <div className="d-flex px-4 py-2 align-items-center" style={{height:"4rem" ,position:"fixed", width: "100%", backgroundColor:"white",borderBottom:"1px solid #DBDBDB",top:0,left:0}}>
      <Link to={"/"} style={{textDecoration:"none",color:"inherit "}}><h3 style={{ flex: 1,fontFamily:"Ubuntu"}}>Rinstagram</h3></Link>

      <Search placeholder="Search"/>

      <IconButton size="large" sx={{marginX:"1rem"}} onClick={()=>setUploading(true)} >
        <NewPostIcon sx={{color:"#434343"}}/>
      </IconButton>
      
      <ButtonGroup variant="outlined">
      <Button style={{padding:0}}><Link  to ={`/profile/${user.state?.username}`} style={{color:"inherit ",textDecoration:'none',width:"100%",height:"100%",padding:"5px 15px",font:"inherit"}} >{user.state?.username}</Link></Button>
        <Button color="error" onClick={logout}>
          Logout
        </Button>
      </ButtonGroup>
    </div>
    </div>
  );
};

export default Navbar;
