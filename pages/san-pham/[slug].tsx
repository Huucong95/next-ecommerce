import { GetServerSideProps } from "next";

// import Footer from "../../components/footer";
import Layout from "../../layouts/Main";
// import Breadcrumb from "../../components/breadcrumb";
import Gallery from "../../components/product-single/gallery";
import Content from "../../components/product-single/content";
import Description from "../../components/product-single/description";
// import Reviews from '../../components/product-single/reviews';

// types
import { getProduct } from "utils/api";
import { ProductStoreType } from "types";
import { useDispatch } from "react-redux";
import { addProduct } from "store/reducers/cart";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug;
  const res = await getProduct(slug);
  const product = await res[0].attributes;

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }: any) => {
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
  return (
    <Layout>
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
                    className="mt-12   mx-auto  btn btn--rounded btn--yellow "
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="product-single-page">
            {/* <ProductsFeatured title={"Gợi ý cho bạn"} /> */}
          </div>
          {/* <Footer /> */}
        </>
      )}
    </Layout>
  );
};

export default Product;
