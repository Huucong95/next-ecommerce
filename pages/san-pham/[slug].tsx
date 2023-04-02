import { GetServerSideProps } from "next";

// import Footer from "../../components/footer";
import Layout from "../../layouts/Main";
// import Breadcrumb from "../../components/breadcrumb";
import Gallery from "../../components/product-single/gallery";
import Content from "../../components/product-single/content";
import Description from "../../components/product-single/description";
// import Reviews from '../../components/product-single/reviews';

// types
import { getFeaturedProducts, getProduct } from "utils/api";
import { ProductStoreType } from "types";
import { useDispatch } from "react-redux";
import { addProduct } from "store/reducers/cart";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import ProductsFeatured from "components/products-featured";
import { formatMoney } from "utils/format";
import { URL } from "utils/env";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug;
  const res = await getProduct(slug);
  const product = await res[0].attributes;
  const products = await getFeaturedProducts();

  return {
    props: {
      product,
      products,
    },
  };
};

const Product = ({ product, products }: any) => {
  console.log(products);

  const router = useRouter();

  const dispatch = useDispatch();

  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: product.slug,
      name: product.title,
      thumb: product.image?.data.attributes.url,
      price: product.price,
      count: 1,
      // color: color,
      // size: itemSize
    };

    const productStore = {
      count: 1,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
  };
  console.log(product);

  return (
    <Layout>
      <Head>
        <title>{product.SEO.metaTitle}</title>
        <meta
          name="viewport"
          content="viewport-fit=cover width=device-width, initial-scale=1"
        />
        <meta name="keywords" content={product.SEO?.metaKeywords || ""}></meta>
        <meta
          name="description"
          content={product.SEO?.metaDescription || ""}
        ></meta>
        <meta property="og:title" content={product.SEO?.metaTitle || ""} />
        <meta charSet="utf-8"></meta>
      </Head>
      {product && (
        <>
          {/* <Breadcrumb /> */}
          <section className="product-single mt-12">
            <div className="container">
              <div className="product-single__content">
                {product && (
                  <Gallery images={product.images} image={product.image} />
                )}
                <Content product={product} />
              </div>

              <div className="grid grid-cols-1">
                <div className="product-single__info">
                  <div className="product-single__info-btns">
                    <button
                      type="button"
                      className={`btn btn--rounded btn--active`}
                    >
                      Thông tin sản phẩm
                    </button>
                  </div>

                  <Description content={product.Content} />
                  <div className="flex justify-center w-full">
                    <button
                      onClick={() => {
                        addToCart();
                        router.push("/gio-hang");
                      }}
                      className=" rounded-2xl bg-orange-400  font-bold text-white mt-12 px-24 py-4"
                    >
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="product-single-page">
            <div className="">
              {products && (
                <ProductsFeatured
                  title={"Sản phẩm nổi bật"}
                  products={products}
                  slug={"san-pham-noi-bat"}
                />
              )}
            </div>
          </div>
          {/* <Footer /> */}
        </>
      )}
    </Layout>
  );
};

export default Product;
