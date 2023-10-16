

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validate({ name, email, password }));

    try {
      const response = await axios.post('http://localhost:8082/api/v1/auth/register', {
        name: name,
        email: email,
        password: password
      });

      if (response.status === 200) {
        setName("");
        setEmail('');
        setPassword('');
        setIsSubmit(true); // Set the isSubmit state to true on successful form submission
      }

    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Name is required';
      setIsSubmit(false);
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }

    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  // Redirect to the signup page if isSubmit is true
  if (isSubmit) {
    navigate('/Signup');
  }

  return (
    // The rest of your JSX code for the Login component...
    <div className="body3">
      <h1 className="heading">eReadX</h1>
      <div className="form-container">
      <div className="form-content-left">
        <img src="https://c0.wallpaperflare.com/preview/313/765/126/book-return-read-books.jpg" alt="left" className="form-img"/>
      </div>
      
    <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
        <h1 >Admin Signup</h1>
            <div className="form-inputs">
                <label htmlFor="name" className="form-label">
                    Admin Name
                </label>
                <input 
                id="name"
                type="text" 
                name="name" 
                className="form-input" 
                placeholder="Enter your name"
                value={name}
                onChange={handleName}
                />
                 <p>{errors.name}</p>
            </div>
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
                <p>{errors.email}</p>
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
                <p>{errors.password}</p>
            </div>
            <br></br><br></br>
            <button className="form-input-btn">Signup</button><br></br><br></br>
            <span className="form-input-login">
                Already have an account? Login <a href="Adminlogin">here</a>
            </span>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
