import "./style.css";
import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";

function Certificate() {
  return (
    <>
      <div>
        <h3 className="text-color">Certificate</h3>
        <div className="certificate">
          <Stack direction="row">
            <h4>7/2020</h4>
            <h4
              style={{
                paddingLeft: "2%",
                fontWeight: "normal",
              }}
            >
              Japanese N5
            </h4>
          </Stack>
          <Stack direction="row">
            <h4>8/2022</h4>
            <h4
              style={{
                paddingLeft: "2%",
                fontWeight: "normal",
              }}
            >
              TOEIC 515
            </h4>
          </Stack>
        </div>
      </div>
      <br />
      <br />
      <Divider />
    </>
  );
}

export default Certificate;
