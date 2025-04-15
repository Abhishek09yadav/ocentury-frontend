import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//internal import

import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";

const MainCarousel = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue, showingUrl, showingImage } =
    useUtilsFunction();

  const sliderData = [
    {
      id: 1,
      url: showingUrl(storeCustomizationSetting?.slider?.first_link),
      image:
        showingImage(storeCustomizationSetting?.slider?.first_img) ||
        "/slider/slider-1.jpg",
    },
    {
      id: 2,
      url: showingUrl(storeCustomizationSetting?.slider?.second_link),
      image:
        showingImage(storeCustomizationSetting?.slider?.second_img) ||
        "/slider/slider-2.jpg",
    },
    {
      id: 3,
      url: showingUrl(storeCustomizationSetting?.slider?.third_link),
      image:
        showingImage(storeCustomizationSetting?.slider?.third_img) ||
        "/slider/slider-3.jpg",
    },
    {
      id: 4,
      url: showingUrl(storeCustomizationSetting?.slider?.four_link),
      image:
        showingImage(storeCustomizationSetting?.slider?.four_img) ||
        "/slider/slider-1.jpg",
    },
    {
      id: 5,
      url: showingUrl(storeCustomizationSetting?.slider?.five_link),
      image:
        showingImage(storeCustomizationSetting?.slider?.five_img) ||
        "/slider/slider-2.jpg",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          hideOnClick: true,
          dynamicBullets: true,
        }}
        navigation={{
          enabled: window?.innerWidth >= 640,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderData?.map((item, i) => (
          <SwiperSlide 
            className="w-full relative overflow-hidden" 
            key={i + 1}
          >
            <div className="relative h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh]">
              <Image
                src={item.image || "/slider/slider-1.jpg"}
                alt={item.title || 'Slider Image'}
                fill
                className="object-cover"
                priority
                sizes="100vw"
                quality={85}
              />
            </div>

            <div className="absolute top-0 left-0 z-10 flex flex-col w-full h-full justify-center bg-black/10">
              <div className="px-4 sm:px-10 md:px-16 w-full sm:w-10/12 md:w-8/12 lg:w-7/12">
                <h1 className="mb-2 font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white font-sans line-clamp-2 sm:line-clamp-none drop-shadow-lg">
                  {item.info}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainCarousel;
