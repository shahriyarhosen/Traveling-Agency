import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {  Autoplay,  Navigation } from "swiper";
// FreeMode,Pagination,

const PlacesSlider = () => {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        // freeMode={false}
        // grabCursor={true}
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={false}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        // FreeMode, Pagination,
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="pb-20">
          <div className="w-80 h-80">
            <img
              className="w-32 md:w-80 md:h-80 rounded-lg"
              src="https://i.ibb.co/sRMwdrN/cox-s-bazar.jpg"
              alt=""
            />
            <h2 className="text-black py-2 text-2xl font-bold">Cox's Bazar</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-80 h-80">
            <img
              className="w-32  md:w-80 md:h-80 rounded-lg"
              src="https://i.ibb.co/SV5RJhP/dubai.jpg"
              alt=""
            />
            <h2 className="text-black py-2 text-2xl font-bold">Dubai</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-80 h-80">
            <img
              className="w-32  md:w-80 md:h-80 rounded-lg"
              src="https://i.ibb.co/FJz4sxT/istanbul.jpg"
              alt=""
            />
            <h2 className="text-black py-2 text-2xl font-bold">Istanbul</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-80 h-80">
            <img
              className="w-32  md:w-80 md:h-80 rounded-lg"
              src="https://i.ibb.co/WsdhSsF/maldives.jpg"
              alt=""
            />
            <h2 className="text-black py-2 text-2xl font-bold">Maldives</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-80 h-80">
            <img
              className="w-32  md:w-80 md:h-80 rounded-lg"
              src="https://i.ibb.co/WsrVvYH/agra.jpg"
              alt=""
            />
            <h2 className="text-black py-2 text-2xl font-bold">Agra</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-80 h-80">
            <img
              className="w-32  md:w-80 md:h-80 rounded-lg"
              src="https://i.ibb.co/2nsH6L7/bankok.jpg"
              alt=""
            />
            <h2 className="text-black py-2 text-2xl font-bold">Bangkok</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-80 h-80">
            <img
              className="w-32  md:w-80 md:h-80 rounded-lg"
              src=" https://i.ibb.co/Yd39kWY/kathmandu.jpg"
              alt=""
            />
            <h2 className="text-black py-2 text-2xl font-bold">Kathmandu</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-80 h-80">
            <img
              className="w-32  md:w-80 md:h-80 rounded-lg"
              src="https://i.ibb.co/xGSyWmB/colombo.jpg"
              alt=""
            />
            <h2 className="text-black py-2 text-2xl font-bold">Colombo</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PlacesSlider;
