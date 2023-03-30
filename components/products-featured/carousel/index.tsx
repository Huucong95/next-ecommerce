import ProductItem from "./../../product-item";
import { ProductTypeList } from "types";
import "swiper/css/navigation";
// import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";

SwiperCore.use([EffectFade, Navigation]);
type ProductsCarouselType = {
  products: ProductTypeList[];
};

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        navigation
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="swiper-wrapper  "
      >
        {products.map((item: any, index: number) => (
          <SwiperSlide key={index} className="flex items-stretch">
            <div className="h-full w-full px-2 py-4">
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
