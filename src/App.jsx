import Portofolio from "./Components/Portofolio";
import { WithoutHR } from "./Components/Portofolio";
import { MyP } from "./Components/Portofolio";
import Footer from "./Components/Footer";
import Data from "./Components/Data";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import '@fortawesome/fontawesome-free/css/all.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div>
    <Header/>
    <AboutMe/>
    <Skills/>
    <MyP/>
<div>
      <div className="row m-2">
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <Portofolio bg="#959188" text="Web Design" />
          
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <Portofolio bg="#404040" text="Mobile Design" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <Portofolio bg="#959188" text="Lood Design" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <WithoutHR bg="#404040" text="Web Application Development" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <WithoutHR bg="#959188" text="Mobile Application Development" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <WithoutHR bg="#404040" text="PWA Development" />
        </div>
        </div>
    </div>
    <br />
   <Footer/>
    </div>
  );
}








// <div className="row m-1">
// <Portofolio bg={"#959188"} text={"Web Design"}></Portofolio>
// <Portofolio bg={"#404040"} text={"Mobile Design"}></Portofolio>
// <Portofolio bg={"#959188"} text={"Lood Design"}></Portofolio>
// <Portofolio bg={"#404040"} text={"Web Application Development"}></Portofolio>
// <Portofolio bg={"#959188"} text={"Mobile Application Development"}></Portofolio>
// <Portofolio bg={"#404040"} text={"PWA Development"}></Portofolio>
// </div>