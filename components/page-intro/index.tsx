import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = ({ banner, footerBanner }: any) => {
  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        {banner?.items?.map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="page-intro__slide"
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}${item?.image?.data?.attributes?.url})`,
                }}
              >
                <div className="container">
                  <div className="page-intro__slide__content">
                    <h2>{item.title}</h2>
                    <a href="#" className="btn-shop">
                      <i className="icon-right"></i>
                      {item.nameButton}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            {footerBanner.items.map((item: any, index: any) => {
              return (
                <li className="flex justify-center items-center">
                  {/* <i className="icon-shipping"></i> */}
                  <div className="bg-[#fff3df] flex justify-center items-center h-8 w-8 rounded-md mx-2">
                    <img
                      className="w-4 h-4  "
                      src={
                        process.env.NEXT_PUBLIC_URL +
                        item.image.data.attributes.url
                      }
                    />
                  </div>

                  <div className="data-item__content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
