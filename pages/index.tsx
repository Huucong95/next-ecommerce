import Layout from "../layouts/Main";
import { GetServerSideProps } from "next";

import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Blogs from "../components/blog";
import {
  getBlogsIndex,
  getIndex,
  getProductHot,
  getProductNew,
} from "../utils/api";
import Head from "next/head";
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
  const seo = await resHome.SEO;
  const featureds = await resHome.featureds;

  return {
    props: {
      blogs,
      productHot,
      productNew,
      banner,
      featureds,
      seo,
    },
  };
};

const IndexPage = ({
  blogs,
  productHot,
  productNew,
  banner,
  featureds,
  seo,
}: any) => {
  console.log(seo);

  return (
    <Layout>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta
          name="viewport"
          content="viewport-fit=cover width=device-width, initial-scale=1"
        />
        <meta name="keywords" content={seo?.metaKeywords || ""}></meta>
        <meta name="description" content={seo?.metaDescription || ""}></meta>
        <meta property="og:title" content={seo?.metaTitle || ""} />
        <meta charSet="utf-8"></meta>
      </Head>
      <PageIntro banner={banner} />
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
      {/* <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Tại sao bạn nên chọn chúng tôi?</h4>
          </header>

          <ul className="shop-data-items">
            {WhyChooseUs.items.map((item: any, index: any) => {
              return (
                <li key={index}>
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
      <Subscribe /> */}
    </Layout>
  );
};

export default IndexPage;
