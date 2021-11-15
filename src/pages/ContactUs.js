import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#1b1b1b" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Contact Us</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Send Us A Message</h3>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Drop an Email</h3>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Follow on Social Media</h3>
          </Social>
        </Hide>
        
      </div>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 576px) {
    padding: 5rem 2rem;
    font-size: 1rem;
  }
`;
const Title = styled(motion.div)`
  margin-bottom: 4rem;
  color: white;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #23d997;
`;
const Social = styled(motion.div)`
  display: flex;
  color: #ccc;
  align-items: center;
  h3 {
    margin: 2rem;
    @media (max-width: 576px) {
    margin: 2rem 0.5rem;
  }
  }
`;
export default ContactUs;
