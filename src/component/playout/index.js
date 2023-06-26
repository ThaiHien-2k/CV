// import logo from '../../logo.svg';
import "./style.css";
import Main from "../main";
import Persional from "../persionalDetail";

function App() {
  return (
    <div className="br">
      <div className="left">
        <Persional />
      </div>
      <div className="right">
        <Main />
      </div>
      <div className="clear"></div>
    </div>
  );
}

export default App;
