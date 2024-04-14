<template>
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
      <tr v-for="book in wishedBooks" :key="book.id">
        <td>{{ book.id }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.category }}</td>
        <td>{{ book.price }}</td>
        <td><a @click="$emit('remove-from-wishlist', book.id)">Remove</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    wishedBooks: Array
  },
  emits: ['remove-from-wishlist']
}
</script>
