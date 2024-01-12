import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const responseMessage = (e)=>{
    console.log('response--',e)
  }

  const errorMessage = (e)=>{
    console.log('on-error--',e)
  }
  return (
    <div className="App">
      <p>Testing react single sign-in test</p>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
    </div>
  );
}

export default App;
