

import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Forgot from './pages/forget-email/Forgot';
import ResetPass from './pages/reset_pass/ResetPass';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile'
import TrashNotes from './pages/trashNotes/TrashNotes';
import Archive from './pages/archive/Archive';

function App() {
  return (
       <BrowserRouter>
          <Switch>

         <Route path='/signup' component={Signup} exact/>
         <Route path='/login' component={Login} />
         <Route path='/forget-email' component={Forgot} />
         <Route path='/resetpassword' component={ResetPass} />
         <Route path='/profile' component={Profile} />
         <Route path='/' component={Dashboard} />
         <Route exact path="/archive" component={Archive} />
         <Route exact path="/trashNotes" component={TrashNotes}/>

        <Route path='*' component={() => "Error 404 Page Not Found"} />

       </Switch> 
         </BrowserRouter>   
  );
}

export default App;