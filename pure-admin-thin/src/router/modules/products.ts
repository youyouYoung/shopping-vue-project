export default {
  path: "/products",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "Product",
    rank: 9
  },
  children: [
    {
      path: "/products/index",
      name: "ProductsList",
      component: () => import("@/views/product/index.vue"),
      meta: {
        title: "Product List",
        // 通过设置showParent为true，显示父级
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
