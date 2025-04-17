<script setup>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import AddCircleIcon from 'vue-material-design-icons/PlusCircleOutline.vue'
import Task from './Task.vue'
import FormModal from './FormModal.vue';

import { ref } from 'vue'

import { useTaskStore } from '../stores/TaskStore'; 
const taskStore = useTaskStore();
const showModal = ref(false)
const showTask = ref(true)
const props = defineProps({
  status: String,
  tasks: Object
})
const toggleShowTasks = () => {
  showTask.value = !showTask.value
}
</script>

<template>
  <div class="task_list">
    <div class="section">
      <MenuIcon class="section_ele" @click="toggleShowTasks"/>
      <span class="section_ele">{{ props.status }}</span>
      <AddCircleIcon
        v-if="props.status == 'ToDo'" 
        class="add_circle_outline_icon"
        @click="showModal = true"
      />
      <FormModal v-model="showModal" body="taskBody"/>
    </div>
    <!-- <div class="task_field" v-for="task in taskStore.filteredTasks" :key="task.id">
      <Task :task="task"/>
    </div> -->
    <div v-if="showTask">
      <div class="task_field" v-for="task in props.tasks" :key="task.id" >
        <Task :task="task"/>
      </div>
    </div>
  </div>
</template>

<style>
.task_list {
  min-width: 300px;
  width: auto;
  padding: 30px;
  padding-top: 50px;
}

.section {
  display: flex;
  position: relative;
  align-items: center;
  height: 50px;
  width: 300px;
  background-color: white;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.section_ele {
  color: rgb(70, 70, 70);
  margin-left: 10px;
  font-size: 18px;
}

.task_field {
  display: flex;
  flex-direction: column;
  max-height: 65vh;
  margin-top: 10px;
  overflow: auto;
}

.task_field::-webkit-scrollbar {
  display:none;
}

.section > .add_circle_outline_icon {
  position: absolute;
  right: 10px;
  font-size: 25px;
  color: rgb(70, 70, 70);
}
</style>