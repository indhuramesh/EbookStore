
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate({ name, email, password });

    if (Object.keys(validationErrors).length === 0) {
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
          navigate('/Signup');
        }
      } catch (error) {
        alert(error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  return (
    <div className="body3">
      <h1 className="heading">eReadX</h1>
      <div className="form-container">
        <div className="form-content-left">
          <img src="https://c0.wallpaperflare.com/preview/313/765/126/book-return-read-books.jpg" alt="left" className="form-img" />
        </div>

        <div className="form-content-right">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Get Started to develop your Reading Skill! Create your account</h1>
            <div className="form-inputs">
              <label htmlFor="name" className="form-label">
                Username
              </label>
              <input id="name" type="text" name="name" className="form-input" placeholder="Enter your name" value={name}
                onChange={handleName}
              />
              <p>{errors.name}</p>
            </div>
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input id="email" type="email" name="email" className="form-input" placeholder="Enter your email" value={email}
                onChange={handleEmail}
              />
              <p>{errors.email}</p>
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input id="password" type="password" name="password" className="form-input" placeholder="Enter your password"
                value={password}
                onChange={handlePassword}
              />
              <p>{errors.password}</p>
            </div>
            <br /><br />
            <button className="form-input-btn">Signup</button><br /><br />
            <span className="form-input-login">
              Already have an account? Login <a href="Signup">here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
