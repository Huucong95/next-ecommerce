import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { getBlogsDetail } from "utils/api";
import Layout from "../../layouts/Main";
import Breadcrumb from "components/breadcrumb";
import { URL } from "utils/env";
// import Reviews from '../../components/product-single/reviews';

// types
// const REACT_IMAGE_BASE_URL = "http://localhost:1337";
const Blog = () => {
  const [detail, setDetail] = useState<any>();
  const router = useRouter();
  const { slug } = router.query;
  const fetchBlogDetail = async (slug: any) => {
    const res = await getBlogsDetail(slug);
    setDetail(res[0]);
    console.log(res[0]);
  };
  useEffect(() => {
    if (slug) {
      setDetail(null)
      fetchBlogDetail(slug);
    }
  }, [slug]);

  return (
    <Layout>
      <Breadcrumb data={"Blog"} />

      {detail && (
        <div className="container  ">
          <h1 className="text-center font-bold text-xl bg-gray-100 py-8">
            {detail.attributes.title}{" "}
          </h1>
          {detail.attributes.Content.map((item: any, index: number) => {
            return (
              <div key={index} className="content-blog">
                {item.__component === "content.ricktext" && (
                  <ReactMarkdown
                    children={item.ricktext}
                    transformImageUri={(uri) =>
                      uri.startsWith("http")
                        ? uri
                        : `${URL}${uri}`
                    }
                  />
                )}
                {item.__component === "content.video" && (
                  <video className="w-[80%] mx-auto" controls>
                    <source
                      src={
                        process.env.NEXT_PUBLIC_URL + item.video.data?.attributes.url
                      }
                      type={item.video.data.attributes.mime}
                    />
                  </video>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* <Footer /> */}
    </Layout>
  );
};

export default Blog;
