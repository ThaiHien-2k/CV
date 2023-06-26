import "./style.css";
import Stack from "@mui/material/Stack";
import CareerObjective from "../careerObjective";
import Education from "../education";
import Experience from "../experience";
import Certificate from "../certificate";

function Main() {
  return (
    <>
      <Stack direction="column" className="background">
        <CareerObjective />
        <Education />
        <Experience />
        <Certificate />
      </Stack>
    </>
  );
}

export default Main;
