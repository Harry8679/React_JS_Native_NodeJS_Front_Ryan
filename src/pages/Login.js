import React, { useState, useContext } from 'react';
import Input from '../components/forms/Input';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { AuthContext } from '../context/auth';
import { saveInLocalStorage } from '../helpers/auth.helper';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/forms/Button';

const Login = () => {
  // Context
  const [auth, setAuth] = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/signin`, { email, password});
      if (data.error) {
        toast.error(data.error);
        return;
      } else {
        // Context
        setAuth(data);
        // save in the local storage
        saveInLocalStorage('auth', data);
        toast.success('Successfully logged');
        navigate('/');
      }
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ marginTop: '-100px' }}>
      <Toaster />
      <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1 className='fw-bold mb-3'>Login</h1>

                <form onSubmit={handleSubmit}>
                    <Input value={email} setValue={setEmail} label='Email address' type='email' />
                    <Input value={password} setValue={setPassword} label='Password' type='password' />

                    {/* <button type="submit" className="btn btn-primary" disabled={!email || email.length < 6 || password.length < 6}>Submit</button> */}
                    <Button email={email} password={password} />
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
