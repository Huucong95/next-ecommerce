import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getProducts } from "utils/api";

import Layout from "../../../layouts/Main";
import Breadcrumb from "components/breadcrumb";
import ProductsFilter from "components/products-filter";
import ProductsContent from "components/products-content";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Pagination } from "antd";
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug2;
  let data = null;
  data = await getProducts(slug, {
    pagination: {
      page: 1,
      pageSize: 9,
    },
    filters: {
      category_children: {
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
const Products = ({ data }: any) => {
  console.log(data);

  const [detail, setDetail] = useState<any>(data.data);
  const total = data.meta.pagination.total;

  const router = useRouter();
  const { slug2 } = router.query;
  const onChange = async (e: any) => {
    const res = await getProducts(slug2, {
      pagination: {
        page: e,
        pageSize: 9,
      },
      filters: {
        blog_category_child: {
          slug: {
            $eq: slug2,
          },
        },
      },
      populate: "*",
    });
    setDetail(res.data);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts(slug2, {
        pagination: {
          page: 1,
          pageSize: 9,
        },
        filters: {
          category_children: {
            slug: {
              $eq: slug2,
            },
          },
        },

        populate: "*",
      });
      setDetail(result.data);
    };
    fetchData();
  }, [slug2]);
  return (
    <Layout>
      <Head>{/* <title></title> */}</Head>
      <div className="pt-12">
        <Breadcrumb data="Danh sách sản phẩm" />
        <section className="products-page">
          <div className="container">
            <ProductsFilter />
            {detail && <ProductsContent products={detail} />}
          </div>
          <div className="pt-20">
            {total && (
              <Pagination
                defaultCurrent={1}
                defaultPageSize={data.meta.pagination.pageSize}
                total={total}
                onChange={onChange}
                className="flex justify-center"
              />
            )}
          </div>
        </section>
      </div>

      {/* <Footer /> */}
    </Layout>
  );
};

export default React.memo(Products);
