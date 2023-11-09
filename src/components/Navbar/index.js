import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  ResumeButton,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Close, CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";

const Navbar = ({ setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav id="nav-menu">
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>SK'sPortfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          {/* about */}
          <NavLink  className="nav-link about" href="#about">About</NavLink>
        {/* skills */}
          <NavLink className="nav-link skills" href="#skills">Skills</NavLink>
         {/* projects */}
          <NavLink className="nav-link projects" href="#projects">Projects</NavLink>
         {/* home */}
          <NavLink className="nav-link home" href="#home">GithubStats</NavLink>
          {/* education */}
          {/* <NavLink className="nav-link education" href="#education">Education</NavLink> */}
          {/* contact */}
          <NavLink className="nav-link contact" href="#contact">Contact</NavLink>

        </NavItems>
        <ButtonContainer   className="nav-link resume" id="resume-button-1">
          <ResumeButton
            href={Bio.resume}
            download="Sachin-Kumar-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link resume"
            id="resume-link-1"
          >
            Resume
          </ResumeButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink className="nav-link about"
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink className="nav-link skills"
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
           
            <MobileLink className="nav-link projects"
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink className="nav-link home"
              href="#home"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              GithubStats
            </MobileLink>
            {/* <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink> */}
            <MobileLink className="nav-link contact"
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            <ResumeButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.resume}
              target="_blank"
              className="nav-link resume"
              download="Sachin-Kumar-resume.pdf"
             
              rel="noopener noreferrer"
            >
              Resume
            </ResumeButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

// 1_TbTh9NqYuyPyVC_ffrJt8MWA4a3ofzs
