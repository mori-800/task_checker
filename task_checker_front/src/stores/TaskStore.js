import { defineStore } from 'pinia'
import api from '../api/axios'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([]);
  const filteredTasks = ref([]);
  const searchResults = ref([]);

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
  // return { tasks, fetchAllTasks } リターンは2つは使えない、使用時には注意すること

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
   
  //  return { tasks, filteredTasks, fetchAllTasks, filterTasks } //実装時にundefinedエラーが発生、19行目のreturnが阻害していたことで機能していなかった。記録のために消さないでおく
  
  async function addTask(newTask) {
    try{
      const formData = new FormData();
      formData.append('name', newTask.name);
      formData.append('explanation', newTask.explanation);
      formData.append('deadlineDate', newTask.deadlineDate);
      formData.append('status', newTask.status);
      formData.append('genreId', newTask.genreId);
      formData.append('image_url', newTask.image_url);

      const response = await api.post('/tasks', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const addedTask = response.data;
      tasks.value.push(addedTask)
    }catch(error){
      console.log('タスクデータの保存ができませんでした', error);
    }
  }

  async function taskSearch(query) {
    if (!query) return;
    try {
      const response = await api.get('/search', {
        params: { q: query },
      });
      searchResults.value = response.data; // 検索結果を保存
    } catch (error) {
      console.error('検索に失敗しました:', error);
    }
  }
 return { tasks, filteredTasks, fetchAllTasks, filterTasks, addTask, taskSearch, searchResults}
})