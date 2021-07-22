import React from "react";
import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import Contact from "./pages/contact/Contact";
import About from "./pages/about us/About";
//import Footer from "./footer/Footer";
import Setting from "./pages/settings/Setting";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Context } from "./Context/Context";
import { useContext } from "react";
import Sidebar from "./sidebar/Sidebar";

function App() {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  const {user} = useContext(Context);
  return (
    
    <Router>
    <TopBar/>
    <Switch>
      <Route exact path="/">
        {user?<Home/>:<Login/>}
      </Route>
      <Route path="/Settings">
        {user?<Setting/>:<Register/>}
      </Route>
      <Route path="/posts/">
        <Single/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/register">
        {user?<Home/>:<Register/>}
      </Route>
      <Route path="/login">
      {user?<Home/>:<Login/>}
      </Route>
      <Route path="/write">
      {user?<Write/>:<Register/>}
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/about-us">
        <About/>
      </Route>
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
