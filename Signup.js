
// import React, { useState } from "react";
// import "../assets/Signup.css";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { login } from '../redux/userSlice';

// const Login = (props) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null); 
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null); 

//     try {
//       const response = await axios.post('http://localhost:8082/api/v1/auth/authenticate', {
//         email: email,
//         password: password
//       });

//       if (response.status === 200) {
    
//         dispatch(login({ email: email }));
//         navigate('/Home'); 
//       }

//     } catch (error) {
    
//       if (error.response && error.response.status === 403) {
//         setError('Invalid email or password'); 
//       } else {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className="body4">
//       <h1 className="heading">eReadX</h1>
//       <div className="form-container">
//         <div className="form-content-left">
//           <img
//             src="https://c0.wallpaperflare.com/preview/313/765/126/book-return-read-books.jpg"
//             alt="left"
//             className="form-img"
//           />
//         </div>

//         <div className="form-content-right">
//           <form className="form" onSubmit={handleSubmit}>
//             <h1>Sign in</h1>

//             <div className="form-inputs">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 className="form-input"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={handleEmail}
//               />
//             </div>
//             <div className="form-inputs">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 name="password"
//                 className="form-input"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={handlePassword}
//               />
//             </div>

//             <button className="form-input-btn">Login</button><br></br>
//             <div className="error-color">
//               {error && <span>{error}</span>}
//             </div>
//             <br></br>
//             <br></br>
//             <span className="form-input-login">
//               Don't have an account? Signup <a href="Login">here</a>
//             </span>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import "../assets/Signup.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from '../redux/userSlice';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8082/api/v1/auth/authenticate', {
        email: email,
        password: password
      });

      if (response.status === 200) {
        dispatch(login({ email: email }));
        navigate('/Home'); 
      }

    } catch (error) {
    
      if (error.response && error.response.status === 403) {
        setError('Invalid email or password'); 
      } else {
        console.error(error);
      }
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
            <h1>Sign in</h1>

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
            </div>

            <button className="form-input-btn">Login</button><br></br>
            <div className="error-color">
              {error && <span>{error}</span>}
            </div>
            <br></br>
            <br></br>
            <span className="form-input-login">
              Don't have an account? Signup <a href="Login">here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
