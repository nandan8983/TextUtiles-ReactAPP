import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import React, {useState} from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
  
// } from "react-router-dom";
// import { Switch } from 'react-router'


export default function App() {
  
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (massage, type) => {

    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has  been Enabled", "success")
    }
    else{
      setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light Mode has  been Enabled", "success")
    }
  }
  
  return (
    <>
{/* <Router> */}
<Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
<div className='container' style={{maxWidth : `500px`, height : `75px` , marginTop: '10px', marginLeft : '67%' }}>
<Alert alert={alert}/></div>
<div className='container'>
 <TextForm showAlert={showAlert} heading="Enter text To Analaze below" mode={mode}/>
 {/* <Routes> 
 <Route path="/" render={(props) => <TextForm showAlert={showAlert} heading="Enter text To Analaze below" mode={mode} />} exact />
  <Route path="/" component={About} exact/>           
  </Routes> */}


</div>
{/* </Router> */}
    </>
  );
}
