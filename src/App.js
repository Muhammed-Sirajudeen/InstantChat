
import './App.css';
import React, { useState,useEffect } from 'react';
import image_btn from './send.png';
import axios from 'axios';

import socketIOClient from "socket.io-client";
const ENDPOINT = 'http://[2409:4073:31b:772e:5484:9289:c624:383a]:2000';


//in the property of content make width responsive
    let chat;

    let chatarray=[];
    let url='http://192.168.138.71:5000/';
    let uniqueNumber;
    
function App() {

    const [chats,Addchats]=useState([]);
    const [inputvalue,setValue]=useState(" ");
   
    const handleChange=event =>{
         const socket = socketIOClient(ENDPOINT);
         socket.emit("message",{id:uniqueNumber,"chats":chat});
         socket.on("message",(data)=>{
            Addchats([...data.chats]);
            
         })

        chatarray.push(chat);
        chat=' ';

        
        setValue("");

        
        
        
        console.log(chatarray);
        
        
    }
    const uniqueid=event=>{
        uniqueNumber=event.target.value;
        console.log(uniqueNumber)

    }



    const change=event=>{
        chat=event.target.value;
        setValue(chat);
    }
    let imgsrc='/home/vava/Programming/Javascript/Nodejs/react/hinaconvention/public/send.png'
  return (
    <div className="App">



    <div className="heading">
    <p> INSTANT CHAT</p>
    </div>

    <div className="container">

    <div className="content-container">
    
    <div  className="content-body">

    <div>
    {chats.map((value)=>{
        return(
             <p className={value.id}>{value.chats}</p>
            )
    })}
   
    </div>



    </div>
    
    </div>
    
    </div>
    <div className="send-container">

   

    <input type="text" placeholder="enter your message" value={inputvalue} className="inputbox" onChange={change}
    onClick={handleChange}/>
     

    </div>
    <div className="username-container">

    <input type="text" placeholder="enter name here" className="username"
        onChange={uniqueid}/>
        </div>
  


    </div>
  );
}

export default App;