import React, { useState } from 'react';
import Input from '../components/forms/Input';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
  // console.log('REACT_APP_API', process.env.REACT_APP_API);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirm) {
        toast.error('Passwords do not match');
        return;
      }
      // console.log(`Register user ${name}, ${email}, ${password}}`);
      console.log('data 1');
      const { data } = await axios.post(`${process.env.REACT_APP_API}/signup`, { name, email, password});
      console.log('data', data);
      console.log('data 2');
      if (data.error) {
        toast.error(data.error);
        return;
      } else {
        toast.success('Successfully registered');
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
                <h1 className='fw-bold mb-3'>Register</h1>

                <form onSubmit={handleSubmit}>
                    <Input value={name} setValue={setName} label='Full name' type='text' />
                    <Input value={email} setValue={setEmail} label='Email address' type='email' />
                    <Input value={password} setValue={setPassword} label='Password' type='password' />
                    <Input value={confirm} setValue={setConfirm} label='Password confirm' type='password' />

                    <button type="submit" className="btn btn-primary" disabled={!name || !email || email.length < 6 || password.length < 6}>Submit</button>
                </form>
                {/* <pre>{JSON.stringify({email, password}, null, 4)}</pre> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
