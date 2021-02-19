import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState(); //sets internal state and initial value

useEffect (() => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => { // retrieves data 
    const responsePosts = res.data; 
    setPosts(responsePosts); //sets the value of posts
  });
},[]);

return (
  <div>
    <h1> Posts Data</h1>
  {posts &&
    posts.map((Posts) => {   //maps the contents of the array
      const {id, title} = Posts; //pulls id and title data from database 

      // returns title and id data from database
      return(
        <div key={id}>
        <h5>{title}</h5>    
        <h6> Assigned to user: {id}</h6>
        </div>
      )
    })}
  </div>
);
};

export default Posts;