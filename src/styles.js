import styled from "styled-components";
import { motion } from "framer-motion";

export const Layout = styled(motion.div)`
  min-height: 90vh;
  margin-top: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 6rem;
  color: white;
  @media (max-width: 992px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 992px) {
    padding: 0;
    p {
      text-align: center;
    }
    button {
      margin: 2rem 0 4rem 0;
    }
  }
`;

export const Image = styled.div`
  z-index: 2;
  flex: 0.7;
  img {
    width: 90%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
