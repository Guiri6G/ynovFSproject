import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";

const About = () => {
  return (
    <MDBCard className="my-5 px-1 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Notre équipe
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Lorem Ipsum
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Manager</h6>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                floating
                size="sm"
                className="mx-1 mb-0 btn-dribbble"
              >
                <MDBIcon fab icon="dribbble" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">Lorem Ipsum</h4>
              <h6 className="text-uppercase grey-text mb-3">
                Supplier
              </h6>            
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Guillaume Ipsum
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Developper</h6>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default About;