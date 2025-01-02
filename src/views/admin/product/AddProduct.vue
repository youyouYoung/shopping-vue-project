<template>
    <div class="add-product">
      <h1>Add Product</h1>
      <form @submit.prevent="addProduct">
        <div>
          <label for="name">Name:</label>
          <input id="name" v-model="product.name" required />
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="product.description" required></textarea>
        </div>
        <div>
          <label for="price">Price:</label>
          <input id="price" type="number" v-model="product.price" required />
        </div>
        <div>
          <label for="stock">Stock:</label>
          <input id="stock" type="number" v-model="product.stock" required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BASE_URL } from "@/config";
  
  export default {
    data() {
      return {
        product: {
          name: "",
          description: "",
          price: 0,
          stock: 0,
        },
      };
    },
    methods: {
      async addProduct() {
        try {
          const response = await axios.post(`${BASE_URL}/api/products/`, this.product);
          alert("Product added successfully!");
          this.$router.push("/admin/products");
        } catch (error) {
          console.error("Error adding product:", error);
          alert("Failed to add product.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .add-product {
    max-width: 500px;
    margin: 0 auto;
  }
  </style>
  