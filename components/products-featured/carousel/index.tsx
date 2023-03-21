import ProductItem from "./../../product-item";
import { ProductTypeList } from "types";
import "swiper/css/navigation";
// import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// let slidesPerView = 1.3;
// let centeredSlides = true;
// let spaceBetween = 30;
// if (process.browser) {
//   if (window.innerWidth > 768) {
//     slidesPerView = 3;
//     spaceBetween = 35;
//     centeredSlides = false;
//   }
//   if (window.innerWidth > 1024) {
//     slidesPerView = 4;
//     spaceBetween = 65;
//     centeredSlides = false;
//   }
// }

type ProductsCarouselType = {
  products: ProductTypeList[];
};

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        //   className="mySwiper"
        // >
        className="swiper-wrapper  "
      >
        {products.map((item) => (
          <SwiperSlide key={item.id} className="flex items-stretch">
            <div className="h-full w-full px-2 py-4">
              <ProductItem
                id={item.id}
                name={item.name}
                price={item.price}
                color={item.color}
                discount={item.discount}
                currentPrice={item.currentPrice}
                key={item.id}
                images={item.images}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
