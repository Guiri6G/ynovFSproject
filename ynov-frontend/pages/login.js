import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBTypography } from 'mdbreact';
import { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';


function Login() {
    const [formState,setFormState] = useState({email:'',password:''});
    const [errorMessage,setErrorMessage]=useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formState.email || !formState.password){
            setErrorMessage('Fields email and password are required');
            return
        }
        const myBody = JSON.stringify(formState);
        const callOption = {"Content-type": "Application/json"}
        fetch("http://localhost:3020/api/v1/login",{method: "POST",headers:callOption ,body: myBody})
        .then(res=>res.json())
        .then(data => {
            if(!data.auth){
                setErrorMessage(data.message);
                return
            }
            else {
                let token = data.token;
                localStorage.setItem('token',token);
                router.push("/account");
            }
        })
        .catch(err=>{
            console.error(err);
            setErrorMessage(err.message);
        });
    };
    return(
        <MDBContainer>
            <MDBRow>
            <MDBCol md="12">
                <form onSubmit={(e)=> handleSubmit(e)} method="POST">
                <MDBTypography tag='h1' >Sign IN </MDBTypography>
                    <div className="grey-text">
                        <MDBInput label="e-mail" icon="envelope" group type="email" validate error="wrong" autocomplete="email" onChange={e=>setFormState({...formState, email: e.target.value})} success="right" />
                        <MDBInput label="password" icon="lock" group type="password" validate  autocomplete="current-password" onChange={e=>setFormState({...formState, password: e.target.value})} />
                    </div>
                    <div>
                        <span class="text-red-500">{errorMessage}</span>
                    </div>
                    <div class="flex">
                    <div className="text-center">
                        <MDBBtn>Login</MDBBtn>
                    </div> <br /><br /><br />
                    <div className="text-center">
                            <Link href="/register">
                            <MDBBtn color="indigo">Sign up</MDBBtn>
                            </Link>                 
                        </div>
                    </div>
                </form>
                </MDBCol>
                </MDBRow>
            </MDBContainer>







    );
  };
  
  export default Login;