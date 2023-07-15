import ProductItem from "../../product-item";
import ProductsLoading from "./loading";
const ProductsContent = ({ products }: any, loadMore: any) => {
  return (
    <>
      {!true && <ProductsLoading />}

      {true && (
        <section className=" grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((item: any, index: number) => (
            <div key={index} className="">
              <ProductItem
                id={item.attributes.slug}
                name={item.attributes.title}
                price={item.attributes.price}
                discount={item.discount}
                currentPrice={item.attributes.OriginalPrice}
                key={item.attributes.id}
                image={item.attributes?.image?.data.attributes.url}
                images={item.attributes?.images}
              />
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
