import logo from './logo.svg';
import './App.css';
 import Signup from './signup/Signup'
 import Login from './login/Login'
import Email from './forget-email/Email';
import ResetPass from './reset_pass/ResetPass';
function App() {
  return (
    <div className="App">

      {/* <Signup /> */}
      {/* <Login /> */}

      <ResetPass />
      {/* <Email /> */}
    </div>
  );
}

export default App;
