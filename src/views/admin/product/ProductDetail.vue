<template>
    <div class="product-detail" v-if="product">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Stock: {{ product.stock }}</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BASE_URL } from "@/config";
  
  export default {
    data() {
      return {
        product: null,
      };
    },
    methods: {
      async fetchProduct() {
        try {
          const id = this.$route.params.id;
          const response = await axios.get(`${BASE_URL}/api/products/${id}`);
          this.product = response.data;
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      },
    },
    mounted() {
      this.fetchProduct();
    },
  };
  </script>
  
  <style scoped>
  .product-detail {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  