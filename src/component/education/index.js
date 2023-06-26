import "./style.css";
import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";

function Education() {
  return (
    <>
      <div>
        <h3 className="text-color">Education and Qualifications</h3>
        <div className="school">
          <h3>
            School of Information Technology and Communication - Can Tho
            University
          </h3>
          <Stack direction="row" style={{ paddingTop: "unset" }}>
            <div className="title">School Year: </div>
            <div
              style={{
                paddingLeft: "1%",
                fontWeight: "normal",
              }}
            >
              9/2019 - 9/2023
            </div>
          </Stack>
          <Stack direction="row" style={{ paddingTop: "unset" }}>
            <div className="title">Major: </div>
            <div
              style={{
                paddingLeft: "1%",
                fontWeight: "normal",
              }}
            >
              Information Technology
            </div>
          </Stack>
          <Stack direction="row" style={{}}>
            <div className="title">Cumulative GPA: </div>
            <div
              style={{
                paddingLeft: "1%",
                fontWeight: "normal",
              }}
            >
              2.87
            </div>
          </Stack>
        </div>
      </div>
      <br />
      <Divider />
    </>
  );
}

export default Education;
