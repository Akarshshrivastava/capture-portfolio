import React from "react";
// Import Image
import home2 from "../img/home2.png";
// Import Icon
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

// Import Styled
import styled from "styled-components";
import { Layout, Description, Image } from "../styles";

import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      initial="hidden"
      variants={scrollReveal}
      animate={controls}
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Affordable" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(Layout)`
  @media (max-width: 992px) {
    display: block;
    text-align: center;
  }
  h2 {
    padding-bottom: 5rem;
    font-size: 2.6rem;
    font-weight: bold;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .icon {
    display: flex;
    align-items: center;
    width: auto;
    h3 {
      font-size: 1.4rem;
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 0.6rem;
    }
  }
`;
export default ServicesSection;
