import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_URL || "http://localhost:1337"}${path}`;
}
const token =
  "656371a69fc919f398b7eee149d4793e364e83e7f95d2969674acf1ddf5e12b01010bd4d40ed95e91643a9791eaddcf6e23017668aa32428a58a98f180e3d62ddae1294e713d77694afec87f7b60b67b12efe0f9daf1e69c8c553796712420b68d6c3f3f9a344c2d247278d397e4ab6ff2ef08511e3514c4d7e4dda2db91c4e2";
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

export async function postAPI(
  path,
  urlParamsObject = {},
  options = {},
  method = "POST",
  orderData
) {
  // Merge default and user options
  console.log(orderData);
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: method,
    body: JSON.stringify({ data: { ...orderData } }),
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}
export async function getMenus() {
  const menus = await fetchAPI("/menus", {
    populate: "*",
  });
  return menus?.data;
}

export async function getContact() {
  const contact = await fetchAPI("/contact", {
    populate: "*",
  });
  return contact;
}
export async function getIndex() {
  const index = await fetchAPI("/home", {
    populate: {
      banner: {
        populate: {
          items: {
            populate: "*",
          },
        },
      },
      featureds: {
        populate: {
          items: {
            populate: "*",
          },
        },
      },
      SEO: {
        populate: {
          items: {
            populate: "*",
          },
        },
      },
      // BannerFooter: {
      //   populate: {
      //     items: {
      //       populate: "*",
      //     },
      //   },
      // },
      // WhyChooseUs: {
      //   populate: {
      //     items: {
      //       populate: "*",
      //     },
      //   },
      // },
    },
  });
  return index?.data.attributes;
}
export async function getBlogsIndex() {
  const index = await fetchAPI("/blogs", {
    populate: {
      banner: {
        populate: {
          items: {
            populate: "*",
          },
        },
      },
      Content: {
        populate: "*",
      },
    },
    populate: "*",
  });
  return index?.data;
}
export async function getCategory() {
  const index = await fetchAPI("/categories", {
    populate: "*",
  });
  return index?.data;
}
export async function getFooter() {
  const index = await fetchAPI("/footer", {
    populate: {
      items: {
        populate: "*",
      },
      ListSocial: {
        populate: "*",
      },
    },
  });
  return index?.data;
}
export async function getBlogsDetail(slug) {
  const index = await fetchAPI(
    `/blogs`,

    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        banner: {
          populate: {
            items: {
              populate: "*",
            },
          },
        },
        Content: {
          populate: ["video", "*"],
        },
        SEO: {
          populate: "*"
        },
      },
    }
  );
  return index?.data;
}
export async function getBlogsCategoryChild(slug, query) {
  const index = await fetchAPI(`/blogs`, query);
  return index;
}
export async function getProductHot() {
  const index = await fetchAPI("/products", {
    filters: {
      category_children: {
        slug: {
          $eq: "san-pham-ban-chay",
        },
      },
    },
    // populate: {

    // },
    populate: "*",
  });
  return index?.data;
}
export async function getProductNew() {
  const index = await fetchAPI("/products", {
    filters: {
      category_children: {
        slug: {
          $eq: "san-pham-moi",
        },
      },
    },
    // populate: {

    // },
    populate: "*",
  });
  return index?.data;
}
export async function getProducts(slug, query) {
  const index = await fetchAPI("/products",query);
  return index;
}
export async function getProduct(slug) {
  const index = await fetchAPI("/products", {
    filters: {
      slug: {
        $eq: slug,
      },
    },

    populate: {
      images: {
        populate: "*",
      },
      image: {
        populate: "*",
      },
      Content: {
        populate: ["video", "*"],
      },
      SEO: {
        populate: "*"
      },
    },
  });
  return index?.data;
}
export async function postOrder(orderData) {
  try {
    const response = await postAPI("/orders", {}, {}, "POST", orderData);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
