import { useRouter } from "next/router";
import { getBlogsCategory } from "utils/api";
import Layout from "../../layouts/Main";
import BlogList from "components/blog/BlogList";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug;

  const data = await getBlogsCategory(slug, {
    pagination: {
      page: 1,
      pageSize: 9,
    },
    filters: {
      blog_category: {
        slug: {
          $eq: slug,
        },
      },
    },
    populate: "*",
  });
  return {
    props: {
      data,
    },
  };
};


const Blogs = ({ data }: any) => {
  console.log("🚀 ~ file: index.tsx:85 ~ Blogs ~ data:", data.data);
  const [detail, setDetail] = useState<any>(data.data);
  const total = data.meta.pagination.total;
  const router = useRouter();
  const slug = router.query.slug;

  const fetchProducts = async (page: number) => {
    const res = await getBlogsCategory(slug, {
      pagination: {
        page,
        pageSize: 9,
      },
      filters: {
        blog_category: {
          slug: {
            $eq: slug,
          },
        },
      },
      populate: "*",
    });
    const newProducts = res.data;
    setDetail((blogs: any) => [...blogs, ...newProducts]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBlogsCategory(slug, {
        pagination: {
          page: 1,
          pageSize: 9,
        },
        filters: {
          blog_category: {
            slug: {
              $eq: slug,
            },
          },
        },
        populate: "*",
      });
      setDetail(result.data);
    };
    fetchData();
  }, [slug]);

  return (
    <Layout>
      {data && (
        <div className="container pt-12  ">
          <h1 className="text-center font-bold text-xl bg-gray-100 py-8 mb-12">
            {detail[0]?.attributes.blog_category.data.attributes.name}{" "}
          </h1>
          <InfiniteScroll
            dataLength={detail.length}
            next={() => fetchProducts(Math.ceil(detail.length / 9) + 1)}
            hasMore={detail.length < total}
            loader={<h4>Loading...</h4>}
            endMessage={<p></p>}
          >
            <BlogList blogs={detail} />
          </InfiniteScroll>
        </div>
      )}
    </Layout>
  );
};
export default Blogs;
