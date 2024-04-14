<template>
  <nav-bar :showLibrary="showLibrary" :showWishList="showWishList"></nav-bar>
  <!-- App -->
  <div v-if="!isWishListVisible" class="container-lg p-4 d-flex flex-wrap justify-content-around">
    <book-card
      :book="book"
      :isWished="isBookInWishList(book)"
      v-for="book in books"
      :key="book.id"
      @add-to-wishlist="addToWishList"
      @remove-from-wishlist="removeFromWishList"
    ></book-card>
  </div>

  <div vi-if="isWishListVisible">
    <h1 v-for="book in wishedBooks" :key="book.id">{{ book.title }}</h1>
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
      wishedBooks: new Set([]),
      isWishListVisible: false
    }
  },
  methods: {
    showLibrary() {
      this.isWishListVisible = false
    },
    showWishList() {
      this.isWishListVisible = true
    },
    isBookInWishList(book) {
      return this.wishedBooks.has(book)
    },
    addToWishList(id) {
      this.wishedBooks.add(this.books.find((book) => book.id === id))
    },
    removeFromWishList(id) {
      this.wishedBooks.delete(this.books.find((book) => book.id === id))
    }
  }
}
</script>
