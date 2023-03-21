import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url(https://www.americanelements.com/sites/public/files/images/headers/agriculture-industry-banner.jpg)" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Giả giá lên đến 50%</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Cửa hàng</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url(https://watersag.com/wp-content/uploads/2014/03/homepage-banner1.jpg)" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Chia sẽ kiến thức làm vườn</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i> Cửa hàng</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Miễn Phí Vận Chuyển</h4>
                <p>Với đơn hàng trên 200,000đ</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Giao hàng toàn quốc</h4>
                <p>Giao hàng nhanh chóng </p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Đảm bảo chất lượng</h4>
                <p>Chính sách đổi tra linh động</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro