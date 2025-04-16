<script setup>
import { useGenreStore } from '../stores/GenreStore';
const genreStore = useGenreStore();
</script>

<template>
  <select class="select">
    <option v-for="genre in genreStore.genres" :key="genre.id" :value=genre.id>{{ genre.name }}</option>
  </select>
</template>
<style scoped>
.select {
  width: 150px;
  height: 25px;
  font-size: 15px;
  color: rgb(70, 70, 70);
  border: none;
  border-bottom: thin solid #cfcfcf;
  outline: none;
  cursor: pointer;
}
</style>