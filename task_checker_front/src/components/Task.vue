<script setup>
import Select from './Select.vue'
</script>

<template>
   <div className="task">
      <span className="task_date">2021-01-01</span>
      <div className="task_text_contents">
        <h3 className="task_title">タスク名</h3>
        <p className="task_sentence">タスクの説明</p>
        <div class="image-container">
          <div class="image-wrapper">
            <img
              :src="'https://tech-master.s3.amazonaws.com/uploads/curriculums/images/Rails1-4/sample.jpg'"
              class="task-image"
            />
          </div>
        </div>
      </div>
      <div className="task_input_contents">
        <Select />
      </div>
    </div>
</template>

<style>
.task {
  background-color: white;
  max-height: 350px;
  width: 300px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  top: 0;
  transition: top left ease 0.2s;
}

.task:hover {
  top: -2px;
  left: -2px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
}

.task_text_contents {
  padding: 30px 45px 0 20px;
}

.task_title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(70, 70, 70);
  font-size: 15px;
  margin-bottom: 10px;
}

.task_sentence {
  overflow: hidden;
  color: rgb(70, 70, 70);
  font-size: 12px;
  text-align: start;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.task_date {
  position: absolute;
  top: 20px;
  left: 20px;
  color: rgb(133, 133, 133);
  font-size: 11px;
}

.task_input_contents {
  padding: 0 20px 20px 20px;
}


.image-container {
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-left: 20px;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.task-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>