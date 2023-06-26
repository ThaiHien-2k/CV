// import logo from '../../logo.svg';
import "./style.css";

import ava from "../../image/avatar.png";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlaceIcon from "@mui/icons-material/Place";
import Divider from "@mui/material/Divider";
import Skill from "../Skill";

function AvatarBox() {
  return (
    <>
      <div className="avatar">
        <h1 className="my-name">Phan Thái Hiền</h1>
        <Avatar
          alt="My avatar"
          src={ava}
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "80%",
            height: "80%",
          }}
        />
        <h3 className="text-color">Persional Details</h3>
        <Grid item xs={12} md={6}>
          <ListItem>
            <CalendarMonthIcon className="icon" />
            <ListItemText>11/01/2000</ListItemText>
          </ListItem>
          <ListItem>
            <PersonIcon className="icon" />
            <ListItemText>Male</ListItemText>
          </ListItem>
          <ListItem>
            <PhoneAndroidIcon className="icon" />
            <ListItemText>0937760152</ListItemText>
          </ListItem>
          <ListItem>
            <EmailIcon className="icon" />
            <ListItemText>kentphan110100@gmail.com</ListItemText>
          </ListItem>
          <ListItem>
            <GitHubIcon className="icon" />
            <Link
              href="https://github.com/ThaiHien-2k"
              underline="none"
              color={"black"}
              target="_blank"
            >
              {"https://github.com/ThaiHien-2k"}
            </Link>
          </ListItem>
          <ListItem>
            <PlaceIcon className="icon" />
            <ListItemText>Long An</ListItemText>
          </ListItem>
        </Grid>
        <br />
        <Divider />
        <Skill />
      </div>
    </>
  );
}

export default AvatarBox;
