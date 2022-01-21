import Slider from 'react-slick';
import Rate from '../Rate';

import { ReactComponent as Quotes } from './quotes.svg';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 'cac0b55c-1a17-4225-b40d-be91d39d4d8d',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'David James',
      position: 'Web Design',
      grade: '4',
    },
    {
      id: '83e18cbc-1a72-4e22-9f59-522ba8528ff9',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'Sam Gallardo',
      position: 'Web Design',
      grade: '5',
    },
    {
      id: 'bf5172c0-9c5a-4c92-b6e0-e62a6a21381a',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'Don Auger',
      position: 'Web Design',
      grade: '2',
    },
  ];

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.testimonials}>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div className={styles.testimonial} key={testimonial.id}>
            <p className={styles.text}>{testimonial.text}</p>
            <Quotes className={styles.symbol} />
            <div className={styles.data}>
              <p className={styles.name}>{testimonial.name}</p>
              <span className={styles.separator}> / </span>
              <p className={styles.position}>{testimonial.position}</p>
            </div>
            <Rate grade={testimonial.grade} />
            <div className={styles.gap} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
