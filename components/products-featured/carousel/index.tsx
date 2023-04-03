import ProductItem from "./../../product-item";
import { ProductTypeList } from "types";
import "swiper/css/navigation";
// import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Grid } from "swiper";
import "swiper/css/grid";

SwiperCore.use([EffectFade, Navigation, Grid]);
type ProductsCarouselType = {
  products: ProductTypeList[];
};

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: "row"
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        //  modules={[Grid, Pagination]}
        className="mySwiper"
        // slidesPerView={4}
        // spaceBetween={10}
        navigation
        // grid={{ fill: "row", rows: 2 }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            // spaceBetween: 2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          "@0.75": {
            slidesPerView: 4,
            // spaceBetween: 2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          "@1.00": {
            slidesPerView: 4,
            // spaceBetween: 2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          "@1.50": {
            slidesPerView: 4,
            // spaceBetween: 2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
        modules={[Navigation, Grid]}
        // className="swiper-wrapper"
      >
        {products.map((item: any, index: number) => (
          <SwiperSlide key={index} className="swiper-slide flex items-stretch">
            <div className="h-full w-full py-4">
              <ProductItem
                id={item.attributes.slug}
                name={item.attributes.title}
                price={item.attributes.price}
                discount={item.discount}
                currentPrice={item.attributes.OriginalPrice}
                key={item.attributes.id}
                image={item.attributes.image.data.attributes.url}
                images={item.attributes.images.data}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
