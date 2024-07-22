
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {

  const [mode,setMode] = useState("light");

  const removeClasses = ()=>{
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-null");
  };

  const toggle = (cls)=>{
    removeClasses();
    document.body.classList.add("bg-"+cls);
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode is Enable","success");
    }else{
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode is Enable","success");
    }
    // setInterval(() => {
    //   let Title = document.querySelector("title");
    //   Title.innerText = "Install Textutils Now";
    // }, 2000);
    // setInterval(() => {
    //   let Title = document.querySelector("title");
    //   Title.innerText = "Textutils is amazing";
    // }, 1500);
  };

  const [alert,setAlert]=useState(null);

  const showAlert =(message,type)=>{
      setAlert({
        message:message,
        type:type
      });
      setTimeout(() => {
        setAlert(null);
      },1500);
  };
  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert} />} />
     </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
