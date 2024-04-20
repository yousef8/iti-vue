import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import books from '@/assets/books.json'

export const useWishesStore = defineStore('wishesStore', () => {
  const wishes = ref(new Set([]))

  const isWished = computed(() => (book) => {
    return wishes.value.has(book)
  })

  function addToWishes(id) {
    wishes.value.add(books.find((book) => book.id === id))
  }

  function removeFromWishes(id) {
    wishes.value.delete(books.find((book) => book.id === id))
  }

  return { wishes, isWished, addToWishes, removeFromWishes }
})
