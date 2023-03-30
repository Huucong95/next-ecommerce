import Layout from "../layouts/Main";
import { GetServerSideProps } from "next";

import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Subscribe from "../components/subscribe";
import Blogs from "../components/blog";
import {
  getBlogsIndex,
  getIndex,
  getProductHot,
  getProductNew,
} from "../utils/api";
export const getServerSideProps: GetServerSideProps = async ({}) => {
  // const slug = query.slug;
  const resBlog = await getBlogsIndex();
  const blogs = await resBlog;
  const resProductHot = await getProductHot();
  const productHot = await resProductHot;

  const resProductNew = await getProductNew();
  const productNew = await resProductNew;

  const resHome = await getIndex();
  const banner = await resHome.banner;
  const featureds = await resHome.featureds;
  const footerBanner = await resHome.BannerFooter;
  const WhyChooseUs = await resHome.WhyChooseUs;

  return {
    props: {
      blogs,
      productHot,
      productNew,
      banner,
      featureds,
      footerBanner,
      WhyChooseUs,
    },
  };
};

const IndexPage = ({
  blogs,
  productHot,
  productNew,
  banner,
  featureds,
  footerBanner,
  WhyChooseUs,
}: any) => {
  console.log(WhyChooseUs);

  return (
    <Layout>
      <PageIntro banner={banner} footerBanner={footerBanner} />

      <section className="featured">
        <div className="container">
          {featureds?.items?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}${item?.image?.data?.attributes?.url})`,
                }}
                className={`featured-item ${
                  index == 0 ? "featured-item-large" : "featured-item-" + index
                } ${index == 1 ? "featured-item-" + index : ""}`}
              >
                <div className="featured-item__content">
                  <h3>{item.title}</h3>
                  <a href={item.urlButton} className="btn btn--rounded">
                    {item.nameButton}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {productHot && (
        <ProductsFeatured
          title={"Sản phẩm bán chạy"}
          products={productHot}
          slug={"san-pham-ban-chay"}
        />
      )}
      {productNew && (
        <ProductsFeatured
          title={"Sản phẩm mới"}
          products={productNew}
          slug={"san-pham-moi"}
        />
      )}
      <Blogs blogs={blogs} />
      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Tại sao bạn nên chọn chúng tôi?</h4>
          </header>

          <ul className="shop-data-items">
            {WhyChooseUs.items.map((item: any, index: any) => {
              return (
                <li key={index}>
                  {/* <i className="icon-shipping"></i> */}
                  <div className="hover:bg-[#fff3df] flex justify-center items-center h-16 w-16 cursor-pointer rounded-md mx-2">
                    <img
                      className="w-8 h-8  "
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
      </section>
      <Subscribe />
    </Layout>
  );
};

export default IndexPage;
