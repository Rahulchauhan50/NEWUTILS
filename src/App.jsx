
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState(localStorage.getItem("M") == null? "light" : localStorage.getItem("M"));
  const [Alerted, setAlert] = useState("");
  const [searchQuery, setsearchQuery] = useState('');
  const SetQuery = (Queries) => {
    setsearchQuery(`https://www.google.com/search?q=${Queries}&sxsrf=APwXEdcAAXDoYRiqWuSKjB17Nvb3mzPCiQ%3A1682086799255&source=hp&ei=j5tCZN6NDb_v2roPtvmY8Ac&iflsig=AOEireoAAAAAZEKpnxbR1mczlX2OXf7hkJGT4DxgmqWS&ved=0ahUKEwiekZjRlbv-AhW_t1YBHbY8Bn4Q4dUDCAk&uact=5&oq=hello&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyDgguEIoFELEDENQCEJECMggIABCKBRCRAjIOCC4QigUQsQMQ1AIQkQIyBwgAEIoFEEMyCwgAEIoFELEDEIMBMgsIABCKBRCxAxCDATIICAAQgAQQsQM6BwgjEOoCECc6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToRCC4QgwEQxwEQsQMQ0QMQgAQ6BQgAEIAEUKkBWNYIYIcLaAFwAHgAgAHBBogBsgmSAQczLTEuNi0xmAEAoAEBsAEK&sclient=gws-wiz&safe=active`)
  }

  const Alerting = (typ, msg) => {
    setAlert({
      type: typ,
      message: msg
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  const ModeChange = () => {
    if (Mode === "dark") {
      setMode("light");
      localStorage.setItem("M","light");
      document.body.style.backgroundColor = "white";
      Alerting("success", "Successfully Enabled Light Mode")
    }
    else {
      setMode("dark");
      localStorage.setItem("M","dark");
      document.body.style.backgroundColor = "#212529";
      Alerting("success", "Successfully Enabled Dark Mode")
    }
  }
  const AdvancedToggle = (val) => {
    if (val === 1) {
      setMode("primary");
      document.body.style.backgroundColor = "#0d6efd";
      Alerting("success", "Successfully Enabled primary Mode")
    }
    else if (val === 2) {
      setMode("secondary");
      document.body.style.backgroundColor = "#6c757d";
      Alerting("success", "Successfully Enabled Light Mode")
    }
    else if (val === 3) {
      setMode("success");
      document.body.style.backgroundColor = "#198754";
      Alerting("success", "Successfully Enabled secondary Mode")
    }
    else if (val === 4) {
      setMode("danger");
      document.body.style.backgroundColor = "#dc3545";
      Alerting("success", "Successfully Enabled danger Mode")
    }
    else if (val === 5) {
      setMode("warning");
      document.body.style.backgroundColor = "#ffc107";
      Alerting("success", "Successfully Enabled warning Mode")
    }
    else if (val === 6) {
      setMode("info");
      document.body.style.backgroundColor = "#0dcaf0";
      Alerting("success", "Successfully Enabled info Mode")
    }
    console.log(val);
  }

  return (
   
    <Router>
          
          <Navbar title="Home" about="About" contact="Contact us" mode={Mode} toggle={ModeChange} Admode={AdvancedToggle} search={searchQuery} seetQuery={SetQuery}/>
          <Alert alrt={Alerted} />
          <Textform alrtt={Alerting} mode={Mode} />
      
        <Routes>

          <Route exact path="/contact" element={<Contact  mode={Mode}/>}/>
          <Route exact path="/profile" element={<Profile  mode={Mode}/>}/>
          <Route exact path="/about" element={<About  mode={Mode}/>}/>
            
        </Routes>
        
          <Footer mode={Mode} Admode={AdvancedToggle}/>
      </Router>

  );
}

export default App;
