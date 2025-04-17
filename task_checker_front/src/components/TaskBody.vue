<script setup>
import Select from './Select.vue'
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore';

const task = ref({
  name: '',
  explanation: '',
  deadlineDate: '',
  image_url: '',
  status: 0,
  genreId: ''
})

const taskStore = useTaskStore();

const emit = defineEmits(['close-modal'])

const submitTask =async() => {
  taskStore.addTask(task.value);
  emit('close-modal')
}

const genreSelect = (e) => {
  task.value.genreId = Number(e.target.value)
}

const handleImageUpload = (event) => {
  task.value.image_url = event.target.files[0];
};
</script>

<template>
  <form class="modal_body">
    <h2 class="input_menu">タスクを追加</h2>
    <div>
      <h4 class="input_title">ジャンル</h4>
      <div class="task_genre">
        <Select @change="genreSelect" :value="task.genreId"/>
      </div>
      <h4 class="input_title">タイトル</h4>
      <input type="text" v-model="task.name"/>
      <h4 class="input_title">説明</h4>
      <textarea v-model="task.explanation"/>
      <h4 class="input_title">期限</h4>
      <input class="input_date" type="date" v-model="task.deadlineDate"/>
      <h4 class="input_title">画像</h4>
      <input type="file" @change="handleImageUpload" accept="image/*"/>
    </div>
    <input class="input_submit" type="button" value="送信" @click="submitTask"/>
  </form>
</template>

<style>
  .modal_body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .genre_title {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }

  .input_title {
    height: 3px;
  }

  input,
  textarea {
    border: none;
    background-color: #f3f3f3;
    padding: 16px;
    border-radius: 5px;
    width: 230px;
    line-height: 1.5em;
  }

  .input_submit {
    margin-top: 30px;
    background-color: rgb(66, 163, 247);
    color: white;
    border-radius: 25px;
    border-style: none;
    padding: 16px 40px;
    font-size: 15px;
  }
</style>