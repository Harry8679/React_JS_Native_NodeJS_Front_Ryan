import React, { useState, useContext } from 'react';
import Input from '../components/forms/Input';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { AuthContext } from '../context/auth';
import { saveInLocalStorage } from '../helpers/auth.helper';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/forms/Button';

const Register = () => {
  // Context
  const [auth, setAuth] = useContext(AuthContext);
  // console.log('REACT_APP_API', process.env.REACT_APP_API);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // console.log('context => ', auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (password !== confirm) {
        toast.error('Passwords do not match');
        setLoading(false);
        return;
      }
      // setLoading(true);
      // console.log(`Register user ${name}, ${email}, ${password}}`);
      const { data } = await axios.post(`${process.env.REACT_APP_API}/signup`, { name, email, password});
      // console.log('data', data);
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
        return;
      } else {
        // Context
        setAuth(data);
        // save in the local storage
        // localStorage.setItem('auth', JSON.stringify(data));
        saveInLocalStorage('auth', data);
        toast.success('Successfully registered');
        setLoading(false);
        navigate('/');
      }
    } catch(err) {
      console.log(err);
      setLoading(false);
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

                    {/* <button type="submit" className="btn btn-primary" disabled={!name || !email || email.length < 6 || password.length < 6}>Submit</button> */}
                    <Button name={name} email={email} password={password} loading={loading} />
                </form>
                {/* <pre>{JSON.stringify({email, password}, null, 4)}</pre> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
