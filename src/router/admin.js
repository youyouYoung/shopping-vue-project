import AddProduct from "@/views/admin/product/AddProduct.vue";
import ProductList from "@/views/admin/product/ProductList.vue";
import ProductDetail from "@/views/admin/product/ProductDetail.vue";

export default [
    {
      path: '/admin',
      // component: () => import('@/layouts/AdminLayout.vue'),
      children: [
        { path: '', name: 'Dashboard', component: () => import('@/views/admin/Dashboard.vue') },
        { path: 'manage', name: 'Manage', component: () => import('@/views/admin/Manage.vue') },
        { path: "products", component: ProductList },
        { path: "products/add", component: AddProduct },
        { path: "products/:id", component: ProductDetail },
      ]
    }
  ];
  