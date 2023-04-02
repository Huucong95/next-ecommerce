import Link from "next/link";
import { URL } from "../../utils/env";
import React from "react";

const BlogList = ({ blogs }: any) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mb-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogs?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer"
            >
              <Link href={`/blog/${item.attributes.slug}`}>
                <div className="relative">
                  <img
                    className="w-full h-[250px]"
                    height="60px"
                    src={`${URL}${item.attributes?.banner?.data.attributes.url}`}
                    alt={item.attributes?.banner?.data.attributes.name}
                  />

                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  <Link
                    href={`/danh-muc-blog/${item?.attributes?.blog_category_child?.data.attributes.slug}`}
                  >
                    <div className="text-xs absolute top-0 right-0 bg-orange-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      {
                        item.attributes?.blog_category_child?.data.attributes
                          .name
                      }
                    </div>
                  </Link>
                </div>
              </Link>
              <div className="px-6 py-4 mb-auto">
                <Link
                  href={`/blog/${item.attributes.slug}`}
                  className="font-medium text-lg    hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-4"
                >
                  <span className="text-black font-semibold">
                    {item.attributes.title}
                  </span>
                </Link>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {item.attributes.description}
                </p>
              </div>
              {/* <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                    <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                      <span className="ml-1">6 mins ago</span>
                    </span>
    
                    <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                      <span className="ml-1">39 Comments</span>
                    </span>
                  </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
