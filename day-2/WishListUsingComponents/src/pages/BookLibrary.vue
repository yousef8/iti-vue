<template>
  <div class="container-lg p-4 d-flex flex-wrap justify-content-around">
    <book-card
      :book="book"
      :isWished="props.isBookInWishList(book)"
      v-for="book in books"
      :key="book.id"
      @add-to-wishlist="addToWishList"
      @remove-from-wishlist="removeFromWishList"
    ></book-card>
  </div>
</template>

<script setup>
import books from '../assets/books.json'
import BookCard from '../components/BookCard.vue'

const props = defineProps({
  isBookInWishList: {
    type: Function,
    required: true
  }
})

const emit = defineEmits(['add-to-wishlist', 'remove-from-wishlist'])

function addToWishList(bookId) {
  emit('add-to-wishlist', bookId)
}

function removeFromWishList(bookId) {
  emit('remove-from-wishlist', bookId)
}
</script>
