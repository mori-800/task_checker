import { defineStore } from 'pinia'
import api from '../api/axios'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([]);
  const filteredTasks = ref([]);

  async function fetchAllTasks () {
    try{
      const response = await api.get('/tasks')
      // console.log("response.dataの内容",response.data);//デバッグ時に追記したもの、消さないでおく
      tasks.value = response.data;
      filteredTasks.value = tasks.value;
    }catch(error){
      console.log('タスクデータの取得ができませんでした', error);
    }
  }
  // return { tasks, fetchAllTasks }リターンは2つは使えない

// // 以下を追加
//   // ジャンルデータ変更に伴うタスクのフィルタリング
  async function filterTasks(genreId) {
    const numericGenreId = Number(genreId);
     //取得したselectedGenreIdとtaskのidが同一だったらtasks.valueのデータを更新
    if(numericGenreId === 0) {
       filteredTasks.value = [...tasks.value];
     } else {
       filteredTasks.value = tasks.value.filter(task => numericGenreId === task.genreId)
     }
   }
   return { tasks, filteredTasks, fetchAllTasks, filterTasks }
 })