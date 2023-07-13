import React from 'react';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import './login.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/home')
    }
  })

  const handlelogin = async () => {
    console.log("email,password", email, password)
    let result = await fetch('https://ccd-backend-five.vercel.app/api/user/Login', {
      method: 'Post',
      body: JSON.stringify({ email, password }),
      headers: {
        'content-Type': 'application/json'
      }
    });
    result = await result.json()
    // console.log(result);
    if (result.success) {
      // localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("user", JSON.stringify(result.auth));
      navigate('/home')
    } else {
      alert("pls enter correct details")

    }
  }

  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5 mt5' style={{ marginLeft: "130px" }}>
            <MDBIcon style={{ color: '#709085' }} />
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3 tc" style={{ letterSpacing: '1px' }}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(event) => setEmail(event.target.value)} />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(event) => setPassword(event.target.value)} />

            <Button className="mb-4 px-5 mx-5 w-100 mt1" color='info' size='lg' type='submit' onClick={handlelogin}>Login</Button>

            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="/" className="link-info">Register here</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0 '>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt=" " className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;



