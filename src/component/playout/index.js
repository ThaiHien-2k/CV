// import logo from '../../logo.svg';
import "./style.css";
import AvatarBox from "../avatar";
import Persional from "../persionalDetail";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <>
      <Stack direction="row" spacing={2} className="background">
        <AvatarBox />
        <Persional />
      </Stack>
    </>
  );
}

export default App;
