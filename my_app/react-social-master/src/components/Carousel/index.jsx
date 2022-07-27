import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const ImageSlider = ({ onChange, data }) => {
  return (
    <Carousel afterChange={onChange} draggable={true}>
      {data.map(d => (
        <CarouselItem key={d}>
          <img src={d} alt="image" />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default ImageSlider;

const CarouselItem = styled.div`
  max-height: 400px;
  color: #fff;
  background: #364d79;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;
