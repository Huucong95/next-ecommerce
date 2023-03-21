import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import Blogs from "../components/blog"

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(https://gumicstore.com/storage/gumicstorecom/18783/ztg1629192130.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Kéo cắt cành trên cao</h3>
              <a href="#" className="btn btn--rounded">Xem danh mục</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(https://rausaykho.com/uploads/slider/image/emart-slide-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Giảm giá hạt giống</h3>
              <a href="#" className="btn btn--rounded">Xem chi tiết</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(https://case.vn/DataNews/News/570/IMG_5890-thumb-640xauto-253.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Túi bảo vệ trái cây</h3>
              <a href="#" className="btn btn--rounded">Xem thêm</a>
            </div>
          </article>
        </div>
      </section>

  
      <ProductsFeatured title={"Dành cho bạn"} />
      <ProductsFeatured title={"Sản phẩm mới"} />
      <ProductsFeatured  title={"Sản phẩm bán chạy"}/>
      <Blogs/>
      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Tại sao bạn nên chọn chúng tôi?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Miễn phí vận chuyển</h4>
                <p>All purchases over $199 are eligible for free shipping via USPS First Class Mail.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Dễ dàng thanh toán</h4>
                <p>All payments are processed instantly over a secure payment protocol.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Chính sách đổi hàng linh hoạt</h4>
                <p>If an item arrived damaged or you've changed your mind, you can send it
                back for a full refund.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Chất lượng sản phẩm cao</h4>
                <p>Designed to last, each of our products has been crafted with the finest materials.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage