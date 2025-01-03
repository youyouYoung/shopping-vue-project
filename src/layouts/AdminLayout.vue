  
<template>
  <div>
    <header>
      <!-- Admin Layout Header -->
      <h1>Admin Panel</h1>
    </header>
    <nav>
      <!-- Navigation Links -->
      <router-link to="/admin">Dashboard</router-link>
      <router-link to="/admin/manage">Manage</router-link>
    </nav>
    <main>
      <!-- Render Child Routes Here -->
      <router-view />
    </main>
    <footer>
      <!-- Admin Layout Footer -->
      <p>© 2024 Admin Panel</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
};
</script>

<style scoped>
  /* 在这里添加样式，`scoped` 表示样式只作用于当前组件 */
  h1 {
    color: blue;
  }
  </style>
  