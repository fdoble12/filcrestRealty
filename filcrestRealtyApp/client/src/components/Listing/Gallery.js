import Carousel from 'nuka-carousel';

import sample1 from './listingpics/sample.jpg'


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={sample1} onDragStart={handleDragStart} role="presentation" />,
  <img src={sample1} onDragStart={handleDragStart} role="presentation" />,
  <img src={sample1} onDragStart={handleDragStart} role="presentation" />,
];

export const Gallery = () => {
  return (
    <Carousel>
      <img src={sample1} />
      <img src={sample1} />
      <img src={sample1} />
      <img src={sample1} />
      <img src={sample1} />
  </Carousel>
  );
}

export default Gallery