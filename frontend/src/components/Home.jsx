import {useState,useEffect, useContext} from 'react'
import Navbar from './Navbar';
import api from '../API';
import PostView from './PostView';
import { UserContext } from '../context/UserContext';

const Home = () => {

  const [posts,SetPosts] = useState([])
  const user = useContext(UserContext)


  useEffect(()=>{
    api.get("post/get").then(res=>{
      SetPosts(res.data)
    })
  })


  
  return (
    <div className='container-fluid vh-100' style={{position:"relative",paddingTop:"5rem",width:"100%"}}>
      <Navbar/>
      
      <div className='container mt-5' style={{width:'50rem'}}>
          
          {posts.map( (post,index)=> (<PostView user={user.state} key={index} post={post}/>))}

      </div>

    </div>

  )
}

export default Home