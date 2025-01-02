<template>
    <div class="product-list">
      <h1>Products</h1>
      <div v-for="product in products" :key="product.id" class="product-item">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <p>Stock: {{ product.stock }}</p>
        <button @click="viewProduct(product.id)">View Details</button>
        <button @click="deleteProduct(product.id)">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BASE_URL } from "@/config";
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get(`${BASE_URL}/api/products/`);
          this.products = response.data;
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
      async deleteProduct(id) {
        if (!confirm("Are you sure you want to delete this product?")) return;
  
        try {
          await axios.delete(`${BASE_URL}/api/products/${id}`);
          alert("Product deleted successfully!");
          this.fetchProducts();
        } catch (error) {
          console.error("Error deleting product:", error);
          alert("Failed to delete product.");
        }
      },
      viewProduct(id) {
        this.$router.push(`/admin/products/${id}`);
      },
    },
    mounted() {
      this.fetchProducts();
    },
  };
  </script>
  
  <style scoped>
  .product-list {
    max-width: 800px;
    margin: 0 auto;
  }
  .product-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  