import Link from "next/link";

const Blogs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mb-20 ">
      <div
        className="border-b-2 border-orange-600 mb-5 flex justify-between text-xl"
        style={{ borderBottom: "1px solid #eee" }}
      >
        <div
          className="text-orange-600 font-bold flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase"
          style={{ borderBottom: "4px solid rgb(249 115 22)" }}
        >
          <Link href="#" className="font-semibold inline-block ">
            Bài viết mới
          </Link>
        </div>
        <div className="text-sm">
          <Link href="#">Xem thêm</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer">
          <Link href="#">
            <div className="relative">
              <img
                className="w-full h-68"
                src="https://bancaynoithat.com/kcfinder/upload2018/images/kh%C3%A1ch%20%C4%91%E1%BA%BFn%20l%E1%BB%B1a%20hoa%20c%C3%BAc%20m%C3%A2m%20x%C3%B4i%20v%C3%A0ng.jpg"
                alt="Sunset in the mountains"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <Link href="#!">
                <div className="text-xs absolute top-0 right-0 bg-orange-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Chia sẻ
                </div>
              </Link>
            </div>
          </Link>
          <div className="px-6 py-4 mb-auto">
            <Link
              href="#"
              className="font-medium text-lg    hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-4"
            >
              <span className="text-black font-semibold">
                {" "}
                HOA TẾT Ở ĐỒNG THÁP: CÚC MÂM XÔI NHIỄM BỆNH 'CHẾT NHÁT'
              </span>
            </Link>
            <p className="text-gray-500 text-sm">
              Trong đó, cúc mâm xôi là loại hoa có thời gian trồng dài nhất
              trong các loại hoa Tết....
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <span className="ml-1">6 mins ago</span>
            </span>

            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <span className="ml-1">39 Comments</span>
            </span>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer">
          <Link href="#">
            <div className="relative">
              <img
                className="w-full h-68"
                src="https://caycanhnoithat.vn/uploads/chumot.jpg"
                alt="Sunset in the mountains"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <Link href="#!">
                <div className="text-xs absolute top-0 right-0 bg-orange-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Chia sẻ
                </div>
              </Link>
            </div>
          </Link>
          <div className="px-6 py-4 mb-auto">
            <Link
              href="#"
              className="font-medium text-lg    hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-4"
            >
              <span className="text-black font-semibold">
                Những Loài Hoa Leo Đẹp - Dễ Trồng Và Chăm Sóc
              </span>
            </Link>
            <p className="text-gray-500 text-sm">
              Trong đó, cúc mâm xôi là loại hoa có thời gian trồng dài nhất
              trong các loại hoa Tết....
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <span className="ml-1">6 mins ago</span>
            </span>

            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <span className="ml-1">39 Comments</span>
            </span>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer">
          <Link href="#">
            <div className="relative">
              <img
                className="w-full h-68"
                src="https://caycanhnoithat.vn/uploads/2021/tu-van-huong-dan-trong-cham-soc/hop-go-ghe-ngoi_400x300.jpg"
                alt="Sunset in the mountains"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <Link href="#!">
                <div className="text-xs absolute top-0 right-0 bg-orange-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Chia sẻ
                </div>
              </Link>
            </div>
          </Link>
          <div className="px-6 py-4 mb-auto">
            <Link
              href="#"
              className="font-medium text-lg    hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-4"
            >
              <span className="text-black font-semibold">
                Giải pháp cây xanh cho văn phòng nhỏ hẹp
              </span>
            </Link>
            <p className="text-gray-500 text-sm">
              Trong đó, cúc mâm xôi là loại hoa có thời gian trồng dài nhất
              trong các loại hoa Tết....
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <span className="ml-1">6 mins ago</span>
            </span>

            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <span className="ml-1">39 Comments</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
