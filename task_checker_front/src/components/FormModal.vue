<script setup>
import GenreBody from './GenreBody.vue'
</script>

<template>
  <Modal v-model="showModal">
    <GenreBody />
  </Modal>
</template>

<style>
.vm {
  height: 75vh;
  padding: 2vw 10vw;
  text-align: center;
  overflow-y: auto;
}
</style>