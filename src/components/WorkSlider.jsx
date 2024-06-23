"use client"
import {FreeMode, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from "next/image";
import {BsArrowRight} from "react-icons/bs";


// data
const workSlides = {
    slides: [
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb1.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb2.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb3.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb4.jpg',
                },
            ],
        },
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb4.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb1.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb2.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb3.jpg',
                },
            ],
        },
    ],
};

const WorkSlider = () => {
    return <Swiper
        spaceBetween={10}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className='h-[240px] sm:h-[480px]'>
        {
            workSlides.slides.map((slide, index) => {
                return <SwiperSlide key={index}

                >
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {
                            slide.images.map((image, index) => {
                                return <div key={index}
                                            className="group relative flex items-center justify-center rounded-lg overflow-hidden">
                                    <div className="flex items-center justify-center relative overflow-hidden">
                                        {/*image*/}
                                        <Image
                                            src={image.path}
                                            alt={image.title}
                                            width={500} height={300}/>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10">
                                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                                <div className="delay-100">LIVE</div>
                                                <div
                                                    className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT
                                                </div>
                                                <div
                                                    className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-500 delay-150 text-xl">
                                                    <BsArrowRight/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>;
                            })
                        }
                    </div>
                </SwiperSlide>
                    ;
            })
        }
    </Swiper>
        ;
};

export default WorkSlider;
