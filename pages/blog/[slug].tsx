import ReactMarkdown from "react-markdown";
import { getBlogsDetail } from "utils/api";
import Layout from "../../layouts/Main";
import Breadcrumb from "components/breadcrumb";
import { URL } from "utils/env";
import Head from "next/head";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const slug = query.slug;
    const res = await getBlogsDetail(slug);
    console.log(res[0]);

    return {
      props: {
        detail: res[0],
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);

    return {
      props: {
        product: null, // Return null in case of an error
      },
    };
  }
};
const Blog = ({ detail }: any) => {
  // const [detail, setDetail] = useState<any>();
  // const router = useRouter();
  // const { slug } = router.query;
  // const fetchBlogDetail = async (slug: any) => {
  //   const res = await getBlogsDetail(slug);
  //   setDetail(res[0]);
  //   console.log(res[0]);
  // };
  // useEffect(() => {
  //   if (slug) {
  //     setDetail(null);
  //     fetchBlogDetail(slug);
  //   }
  // }, [slug]);
  // console.log(detail);

  return (
    <Layout>
      {detail && detail.attributes.SEO && (
        <Head>
          <title>
            {detail.attributes?.SEO?.metaTitle
              ? detail.attributes?.SEO?.metaTitle
              : "Nông cụ"}
          </title>
          <meta
            name="viewport"
            content="viewport-fit=cover width=device-width, initial-scale=1"
          />
          <meta
            name="keywords"
            content={detail.attributes?.SEO?.metaKeywords || ""}
          ></meta>
          <meta
            name="description"
            content={detail.attributes?.SEO?.metaDescription || ""}
          ></meta>
          <meta
            property="og:title"
            content={detail.attributes?.SEO?.metaTitle || ""}
          />
          <meta
            property="og:image"
            content={URL + detail.attributes?.SEO?.image?.data.attributes.url}
          />
          <meta charSet="utf-8"></meta>
        </Head>
      )}

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
                      uri.startsWith("http") ? uri : `${URL}${uri}`
                    }
                  />
                )}
                {item.__component === "content.video" && (
                  <div dangerouslySetInnerHTML={{ __html: item.Youtube }}></div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default Blog;
