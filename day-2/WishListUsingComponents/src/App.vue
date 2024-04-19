<template>
  <nav-bar :showLibrary="showLibrary" :showWishList="showWishList"></nav-bar>
  <BookLibrary
    v-if="!isWishListVisible"
    :is-book-in-wish-list="isBookInWishList"
    @add-to-wishlist="addToWishList"
    @remove-from-wishlist="removeFromWishList"
  />
  <div v-if="isWishListVisible" class="container-lg p-4 d-flex flex-wrap justify-content-around">
    <wish-list :wishedBooks="wishedBooks" @remove-from-wishlist="removeFromWishList"></wish-list>
  </div>
</template>

<script>
import books from './assets/books.json'
import NavBar from './components/NavBar.vue'
import WishList from './components/WishList.vue'
import BookLibrary from './pages/BookLibrary.vue'

export default {
  components: { NavBar, WishList, BookLibrary },
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
