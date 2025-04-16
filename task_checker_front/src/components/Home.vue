<script setup>
import Header from './Header.vue'
import Select from './Select.vue'
import ToDoList from './ToDoList.vue'
import AddCircleIcon from 'vue-material-design-icons/PlusCircleOutline.vue'
import FormModal from './FormModal.vue'
import { ref, onMounted } from 'vue'
import { useTaskStore } from '../stores/TaskStore'
import { useGenreStore } from '../stores/GenreStore'
const showModal = ref(false);
const taskStore = useTaskStore();
const genreStore = useGenreStore();
const changeSelectedGenreId = (e) => {
  const selectGenreId = e.target.value;
  taskStore.filterTasks(selectGenreId);
}
const filterTasksByStatus = (statusIndex) => {
  const index = statusIndex
  return taskStore.filteredTasks.filter(task => task.status == index);
}
const taskStatusElements = [
    "ToDo",
    "Pending",
    "Doing(ToDay)",
    "WIP",
    "Check",
    "Done",
  ]


onMounted(async()=> {
  try{
    await taskStore.fetchAllTasks();
  }catch(error){
    console.log(error)
  }

  try {
    await genreStore.fetchAllGenres();
  }catch(error){
    console.log(error)
  }
})
</script>

<template>
  <div class="main">
    <Header />
    <div class="genre">
      <Select @change="changeSelectedGenreId"/>
      <AddCircleIcon class="add_circle_outline_icon" @click="showModal = true"/>
      <FormModal v-model="showModal" body="genreBody"/>    </div>
    <div class="contents">
      <ToDoList v-for="(status, index) in taskStatusElements" :key="index" :status="status"/>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  background-color: #f6f8f9;
}

.genre {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding-top: 20px;
}

.add_circle_outline_icon {
  margin-left: 10px;
  color: rgb(70, 70, 70);
}

.contents {
  display: flex;
  height: calc(100vh - 120px);
  width: 100%;
  overflow: auto;
}
</style>