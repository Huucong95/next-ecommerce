import ProductsCarousel from "./carousel";
import Link from "next/link";

const ProductsFeatured = ({ title,products, slug }: any,) => {
  return (
    <section className=" section section-products-featured">
      <div className="container">
        <div
          className="border-b-2 border-orange-600 mb-5 flex justify-between text-xl"
          style={{ borderBottom: "1px solid #eee" }}
        >
          <div
            className="text-orange-600 font-bold flex items-center pb-2 pr-2 uppercase"
            style={{ borderBottom: "4px solid rgb(249 115 22)" }}
          >
            <Link href="#" className="font-semibold inline-block ">
              <a>{title}</a>
            </Link>
          </div>
          {/* <div className="text-sm">
            <Link href={"/danh-muc/"+slug}>Xem thêm</Link>
          </div> */}
        </div>

        <ProductsCarousel products={products} />
      </div>
    </section>
  );
};

export default ProductsFeatured;
