import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';

export default function UserList() {
    const [listOfUser,setlisOfUser] = useState([])
        useEffect(() => {
      
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setlisOfUser(res.data))
            .catch(err => alert(err))
          
        }, []);
        return (
        <div className="UserList" >
            { listOfUser.map(el=>
      
         <div className='userInfo'>
      <h4 >Name: {el.name} </h4>
      <p>Username : <span>{el.username}</span></p>
      <p>Email : <span>{el.email}</span></p>
     
      <p>Street: <span>{el.address.street}</span></p>
      <p>Suite : <span>{el.address.suite}</span></p>
      <p>City : <span>{el.address.city}</span></p>
      <p>Zipcode : <span>{el.address.zipcode }</span></p>
      
      <p>Lat : <span>{el.address.geo.lat}</span></p>
      <p>Lng : <span>{el.address.geo.lng}</span></p>
      
      <p>Phone : <span>{el.phone}</span></p>
      <p>Website : <span>{el.website}</span></p>
  
      <p>Name: <span>{el.company.name}</span></p>
      
      <p>CatchPhrase : <span>{el.company.catchPhrase}</span></p>
       <p>Bs : <span>{el.company.bs}</span></p> 
       
      </div>
            

            )}

        </div>
        )}