import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getProducts } from "utils/api";

import Layout from "../../../layouts/Main";
import Breadcrumb from "components/breadcrumb";
import ProductsFilter from "components/products-filter";
import ProductsContent from "components/products-content";
import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug2;
  console.log(slug);
  
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
  console.log("product", data);

  const [products, setProducts] = useState<any[]>([]);
  const total = data.meta.pagination.total;

  const router = useRouter();
  const { slug } = router.query;

  const handleInfiniteScroll = async () => {
    const currentPage = Math.ceil(products.length / 9) + 1;
    if (currentPage > total) return; // Kiểm tra nếu trang hiện tại bằng tổng số trang thì không tải thêm

    const res = await getProducts(slug, {
      pagination: {
        page: currentPage,
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
    const newProducts = res.data;
    setProducts(prevProducts => [...prevProducts, ...newProducts]);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        handleInfiniteScroll();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [products.length, total]);

  return (
    <Layout>
      <Head>{/* <title></title> */}</Head>
      <div className="pt-12">
        <Breadcrumb data="Danh sách sản phẩm" />
        <section className="products-page">
          <div className="container">
            <ProductsFilter />
            {products && <ProductsContent products={products} />}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default React.memo(Products);
