<template>
  <div class="container-lg p-4 d-flex flex-wrap justify-content-around">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in wishesStore.wishes" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.category }}</td>
          <td>{{ book.price }}</td>
          <td><a @click="wishesStore.removeFromWishes(book.id)">Remove</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useWishesStore } from '@/stores/wishesStore'
const wishesStore = useWishesStore()
</script>
