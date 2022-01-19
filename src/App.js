

import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Email from './pages/forget-email/Email';
import ResetPass from './pages/reset_pass/ResetPass';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
       <BrowserRouter>
         {/* <div className="App"> */}
          {/* <Signup />  */}
          {/* <Login /> */}
          {/* <Email /> */}
          {/* <ResetPass /> */}
          {/* <Dashboard/> */}
        {/* </div> */}
          <Switch>
 
         <Route path='/' component={Signup} exact/>
         <Route path='/login' component={Login} />
         <Route path='/forget-email' component={Email} />
         <Route path='/reset_pass' component={ResetPass} />
         <Route path='/dashboard' component={Dashboard} />
       </Switch> 
         </BrowserRouter> 
      
  );
}

export default App;