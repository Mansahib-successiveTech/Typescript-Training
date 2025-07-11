"use client";

import axios from "axios";
import { FormEvent, useState } from "react";

interface resultInterface{
  name:string;
  title:string;
  id:number
}

const SimplePost = () => {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");

   

  const onSubmitHandler = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const result :resultInterface  = {
      name: post,
      title: title,
      id:Math.floor(Math.random())*1000+1
    };

     try{
        await axios.post("https://jsonplaceholder.typicode.com/posts",result)
        alert("submitted")

     }catch(err){
        console.log("error");
        alert("some error occur")
     }

  };

  return (
    <>
      <p>user form</p>
      <form onSubmit={onSubmitHandler}>
        <label>post</label>
        <input
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <label>title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default SimplePost;
