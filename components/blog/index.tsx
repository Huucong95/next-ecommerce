import Link from "next/link";
import { URL } from "../../utils/env";
import "swiper/css/navigation";
// import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Grid } from "swiper";
SwiperCore.use([EffectFade, Navigation, Grid]);

const Blogs = ({ blogs }: any) => {
  return (
    <div className="container  pb-12">
      <div
        className="border-b-2 border-orange-600 mb-5 flex justify-between text-xl"
        style={{ borderBottom: "1px solid #eee" }}
      >
        <div
          className="text-orange-600 font-bold flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase"
          style={{ borderBottom: "4px solid rgb(249 115 22)" }}
        >
          <Link href="#" className="font-semibold inline-block ">
            Bài viết mới
          </Link>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 1,
          fill: "row"
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        //  modules={[Grid, Pagination]}
        className="mySwiper"
        // slidesPerView={4}
        // spaceBetween={10}
        navigation
        // grid={{ fill: "row", rows: 1 }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            // spaceBetween: 2,
            grid: {
              rows: 1,
              fill: "row",
            },
          },
          "@0.75": {
            slidesPerView: 4,
            // spaceBetween: 2,
            grid: {
              rows: 1,
              fill: "row",
            },
          },
          "@1.00": {
            slidesPerView: 4,
            // spaceBetween: 2,
            grid: {
              rows: 1,
              fill: "row",
            },
          },
          "@1.50": {
            slidesPerView: 4,
            // spaceBetween: 2,
            grid: {
              rows: 1,
              fill: "row",
            },
          },
        }}
        modules={[Navigation, Grid]}
        // className="swiper-wrapper"
      >
        {blogs.map((item: any, index: number) => (
          <SwiperSlide key={index} className="swiper-slide flex items-stretch ">
            <div className="h-full w-full py-4">
              <div
              key={index}
              className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer h-full"
            >
              <Link href={`/blog/${item.attributes.slug}`}>
                <div className="relative">
                  <img
                    className="w-full aspect-[4/3]"
                    src={`${URL}${item.attributes?.banner?.data.attributes.url}`}
                    alt={item.attributes?.banner?.data.attributes.name}
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  <Link
                    href={`/${item?.attributes?.blog_category?.data?.attributes?.slug}`}
                  >
                    <div className="text-[10px] md:text-xs  absolute top-0 right-0 bg-orange-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      {item.attributes?.blog_category?.data?.attributes.name}
                    </div>
                  </Link>
                </div>
              </Link>
              <div className="p-2 md:px-6 md:py-4 mb-auto">
                <Link
                  href={`/blog/${item.attributes.slug}`}
                  className="font-medium text-lg    hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-4"
                >
                  <div className="text-black font-semibold text-sm md:text-md leading-4">
                    {item.attributes.title}
                  </div>
                </Link>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {item.attributes.description}
                </p>
              </div>
            
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blogs;
