<template>
    <div>
      <h1>Admin Dashboard</h1>
      <!-- 在这里添加你的组件 HTML 内容 -->
      <router-link to="products">Products</router-link>
      <router-link to="products/add">Add Product</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
    // 在这里添加组件的逻辑
  };
  </script>
  
  <style scoped>
  /* 在这里添加组件的样式 */
  h1 {
    color: green;
  }
  </style>
  