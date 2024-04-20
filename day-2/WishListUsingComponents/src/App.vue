<template>
  <nav-bar :showLibrary="showLibrary" :showWishList="showWishList"></nav-bar>
  <BookLibrary v-if="!isWishListVisible" />
  <wish-list v-if="isWishListVisible"></wish-list>
</template>

<script>
import NavBar from './components/NavBar.vue'
import WishList from './pages/WishList.vue'
import BookLibrary from './pages/BookLibrary.vue'

export default {
  components: { NavBar, WishList, BookLibrary },
  data() {
    return {
      isWishListVisible: false
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
