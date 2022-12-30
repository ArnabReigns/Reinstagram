import {useState,useEffect,useContext} from 'react'
import  {useParams} from 'react-router-dom'
import api from '../API';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';
import '../css/Profile.css';
import ProfilePictureIcon from '@mui/icons-material/AccountCircleOutlined'
import { Button } from '@mui/material';  

const Profile = () => {

    const param = useParams()
    const user = useContext(UserContext);
    
    const [profileUser,SetProfileUser] = useState({});

    useEffect(()=>{
      if(user.state?.username == param.username) {
        SetProfileUser(user.state);
        
      }
      else 
      {
        api.get(`/account/profile/${param.username}`).then(res=> {
          console.log(res.data);
          console.log(user)
          SetProfileUser(res.data)});
        
      };

      console.log("from Profile");

      
    },[])

    
    

  return (
    <div className='main'>
        <Navbar/>
        <div className="hero container">
            <ProfilePictureIcon className="ProfileIcon"/>
            <div className="header">
                <h2>@{profileUser?.username}</h2>
                <h4>{profileUser?.name}</h4>
                <p>{profileUser?.bio}</p>
                {  (<Button variant='outlined'>Follow</Button>)}
            </div>

        </div>

    </div>
  )
}

export default Profile