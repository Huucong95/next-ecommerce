import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import { useRouter } from "next/router";

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = ({ banner }: any) => {
  const router = useRouter()
  return (
    <section className="page-intro pb-8 md:pb-20">
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
                  <div className="flex flex-col gap-12">
                    <div className="text-xl md:text-5xl ">
                      <h2 className="text-white">{item.title}</h2>
                    </div>
                    <div className="block" onClick={() => {router.push(item.urlButton)}}>
                      <div className="text-white cursor-pointer">
                        <i className="icon-right bg-orange-600 text-white p-2 rounded-full mr-2"></i>
                        {item.nameButton}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            {footerBanner.items.map((item: any, index: any) => {
              return (
                <li className="flex justify-center items-center" key={index}>
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
      </div> */}
    </section>
  );
};

export default PageIntro;
