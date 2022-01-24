

import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
//import Forgot from './pages/forget-email/Forgot';
import Forgot from './pages/forget-email/Forgot';
import ResetPass from './pages/reset_pass/ResetPass';
import Dashboard from './pages/dashboard/Dashboard';

//router
import React, { useState } from 'react';
function App() {

  //router
  const [user, setUser] = useState(false)

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  }

  return (
       <BrowserRouter>
          <Switch>

         <Route path='/' component={Signup} exact/>
         <Route path='/login' component={Login} />
         <Route path='/forget-email' component={Forgot} />
         <Route path='/resetpassword' component={ResetPass} />
         <Route path='/dashboard' component={Dashboard} />

       </Switch> 
         </BrowserRouter> 
      
  );
}

export default App;