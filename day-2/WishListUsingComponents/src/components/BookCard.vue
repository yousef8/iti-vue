<template>
  <div class="card" style="width: 18rem">
    <img :src="'/src/assets/' + book.imageLink" class="card-img-top" alt="book cover" />
    <div class="card-body">
      <h5 class="card-title">{{ book.title }}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Author : </b> {{ book.author }}</li>
      <li :class="[book.pages < 300 ? 'less' : 'more', 'list-group-item']">
        <b>No. Pages :</b> {{ book.pages }}
      </li>
      <li class="list-group-item"><b>Price : </b> {{ book.price }}</li>
    </ul>
    <div class="card-body">
      <a
        class="card-link"
        @click="wishesStore.addToWishes(book.id)"
        v-if="!wishesStore.isWished(book)"
        >Add to WishList</a
      >
      <a class="card-link" @click="wishesStore.removeFromWishes(book.id)" v-else
        >Remove wish list</a
      >
    </div>
  </div>
</template>

<script setup>
import { useWishesStore } from '@/stores/wishesStore'

const wishesStore = useWishesStore()

defineProps({
  book: {
    type: Object,
    author: String,
    country: String,
    imageLink: String,
    language: String,
    link: String,
    pages: Number,
    title: String,
    year: Number,
    id: Number,
    price: Number,
    required: true
  }
})
</script>
