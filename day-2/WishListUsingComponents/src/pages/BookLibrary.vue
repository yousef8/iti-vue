<template>
  <div class="container-lg p-4 d-flex flex-wrap justify-content-around">
    <book-card :book="book" v-for="book in books" :key="book.id"></book-card>
  </div>
</template>

<script setup>
import books from '../assets/books.json'
import BookCard from '../components/BookCard.vue'
</script>
