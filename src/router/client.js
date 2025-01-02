export default [
    {
      path: '/',
      component: () => import('@/layouts/ClientLayout.vue'),
      children: [
        { path: '', name: 'Home', component: () => import('@/views/client/Home.vue') },
        { path: 'products', name: 'Products', component: () => import('@/views/client/Product.vue') }
      ]
    }
  ];
  