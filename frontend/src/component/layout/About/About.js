import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/aman-gangwani-458077204";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dtlol93e6/image/upload/v1683326699/avatars/fjuimg7lpa2oz2lpoipt.jpg"
              alt="Founder"
            />
            <Typography>Aman Gangwani</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by @aman_1101. Only with the
              purpose to learn new concepts regarding MERN stack
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Reach Out To Me</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;