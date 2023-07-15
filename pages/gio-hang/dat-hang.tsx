import Layout from "../../layouts/Main";
import { useDispatch, useSelector } from "react-redux";
import CheckoutStatus from "../../components/checkout-status";
import CheckoutItems from "../../components/checkout/items";
import { RootState } from "store";
import { formatMoney } from "utils/format";
import { useRouter } from "next/router";
import { useState } from "react";
import { postOrder } from "utils/api";
import { toast } from "react-toastify";
import { clearCart } from "store/reducers/cart";
const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any>();

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }
    return totalPrice;
  });
  const carts = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;

    return cartItems;
  });
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    note: "",
    phone: "",
    address: "",
  });
  const [formDataErr, setFormDataErr] = useState({
    name: "",
    note: "",
    phone: "",
    address: "",
  });

  const onSubmit = async () => {
    const isValid = validateForm();
    const data = {
      name: formData.name,
      note: formData.note,
      phone: formData.phone,
      address: formData.address,
      productItems: carts.map((item) => {
        return {
          ProductName: item.name,
          quantity: item.count,
          price: item.price,
        };
      }),
    };

    if (!isValid) {
      return;
    } else {
      const res = await postOrder(data);
      if (res.data.attributes.name) {
        toast.success("Đặt hàng thành công");
        setData(res.data.attributes);
        dispatch(clearCart());
        setFormData({
          name: "",
          note: "",
          phone: "",
          address: "",
        });
      }

      // const requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name: "name", email: "email" })
      // };
      // fetch('https://formsubmit.co/ztbee@yopmail.com', requestOptions)
      //   .then(response => response.json())
      //   .then(data => console.log(data));
    }
  };
  const validateForm = () => {
    let errors = {
      name: "",
      note: "",
      phone: "",
      address: "",
    };
    let isValid = true;

    if (!formData.name) {
      errors.name = "Tên không được để trống";
      isValid = false;
    }

    // if (!formData.note) {
    //   errors.email = "Email không được để trống";
    //   isValid = false;
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   errors.email = "Email không hợp lệ";
    //   isValid = false;
    // }

    if (!formData.phone) {
      errors.phone = "Số điện thoại không được để trống";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Số điện thoại không hợp lệ";
      isValid = false;
    }

    if (!formData.address) {
      errors.address = "Địa chỉ không được để trống";
      isValid = false;
    }

    setFormDataErr(errors);
    return isValid;
  };

  return (
    <Layout>
      <section className="cart">
        {!data ? (
          <div className="container">
            <div className="cart__intro">
              <h3 className="cart__title">Đặt hàng</h3>
              <CheckoutStatus step="checkout" />
            </div>

            <div className="checkout-content m md:flex-row-reverse">
              <div className="checkout__col-6">
                <div className="block">
                  <h3 className="block__title">Thông tin của bạn</h3>
                  <form className="form">
                    <div className="form__input-row form__input-row--two">
                      <div className="form__col">
                        <input
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="form__input form__input--sm"
                          type="text"
                          placeholder="Tên"
                        />
                        <div className="text-red-500">{formDataErr.name} </div>
                      </div>
                      <div className="form__col">
                        <input
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="form__input form__input--sm"
                          type="text"
                          placeholder="Số điện thoại"
                        />
                        <div className="text-red-500">{formDataErr.phone} </div>
                      </div>
                    </div>

                    <div className="form__input-row form__input-row">
                      <div className="form__col">
                        <input
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                          className="form__input form__input--sm"
                          type="text"
                          placeholder="Địa chỉ"
                        />
                        <div className="text-red-500">
                          {formDataErr.address}{" "}
                        </div>
                      </div>
                    </div>

                    <div className="form__input-row form__input-row">
                      <div className="form__col">
                        <textarea
                          value={formData.note}
                          onChange={(e) =>
                            setFormData({ ...formData, note: e.target.value })
                          }
                          rows={6}
                          cols={5}
                          className="form__input textarea2"
                          placeholder="Ghi chú"
                        />
                        {/* <div className="text-red-500">{formDataErr.email} </div> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="checkout__col-6">
                <div className="block">
                  <h3 className="block__title">Giỏ hàng của bạn</h3>
                  <CheckoutItems />

                  <div className="checkout-total">
                    <p>Tổng thanh toán</p>
                    <h3>{formatMoney(priceTotal)}đ</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-actions cart-actions--checkout">
              <a href="/gio-hang" className="cart__btn-back">
                <i className="icon-left"></i> Quay lại
              </a>
              <div className="cart-actions__items-wrapper ">
                <button
                  onClick={() => router.push("/cua-hang")}
                  type="button"
                  className="btn btn--rounded btn--border"
                >
                  Tiếp tục mua hàng
                </button>
                <button
                  onClick={() => onSubmit()}
                  type="button"
                  className="btn btn--rounded btn--yellow"
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <section className="py-24">
              <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                  <span className="inline-block mx-auto mb-6">
                    <svg
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.9999 0.333374C12.3066 0.333374 0.333252 12.3067 0.333252 27C0.333252 41.6934 12.3066 53.6667 26.9999 53.6667C41.6933 53.6667 53.6666 41.6934 53.6666 27C53.6666 12.3067 41.6933 0.333374 26.9999 0.333374ZM39.7466 20.8667L24.6266 35.9867C24.2532 36.36 23.7466 36.5734 23.2133 36.5734C22.6799 36.5734 22.1733 36.36 21.7999 35.9867L14.2533 28.44C13.4799 27.6667 13.4799 26.3867 14.2533 25.6134C15.0266 24.84 16.3066 24.84 17.0799 25.6134L23.2133 31.7467L36.9199 18.04C37.6933 17.2667 38.9733 17.2667 39.7466 18.04C40.5199 18.8134 40.5199 20.0667 39.7466 20.8667Z"
                        fill="#AFFF0F"
                      ></path>
                    </svg>
                  </span>
                  <span className="block mb-1 text-sm font-bold text-indigo-500">
                    Đặt hàng thành công
                  </span>
                  <h3 className="text-2xl font-black mb-5">
                    Đơn hàng của bạn đã được đặt thành công
                  </h3>
                  <p className="text-lg font-base mb-12">
                    Cảm ơn{" "}
                    <span className="text-black font-bold">{data.name} </span>{" "}
                    đã đặt hàng tại website của chúng tôi, Chúng tôi sẽ liên lạc
                    lại với bạn trong thời gian sớm nhất
                  </p>

                  <div
                    onClick={() => {
                      router.push("/cua-hang");
                    }}
                    className="group cursor-pointer relative inline-block h-12 w-full xs:w-60 bg-blueGray-900 rounded-md"
                  >
                    <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                      <div className="flex h-full w-full items-center justify-center bg-orange-300 border-2 border-black rounded-md">
                        <span className="text-base font-black text-white">
                          Tiếp tục mua hàng
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default CheckoutPage;
