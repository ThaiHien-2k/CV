// import logo from '../../logo.svg';
import "./style.css";
import Divider from "@mui/material/Divider";
import QR from "../../image/QR.png";

function Skill() {
  return (
    <div>
      <h3>Tech Stack</h3>
      <div className="skill">
        <div className="head">Database</div>
        <div>MongoDB, MySQL, firebase</div>
      </div>
      <br />
      <div className="skill">
        <div className="head">Front-end Stack</div>
        <div>ReactJs, VueJS</div>
      </div>
      <br />
      <div className="skill">
        <div className="head">Back-end Stack</div>
        <div>Nodejs, Express, Laravel</div>
      </div>
      <br />
      <div className="skill">
        <div className="head">Mobile Stack</div>
        <div>React Navtive, Flutter</div>
      </div>
      <br />
      <div className="skill">
        <div className="head">Order Stack</div>
        <div>GitHub, Railway, Netlify</div>
      </div>
      <br />
      <Divider />
      <h3>Tech Stack</h3>
      <div className="QR">
        <img src={QR} alt="" />
      </div>
    </div>
  );
}

export default Skill;
