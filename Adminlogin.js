
import React, { useState } from "react";
import "../assets/Signup.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from '../redux/userSlice';
import Addbook from './Addbook';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const validate = (values) => {
    const errors = {};

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate({ email, password });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmit(false);
      return;
    }
  
    if (email === 'praveen@gmail.com') {
      try {
        const response = await axios.post('http://localhost:8082/api/v1/auth/authenticate', {
          email: email,
          password: password
        });
  
        if (response.status === 200) {
          dispatch(login({ email: email }));
          setEmail('');
          setPassword('');
          setIsSubmit(true);
  
    // Check if navigation is working as expected
    console.log("Navigating to Addbook");
    navigate('/Addbook'); // Ensure '/Addbook' matches your route setup
  }
      } catch (error) {
        setErrors({ loginError: 'Please enter valid credentials' });
        setIsSubmit(false);
      }
    } else {
      setErrors({ loginError: 'Only respective admin can access this page.' });
      setIsSubmit(false);
    }
  };
  
  

  return (
    <div className="body4">
      <h1 className="heading">eReadX</h1>
      <div className="form-container">
        <div className="form-content-left">
          <img
            src="https://c0.wallpaperflare.com/preview/313/765/126/book-return-read-books.jpg"
            alt="left"
            className="form-img"
          />
        </div>

        <div className="form-content-right">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Admin Login</h1>

            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmail}
              />
              <div className="emailcolor">
                {errors.email}
              </div>
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={handlePassword}
              />
              <div className="emailcolor">
                {errors.password}
              </div>
            </div>

            <button className="form-input-btn">Login</button>
            <div className="emailcolor">
              {errors.loginError && <span>{errors.loginError}</span>}
            </div>
            <br></br>
            <br></br>
            <span className="form-input-login">
              Don't have an account? Signup <a href="Adminsignup">here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
