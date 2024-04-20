<template>
  <nav-bar :showLibrary="showLibrary" :showWishList="showWishList"></nav-bar>
  <BookLibrary v-if="!isWishListVisible" />
  <div v-if="isWishListVisible" class="container-lg p-4 d-flex flex-wrap justify-content-around">
    <wish-list></wish-list>
  </div>
</template>

<script>
import books from './assets/books.json'
import NavBar from './components/NavBar.vue'
import WishList from './pages/WishList.vue'
import BookLibrary from './pages/BookLibrary.vue'
import { useWishesStore } from './stores/wishesStore'

export default {
  components: { NavBar, WishList, BookLibrary },
  data() {
    return {
      books: books,
      isWishListVisible: false
    }
  },
  computed: {
    wishesStore() {
      return useWishesStore()
    }
  },
  methods: {
    showLibrary() {
      this.isWishListVisible = false
    },
    showWishList() {
      this.isWishListVisible = true
    }
  }
}
</script>
