<script setup>
import { onMounted, watch, computed} from 'vue'
import { useRoute } from 'vue-router'
import Header from './Header.vue'
import { useTaskStore } from '../stores/TaskStore';
import Task from './Task.vue';

const route = useRoute()
const taskStore = useTaskStore();

const searchQuery = computed(() => route.query.q || '')

const performSearch = async (query) => {
  try {
    await taskStore.taskSearch(query);
  } catch (error) {
    console.error('検索に失敗しました:', error)
  }
}

watch(() => route.query.q, (newQuery) => {
  performSearch(newQuery)
})


onMounted(async () => {
  if (searchQuery.value) {
    await taskStore.taskSearch(searchQuery.value);
  }
})
</script>

<template>
  <div class="main">
    <Header />
    <div class="contents">
      <div class="task_field" v-for="task in taskStore.searchResults" :key="task.id" >
        <Task :task="task"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>