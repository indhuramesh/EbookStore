import React from 'react'
import { BrowserRouter ,  Route, Routes, useNavigate } from "react-router-dom";
import Routing from './pages/Routing.js'
import Logo from './pages/Logo.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import Home from './pages/Home.js'
import Library from './pages/Library'
import AppContext from "./utils/AppContext.js"
function App()
{
  return(
    <div>
      <AppContext>
      <Routing></Routing>
      </AppContext>
      </div>
  )
}
export default App;