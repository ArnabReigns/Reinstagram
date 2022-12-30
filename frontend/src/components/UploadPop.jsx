import {useRef} from 'react';
import {useNavigate} from 'react-router-dom'
import '../css/UploadForm.css';
import { ButtonGroup, Button, IconButton, useForkRef} from "@mui/material";
import api from '../API';

const UploadPop = (props) => {
  
    const captionRef = useRef();
    const navigate = useNavigate()

    function uplaodPost(e){
      e.preventDefault();
      props.setUploading(false);
      
      
      console.log("post posted")

      let caption = captionRef.current.value;
      let username = props.user.username;

      api.post('post',{caption:caption,username:username})
      .then(res=> {
        console.log(res.data)
      }
        )
    }



    return (
      <div className='backDark'>
          <form className='postForm' onSubmit={uplaodPost}>
              <h3 className='uploadTitle'>What's on your mind?</h3>
              <textarea ref={captionRef} required type="text" name="caption" id="caption" />
              <Button className='uploadBtn' variant='outlined' type='submit'>Post</Button>
              <Button sx={{marginTop:"5px"}} variant='outlined' color="error" onClick={()=>props.setUploading(false)}>Discard</Button>
          </form>
      </div>
    )
}

export default UploadPop