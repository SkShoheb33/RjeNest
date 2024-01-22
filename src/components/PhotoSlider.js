import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function PhotoSlider(props) {
  return (
    <div className="swiper-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        spaceBetween={20} // Adjust the space between slides as needed
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
      >
        {props.imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-content">
              <img className='swiper-img' src={img} alt={`slide_${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PhotoSlider;
