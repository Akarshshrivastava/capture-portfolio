import React from "react";
import styled from "styled-components";
import { Layout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: bold;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    h4{
      font-weight: 500;
    }
    @media (max-width: 992px) {
      text-align: left;
    }
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
