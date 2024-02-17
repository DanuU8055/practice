import Combine from "./component/Combine State/Combine";

{/*

import { Route , Routes  } from "react-router-dom";
import Navbar from "./BootstrapWebsite/Nav component/Navbar";
import Home from "./BootstrapWebsite/Home component/Home";
import About from "./BootstrapWebsite/About compponent/About";
import Contact from "./BootstrapWebsite/Contact component/Contact";
import Service from "./BootstrapWebsite/Service component/Service";
import Footer from "./BootstrapWebsite/Footer component/Footer";
 import Context from "./component/Context component/Context";
 import Profile from "./component/Profile component/Profile";

 import User from "./component/Profile component/User";
 import Home from "./component/Profile component/Home";
 import About from "./component/Profile component/About";

import PlusMinus from './component/PlusMinus component/PlusMinus';
import './App.css';
import Amazon from './component/Amazon component/Amazon';
import AmazonData from './component/Amazon component/AmazonData';
import Youtube from './component/Youtube component/Youtube';
import youtubeData from './component/Youtube component/YoutubeData';
import Todo from './component/TodoList component/Todo';*/}








function App() {
  return (
    <>
{/* <Todo/> */} 

    {/* <PlusMinus/> */}

  {/* <center>
    <h1 className='header' >2024 Best 5 Amazon Movies </h1>
  </center>

    {
      AmazonData.map((x)=>(
        <Amazon 
        key={x._id}  //React not see key as a custom attribute .

        imgSrc={x.imgSrc}
        title={x.title}
        ott={x.ott}
        link={x.link}
        />
      ))
    }
    
    <center>
    <br/><br/><br/>
      <h1 className='header'>Top 5 Best Youtube Channel</h1>
    </center>
    {
      youtubeData.map((x)=>(
        <Youtube
        key={x._id}
        imgSrc={x.imgSrc}
        title={x.title}
        ott={x.ott}
        link={x.link}
        />
      ))
    }
    <br/><br/>  */}

    

{/* 
    <Navbar/>
     <Routes>
<Route path="/user" element={<User/>}/>
<Route path="/user/:name" element={<User/>}/>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/> 
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/service" element={<Service/>}/>

</Routes> 
<Footer/>
*/}

    
    
<Combine/>
    
    </>
  )
  
  }

export default App;

