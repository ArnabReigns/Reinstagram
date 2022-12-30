import { height } from '@mui/system'
import React from 'react'
import styled from 'styled-components'


const PostCard = styled.div`

    background-color: white;
    box-shadow: 0 0 3px gray;
    margin: 1rem;
    padding: 2rem;
    border-radius: 10px;
  
`



const PostView = (props) => {

  var d = props.post.createdAt
  var date = new Date(d)
  var today = new Date() 
  var yesterday = new Date()
  yesterday.setDate(today.getDate()-1)

  var time=`${date.getHours() || 12}:${date.getMinutes().toString().padStart(2,'0')} ${date.getHours()>=12?'pm':'am'}`
  var datef = date.toLocaleDateString()
  
  if(date.toDateString()==today.toDateString()) datef = "Today"
  if(date.toDateString()==yesterday.toDateString()) datef = "yesterday"


  var user = props.user.username;
  var author = props.post.author.username;
  var matched = (user==author);


var code = `
function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
    }));
  }
}

function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
    return value;
  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = (
      useInlineStyles
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}
  
`


  return (
    <PostCard className='' style={{minHeight:"12 rem",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <h5 style={{whiteSpace:"pre-wrap",paddingBottom:"2rem", fontFamily:"Titillium Web"}}>{props.post.caption}</h5>
        
        <span style={{backgroundColor:" #eee6e6",display:"block",padding:'10px 15px',borderRadius:"10px",fontFamily:"Roboto"}}> <span style={{fontWeight:"600",color: matched ? "green" : "black"}}>@{props.post.author?.username}</span> . {datef} {time}</span>

    
    </PostCard>
  )
}

export default PostView