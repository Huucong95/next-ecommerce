type ProductDescriptionType = {
  show: boolean;
};

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  return (
    <section style={style} className="product-single__description">
      <div className="w-full">
        <div className="text-center text-2xl pb-12 text-black font-medium">
          Thông số kĩ thuật
        </div>
        <table className="w-[80%] mx-auto">
          <tr className="">
            <th className="">Tên sản phẩm</th>
            <td>Dụng cụ cầm tay</td>
          </tr>
          <tr>
            <th>Chất liệu</th>
            <td>Thép Nhật</td>
          </tr>
          <tr>
            <th>Lưỡi cưa</th>
            <td>công nghệ mài kim cương</td>
          </tr>
          <tr>
            <th>Xuất xứ</th>
            <td>Nhật Bản</td>
          </tr>
        </table>
      </div>
      <div className="w-full mt-12">
        <div className="text-center text-2xl pb-12 text-black font-medium">
          Giới thiệu sản phẩm
        </div>
        <div className="text-left mb-12">
          Từ trước đến nay, khi cần cưa 1 cây gỗ hoặc 1 vật dụng bằng gỗ, chúng
          ta có thể tiện tay sử dụng bất kỳ 1 loại cưa gỗ nào. Nhưng tuỳ vào
          từng loại cưa sẽ giúp việc hoàn thành nhanh hay chậm, bề mặt gỗ sau
          khi cưa có đạt yêu cầu như mong muốn hay không.&nbsp;Để đáp ứng những
          mong muốn đó, chúng tôi xin giới thiệu đến người dùng một loại cưa
          chuyên cưa gỗ, cưa cây.
        </div>
        <img className="w-full" src="https://ezmarts.vn/pictures/picfullsizes/2022/09/30/xtd1664506310.jpg" />
      </div>
    </section>
  );
};

export default Description;
