<template>
  <nav-bar :showLibrary="showLibrary" :showWishList="showWishList"></nav-bar>
  <!-- App -->
  <div v-if="!isWishListVisible" class="container-lg p-4 d-flex flex-wrap justify-content-around">
    <book-card :book="book" v-for="book in books" :key="book.id"></book-card>
  </div>

  <div vi-if="isWishListVisible">
    <h1>Wishlist Works !!!</h1>
  </div>
</template>

<script>
import books from './assets/books.json'
import BookCard from './components/BookCard.vue'
import NavBar from './components/NavBar.vue'

export default {
  components: { BookCard, NavBar },
  data() {
    return {
      books: books,
      isWishListVisible: false
    }
  },
  methods: {
    showLibrary() {
      console.log('show library')
      this.isWishListVisible = false
    },
    showWishList() {
      console.log('show wishlist')
      this.isWishListVisible = true
    }
  }
}
</script>
