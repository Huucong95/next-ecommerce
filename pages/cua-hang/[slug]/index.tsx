import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getProducts } from "utils/api";
import InfiniteScroll from "react-infinite-scroll-component";

import Layout from "../../../layouts/Main";
import Breadcrumb from "components/breadcrumb";
import ProductsFilter from "components/products-filter";
import ProductsContent from "components/products-content";
import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug;
  console.log(slug);

  let data = null;
  data = await getProducts(slug, {
    pagination: {
      page: 1,
      pageSize: 9,
    },
    filters: {
      categories: {
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
  console.log("product", data);

  const [products, setProducts] = useState<any[]>([]);
  const total = data.meta.pagination.total;

  const router = useRouter();
  const { slug } = router.query;

  const fetchProducts = async (page: number) => {
    const res = await getProducts(slug, {
      pagination: {
        page,
        pageSize: 9,
      },
      populate: "*",
    });
    const newProducts = res.data;
    setProducts((prevProducts) => [...prevProducts, ...newProducts]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts(slug, {
        pagination: {
          page: 1,
          pageSize: 9,
        },
        filters: {
          categories: {
            slug: {
              $eq: slug,
            },
          },
        },
        populate: "*",
      });
      setProducts(result.data);
    };
    fetchData();
  }, [slug]);

  return (
    <Layout>
      <Head>{/* <title></title> */}</Head>
      <div className="pt-12">
        <Breadcrumb data="Danh sách sản phẩm" />
        <section className="products-page">
          <div className="container">
            <ProductsFilter />
            <InfiniteScroll
              dataLength={products.length}
              next={() => fetchProducts(Math.ceil(products.length / 9) + 1)}
              hasMore={products.length < total}
              loader={<h4>Loading...</h4>}
              endMessage={<p></p>}
            >
              <ProductsContent products={products} />
            </InfiniteScroll>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default React.memo(Products);
