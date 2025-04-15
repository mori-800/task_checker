<script setup>
import Select from './Select.vue'
</script>

<template>
  <form class="modal_body">
    <h2 class="input_menu">タスクを追加</h2>
    <div>
      <h4 class="input_title">ジャンル</h4>
      <div class="task_genre">
        <Select />
      </div>
      <h4 class="input_title">タイトル</h4>
      <input type="text" />
      <h4 class="input_title">説明</h4>
      <textarea />
      <h4 class="input_title">期限</h4>
      <input class="input_date" type="date" />
      <h4 class="input_title">画像</h4>
      <input type="file" accept="image/*"/>
    </div>
    <input class="input_submit" type="button" value="送信" />
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