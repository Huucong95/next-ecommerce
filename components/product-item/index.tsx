// import Link from "next/link";
import { useDispatch } from "react-redux";
import { ProductStoreType, ProductTypeList } from "types";
import { useRouter } from "next/router";
import { addProduct } from "store/reducers/cart";
import { formatMoney } from "../../utils/format";
const ProductItem = ({
  image,
  id,
  name,
  price,
  currentPrice,
}: ProductTypeList) => {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(
    "🚀 ~ file: index.tsx:20 ~ router:",
    router.pathname == "/san-pham/[slug]"
  );
  const handleChange = () => {
    if (router.pathname == "/san-pham/[slug]") {
      console.log(
        "🚀 ~ file: index.tsx:23 ~ handleChange ~ router.pathname:",
        router.pathname
      );
      window.location.href = `/san-pham/${id}`;
    } else {
      router.push(`/san-pham/${id}`);
    }
  };
  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: id,
      name: name,
      thumb: image,
      price: price,
      count: 1,
    };

    const productStore = {
      count: 1,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
  };

  return (
    <div className="bg-white cursor-pointer w-full shadow hover:shadow-lg rounded-lg h-full  relative">
      <div
        onClick={() => handleChange()}
        className="bg-gray-400 h-40 md:h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}${image} )`,
        }}
      ></div>
      <div className="flex flex-col justify-items-end pb-24">
        <div className="cursor-pointer">
          <div className="flex  justify-between items-start px-2 pt-2">
            <div className="p-2 flex-grow" onClick={() => handleChange()}>
              <h1 className="mb-4 font-medium text-md font-poppins h-full">
                {name}
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-2">
          <div className="p-2 flex justify-between items-center">
            <div className="text-orange-600 font-semibold text-lg font-poppins">
              {formatMoney(price)}đ
            </div>
            <div className="text-xs text-gray-500 line-through font-poppins">
              {formatMoney(currentPrice)}
              {currentPrice && <span>đ</span>}
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row justify-between items-center  pb-2">
            <div className="w-full ">
              <button
                onClick={addToCart}
                className="block  w-full text-xs bg-gray-100 text-black hover:bg-orange-600 hover:text-white   border-2 border-orange-500 px-3 py-2 rounded uppercase font-poppins font-medium"
              >
                Thêm giỏ hàng
              </button>
            </div>

            <div className="w-full">
              <button
                onClick={() => {
                  addToCart();
                  router.push("/gio-hang/dat-hang");
                }}
                className="block w-full text-xs bg-white text-orange-500 borderPrimary px-3 py-2 rounded uppercase  font-medium"
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ProductItem;
