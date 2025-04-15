<script setup>
import { computed } from 'vue'
import GenreBody from './GenreBody.vue'
import TaskBody from './TaskBody.vue'

const props = defineProps({
  body: String
})

const component = computed(() =>  {
  return props.body === 'taskBody' ? TaskBody: GenreBody
})
</script>

<template>
  <Modal v-model="showModal">
    <component :is="component" />
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