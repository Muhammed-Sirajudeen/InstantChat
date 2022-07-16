import './App.css';
import React, { useState,useEffect } from 'react';
import image_btn from './send.png';
import axios from 'axios';
//in the property of content make width responsive
    let chat;
    let chatarray=[];
    let url='http://192.168.138.71:5000/';
    
function App() {

    const [chats,Addchats]=useState([]);
    const [inputvalue,setValue]=useState(" ");
   
    const handleChange=event =>{
        chatarray.push(chat);
        axios.post(url,{'chat':chat}).then((response)=>{
            console.log("response is")
            var data=response.data
            console.log(data.chats);
            Addchats([...data.chats])
        })
        setValue("");
        
        
        
        console.log(chatarray);
        
        
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
             <p className="body-text">{value}</p>
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

  


    </div>
  );
}

export default App;
