import React from "react";
import { useState } from 'react';
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const Contact = () => {
    const [formState,setFormState] = useState({first_name:'',last_name:'',email_address:'',subject:''});
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formState.email_address || !formState.subject){
            setErrorMessage('Fields email and subject are required')
            return
        }
        const myBody = JSON.stringify(formState)
       fetch('/api/send-email',{method: "POST",headers: {"Content-type": "Application/json"},body: myBody})
       .then(res => res.json())
       .then(data=> {
           console.log(data);
           setSuccessMessage(data.message);
       })
       .catch((err)=> console.log(err));
    }
  return (
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contactez-nous !
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
        <form onSubmit={(e)=> handleSubmit(e)} method="POST">
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact_name" label="Nom & prénom" onChange={e=>setFormState({...formState, contact_name: e.target.value})} />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact_email"
                    label="E-mail"
                    onChange={e=>setFormState({...formState, contact_email: e.target.value})}
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact_subject" label="Sujet" onChange={e=>setFormState({...formState, contact_subject: e.target.value})} />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact_message"
                    label="Message"
                    onChange={e=>setFormState({...formState, contact_message: e.target.value})}
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn color="primary" size="md">
              Send
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>Ynov Paris Campus, FRANCE</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>06 XX XX XX XX</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>guillaume.guiriaboye@ynov.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Contact;