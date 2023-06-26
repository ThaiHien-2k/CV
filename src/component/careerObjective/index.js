import "./style.css";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

function CareerObjective() {
  return (
    <>
      <div>
        <h3 className="text-color">Career Objective</h3>
        <Typography variant="body2" className="content">
          "With a learning mindset and passion for Information Technology, I am
          seeking an opportunity to start my career in this field. My objective
          is to become a skilled IT professional, capable of applying my
          expertise to solve problems and contribute to the development of the
          organization. I aspire to be part of a dynamic work environment that
          fosters knowledge exchange and provides opportunities to learn from
          industry experts. I will strive to contribute to the company and
          develop myself throughout the work process."
        </Typography>
        <br />
      </div>

      <Divider />
    </>
  );
}

export default CareerObjective;
