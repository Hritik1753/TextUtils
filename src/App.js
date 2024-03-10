
import React, {useState} from 'react'
// import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Text from "./component/TextForm";
import Alert from "./component/Alert";
function App() {
//this is done for controling dark and light mode from app.js page
//   const handleDarkMode = () => {
//     if (styles.color === 'white') {
//       setbtn("Enable Light mode");
//       setStyles({
//         color: "black",
//         backgroundColor:"white"
//       })
//     }
//     else {
//       setbtn("Enable Dark mode");

//     setStyles({
//       color: "white",
//       backgroundColor:"black"
//     })
//     }
    

  // }
  

  
  // const [btn, setbtn] = useState("Enable Dark Mode");
  
  // const [styles, setStyles] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // });

  const [alert, setalert] = useState(null);
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not

  const showAlert = (message,type) => {
    setalert({
      msg: message,
      type:type
    })

     setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  }
  return (
    <div className="App" >
      <Navbar title="hritik" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* props ka use property pass karne ke liye kiya jata from you use that module  */}
      
      <div className="container my-3 ">
        <Text title=" Text Area" showalert={showAlert}  heading="Enter the Text to analyze below" mode={mode} />
      
</div>
      
      {/* <Home/> */}
      {/* state and props */}
    </div>
  );
}

export default App;
