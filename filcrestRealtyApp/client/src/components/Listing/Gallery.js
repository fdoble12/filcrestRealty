import Carousel from 'nuka-carousel';

import sample from './listingpics/sample.jpg'
import sample2 from './listingpics/sample2.jpg'
import sample3 from './listingpics/sample3.jpg'

export const Gallery = () => {
  return (
    <Carousel>
      <img src={sample} />
      <img src={sample2} />
      <img src={sample3} />
      <img src={sample} />
      <img src={sample} />
  </Carousel>
  );
}

export default Gallery