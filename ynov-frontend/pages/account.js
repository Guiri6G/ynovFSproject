import React, {useState, useEffect} from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

function Account() {
  const token =  localStorage.getItem('token');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ user,setUser ] = useState({});
  if(token){
    const jwtDecoded = jwt.verify(token,'supersecret');
    const adminId = jwtDecoded.id;
    const callOptionConfig = {"Content-type": "Application/json",
    headers: {
      'authorization': token
    }}
    const getUser = async () => {
      console.log("get user connected");
      await axios.get(`http://localhost:3020/api/v1/user/${adminId}`,callOptionConfig)
      .then(data=>{
        setUser(data.data);
      })
      .catch(err=>{
        console.error(err);
        setErrorMessage(err.message);
      });
    };
    useEffect(() => {
        console.log("try get user connected");
        getUser();
    }, [])

  }
    return (
        <div>
          <h2>Votre compte : </h2>
       <p> name : {user.firstName} {user.lastName}</p>
       <p> email : {user.email} </p>

      <p>  age : {user.age} </p>
      </div>
    )
  }
  
  export default Account