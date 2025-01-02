import { createRouter, createWebHistory } from 'vue-router'
import ClientRoutes from './client';
import AdminRoutes from './admin';

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// Vue.use(VueRouter);

const routes = [
  ...ClientRoutes,  // 客户端路由
  ...AdminRoutes    // 运营端路由
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// const router = new VueRouter({
//   mode: 'history',
//   routes
// });

export default router
