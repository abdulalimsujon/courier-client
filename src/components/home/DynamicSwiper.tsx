"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import profile from "../../assets/Home/profile.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const users = [
  {
    id: 1,
    name: "John Doe",
    image: profile,
    role: "Head of Marketing at XYZ Group",
    text: "UllNG has transformed our delivery process. The real-time tracking feature gives us peace of mind and our customers love the transparency.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: profile,
    role: "Head of Marketing at XYZ Group",
    text: "UllNG has transformed our delivery process. The real-time tracking feature gives us peace of mind and our customers love the transparency.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    image: profile,
    role: "Head of Marketing at XYZ Group",
    text: "UllNG has transformed our delivery process. The real-time tracking feature gives us peace of mind and our customers love the transparency.",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: profile,
    role: "Head of Marketing at XYZ Group",
    text: "UllNG has transformed our delivery process. The real-time tracking feature gives us peace of mind and our customers love the transparency.",
  },
  {
    id: 5,
    name: "David Wilson",
    image: profile,
    role: "Head of Marketing at XYZ Group",
    text: "UllNG has transformed our delivery process. The real-time tracking feature gives us peace of mind and our customers love the transparency.",
  },
];

const DynamicSwiper: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full py-8 relative">
      {/* Custom navigation buttons */}
      <button
        ref={prevRef}
        className="absolute  bg-gray-200 left-[-50px] top-1/2 transform -translate-y-1/2  w-[40px] h-[40px] rounded-full flex items-center justify-center z-10 text-white"
      >
        <FaAngleLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute bg-gray-200 right-[-50px] top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] rounded-full flex items-center justify-center z-10 text-white rotate-180"
      >
        <FaAngleRight />
      </button>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={false}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        pagination={{ clickable: true, type: "fraction" }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        modules={[Pagination, Navigation]}
        className="w-full mySwiper"
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="w-[380px] h-[294px] p-8 rounded-[12px] border border-gray-300 flex flex-col items-center justify-center gap-5">
              <div className="flex flex-col gap-3">
                <p className="font-dm-sans font-normal text-[18px] leading-[1.6] tracking-normal text-center">
                  {user.text}
                </p>
                <div className="flex gap-2 items-center">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={50}
                      height={50}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-[18px] text-[#EF6820]">
                      {user.name}
                    </p>
                    <p className="font-dm-sans font-normal text-[16px] leading-[1.6] tracking-normal text-center">
                      {user.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DynamicSwiper;
