import "./style.css";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { useState } from "react";

function Experience() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div>
        <h3 className="text-color">Work Experience</h3>
        <div>
          <h4 className="name2">Thesis Project</h4>
          <div className="name">Blood donation management software system</div>
          <Typography className="decrip">
            Develop a blood management system to meet the needs of blood
            recipients, blood donation supporters, and blood donors. The system
            aims to provide features such as managing the amount of blood
            received and stored, ordering blood according to blood types,
            managing blood donation support members, and tracking information of
            people who have donated blood. The system will support blood
            donation sessions by providing features such as viewing information
            of people who have donated blood, storing new blood donation
            information, and statistics of blood donation sessions. For blood
            donors, the system will provide features such as notification of the
            next blood donation session, information about blood type, number of
            donations, and articles related to blood donation.
          </Typography>
          <Typography className="decrip">
            Use Node.js and Express.js to build the backend, then deploy it on
            Railway. Use MongoDB Atlas to store the database online. Build the
            admin page using React.js to support blood donation supporters and
            administrators, and deploy the website on Netlify. Build a mobile
            application using React Native for blood donors.
          </Typography>
          <Link
            className="link"
            href="https://github.com/ThaiHien-2k/Luan-Van.git"
            underline="none"
            color={"black"}
            target="_blank"
          >
            <GitHubIcon />
          </Link>
          <Link
            className="link link-pass"
            href="https://master--kaleidoscopic-florentine-a6e1a0.netlify.app/"
            underline="none"
            color={"black"}
            target="_blank"
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <WebAssetIcon />
          </Link>
          {isHovering && (
            <div className="pass">
              username: admin@gmail.com <br />
              password: admin123
            </div>
          )}
        </div>
        <br />
        <Divider variant="middle" />
        <div>
          <h4 className="name2"> Internship Project</h4>
          <div className="name">Build a 3d printer</div>
          <Typography className="decrip">
            Building hardware components of a machine, embedding firmware onto
            the circuit board, and then customizing appropriate parameters
            accordingly. Find or create a print pattern with software that
            adjusts parameters to suit your needs.
          </Typography>
        </div>
        <Divider variant="middle" />
        <div>
          <h4 className="name2">Year Project</h4>
          <div className="name">
            E-commerce website for buy and sell laptops
          </div>
          <Typography className="decrip">
            Using the Laravel framework and MySQL to build an e-commerce website
            for buying and selling laptops is an efficient way to create a
            reliable and robust platform for online transactions. The website's
            functionality would include features such as product listings,
            shopping cart, payment gateway integration, order management, and
            user authentication. The website would allow users to search for
            laptops based on specific criteria such as brand, model, features,
            and price range. The shopping cart would enable users to add
            products to their cart, view their cart, and proceed to checkout.
          </Typography>
          <Link
            className="link"
            href="https://github.com/ThaiHien-2k/Nien-Luan.git"
            underline="none"
            color={"black"}
            target="_blank"
          >
            <GitHubIcon />
          </Link>
        </div>
        <br />
        <Divider variant="middle" />
        <div>
          <h4 className="name2">Year Project</h4>
          <div className="name">
            E-commerce website for buy and sell motorbike parts
          </div>
          <Typography className="decrip">
            Building an e-commerce website for buy and sell motorbike parts that
            provides customers with a convenient online shopping experience,
            including the ability to search for products by category, search
            filters, purchase history, product ratings, and reviews from other
            customers. The website also provides tools for vendors to manage
            orders, inventory and track shipping information. Vendors can manage
            their products, update descriptions, prices and inventory levels.
          </Typography>
          <Link
            className="link"
            href="https://github.com/ThaiHien-2k/Nien-luan-co-so.git"
            underline="none"
            color={"black"}
            target="_blank"
          >
            <GitHubIcon />
          </Link>
        </div>
        <br />
      </div>
      <Divider />
    </>
  );
}

export default Experience;
