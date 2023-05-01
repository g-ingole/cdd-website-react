import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  // MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/home')
    }
  })
  const collectData = async () => {
    console.log(name, email, password, mobile)
    let result = await fetch('https://ccd-backend.vercel.app/api/user/user', {
      method: 'Post',
      body: JSON.stringify({ name, email, password, mobile }),
      headers: {
        'content-Type': 'application/json'
      },
    });
    result = await result.json()
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    // localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate('/home')
    }
  }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 tc">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput placeholder='Enter Name' id='form1' type='name' className='w-100' value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput placeholder='Enter Email' id='form2' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="mobile me-3" size='lg' />
                <MDBInput placeholder='Mobile No' id='form3' type='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput placeholder='Enter Password' id='form3' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>


              {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <Button className='mb-4' size='lg' type='submit' onClick={collectData}>Sign Up</Button>

            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;