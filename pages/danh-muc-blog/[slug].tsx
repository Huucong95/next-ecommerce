import { useRouter } from "next/router";
import { Pagination } from "antd";
import { getBlogsCategory } from "utils/api";
import Layout from "../../layouts/Main";
import BlogList from "components/blog/BlogList";
import { GetServerSideProps } from "next";
import { useState } from "react";
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

const Blog = (data: any) => {
  const [detail, setDetail] = useState<any>(data.data.data);
  const total = data.data.meta.pagination.total

  const router = useRouter();
  const { slug } = router.query;

  const onChange = async (e: any) => {
    const res = await getBlogsCategory(slug, {
      pagination: {
        page: e,
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
    setDetail(res.data);
  };



  return (
    <Layout>
      {data && (
        <div className="container pt-12  ">
          <h1 className="text-center font-bold text-xl bg-gray-100 py-8 mb-12">
            {detail[0]?.attributes.blog_category_child.data.attributes.name}{" "}
          </h1>
          <BlogList blogs={detail} />
          {total && (
            <Pagination
              defaultCurrent={1}
              defaultPageSize={data.data.meta.pagination.pageSize}
              total={total}
              onChange={onChange}
              className="flex justify-center"
            />
          )}
        </div>
      )}

      {/* <Footer /> */}
    </Layout>
  );
};

export default Blog;
