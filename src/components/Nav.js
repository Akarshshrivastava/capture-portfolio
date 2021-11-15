import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          ></Line>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          ></Line>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%"}}
          ></Line>
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  min-height: 10vh;
  position: sticky;
  z-index: 999;
  top: 0;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 6rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.8rem;
    font-weight: lighter;
  }
  li {
    padding-right: 4rem;
    position: relative;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 0rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
    ul {
      margin-bottom: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 0;
`;
export default Nav;
