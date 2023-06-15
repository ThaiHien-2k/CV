// import logo from '../../logo.svg';
import "./style.css";

import ava from "../../image/avatar.png";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import ListItemIcon from "@mui/material/ListItemIcon";
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
  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open(event.target.href, "_blank");
  };

  return (
    <>
      <div className="avatar">
        <h1>Phan Thái Hiền</h1>
        <Avatar
          alt="My avatar"
          src={ava}
          sx={{
            width: 200,
            height: 200,
          }}
        />
        <h3>Persional Details</h3>
        <Grid item xs={12} md={6}>
          <ListItem>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText>11/01/2000</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Male</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneAndroidIcon />
            </ListItemIcon>
            <ListItemText>0937760152</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <Link
              href="https://kentphan110100@gmail.com"
              underline="none"
              onClick={handleLinkClick}
            >
              {"kentphan110100@gmail.com"}
            </Link>
            {/* <ListItemText>kentphan110100@gmail.com</ListItemText> */}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <Link
              href="https://github.com/ThaiHien-2k"
              underline="none"
              onClick={handleLinkClick}
            >
              {"https://github.com/ThaiHien-2k"}
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
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
