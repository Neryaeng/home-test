import React, { useEffect, useState } from 'react';
 import { dummyImages } from '../../images-by-date/ImagesPage.styled';
import { getCurrentDate, getImages } from '../../../general/logic/general.logic';
import { Image,CarouselBtn, CarouselDiv } from './ImageCarousel.styled';

const ImageCarousel = () => {
  const [photosData, setPhotosData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesPerPage = 5;

  const currentDate = getCurrentDate();

  useEffect(() => {
    const fetchImages = async () => {
      const data = await getImages('2021-3-4');
      // const data = dummyImages;
      if (data) {
        setPhotosData(data);
      }
    };

    fetchImages();
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? photosData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === photosData.length - 1 ? 0 : prevIndex + 1));
  };

  if (photosData.length === 0) {
    return <div style={{paddingInline:'3%'}}>{`There no Images for the date - ${currentDate}`}</div>;
  }

  const currentIndex = currentImageIndex;
  const slicedImages = photosData.slice(currentIndex, currentIndex + imagesPerPage);

  return (
    <CarouselDiv>
      <CarouselBtn onClick={handlePrev} value={'<'} />

      {slicedImages.map((image, index) => (
        <Image key={image.id} img={image} index={index} />
      ))}
      <CarouselBtn onClick={handleNext} value={'>'} />
    </CarouselDiv>
  );
};

export default ImageCarousel;
