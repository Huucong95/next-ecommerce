import { useState } from "react";
// import productsColors from './../../../utils/data/products-colors';
// import productsSizes from './../../../utils/data/products-sizes';
// import CheckboxColor from './../../products-filter/form-builder/checkbox-color';
import { useDispatch } from "react-redux";
import { addProduct } from "store/reducers/cart";
import { ProductStoreType } from "types";
import { formatMoney } from "utils/format";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Content = ({ product }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [count, setCount] = useState<number>(1);

  // const [color, setColor] = useState<string>('');
  // const [itemSize, setItemSize] = useState<string>('');

  // const onColorSet = (e: string) => setColor(e);
  // const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setItemSize(e.target.value);

  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: product.slug,
      name: product.title,
      thumb: product.image.data.attributes.url,
      price: product.price,
      count: count,
    };

    const productStore = {
      count,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
    toast.success("Thêm vào giỏ hàng thành công");
  };

  return (
    <section className="product-content">
      <div className="product-content__intro">
        {/* <span className="product-on-sale">Sale</span> */}
        <h2 className="product__name">{product.title}</h2>

        <div className="product__prices">
          <h4>{formatMoney(product.price)}đ</h4>
          {product.OriginalPrice && (
            <span className="line-through">
              {formatMoney(product.OriginalPrice)}đ
            </span>
          )}
        </div>
        <div>
          <div className="text-black mt-4">{product.description}</div>
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Số lượng:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button
                type="button"
                onClick={() => setCount(count - 1)}
                className="quantity-button__btn"
              >
                -
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="quantity-button__btn"
              >
                +
              </button>
            </div>

          
          </div>
          <button
              onClick={() => {
                addToCart();
                router.push("/gio-hang");
              }}
              className=" rounded-2xl text-2xl bg-orange-400  font-bold text-white mt-12 px-24 py-4"
            >
              Đặt hàng
            </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
