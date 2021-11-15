import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import styled from "styled-components";
// Animations
import {motion} from 'framer-motion'
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="img" />
          </Headline>
          <Awards>
              {movie.awards.map((award) => (
                  <Award title={award.title} description = {award.description} key={award.title}/>
              ))}
          </Awards>
          <ImageDisplay>
              <img src={movie.secondaryImg} alt="img2" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};
const Details = styled(motion.div)`
    color: white;
`;
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
        margin: 5rem 1rem;
    }
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`
const AwardStyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width:70%;
        background: #23d997;
        margin: 1rem 0rem;
        height: 0.3rem;
    }
    p{
        padding: 2rem 0rem;
    }
`
const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`
// Award Component
const Award = ({title, description}) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}
export default MovieDetail;
