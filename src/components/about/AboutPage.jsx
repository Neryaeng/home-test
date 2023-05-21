import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Title } from "../../general/styles/general.styled";
import { MainImage, Container, MainDiv, ImageDiv, InformationDiv, TextDiv, Span, CarouselTitle } from "./AboutPage.styled";
import { getConstants } from "../../utils/consts";
import ImageCarousel from "./inner-components/ImageCarousel";

function AboutPage() {
    const navigate = useNavigate();

    const goToImages = () => {
        navigate('/images');
    };
    const goToWeather = () => {
        navigate('/weather');
    };

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const consts = getConstants().ABOUT;
    const imgSrc = consts.image.src;
    const pageTitle = consts.title;
    const infoText = consts.text;

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <MainDiv>
                <ImageDiv>
                    <MainImage src={imgSrc} />
                </ImageDiv>
                <InformationDiv>
                    <TextDiv>
                        <Span  winWidth={windowSize?.width}>
                            {infoText}
                        </Span>
                    </TextDiv>
                    <div>
                        <Button onClick={goToImages}>View Images By Date</Button>
                        <Button onClick={goToWeather}>View Weather</Button>
                    </div>
                </InformationDiv>
            </MainDiv>

            <footer style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <CarouselTitle >
                    Curiosity Rover Images <span style={{ color: '#b19168' }}>{`From Today`}</span>
                </CarouselTitle>
                 <ImageCarousel />
            </footer>
        </Container>
    )
}
export default AboutPage;