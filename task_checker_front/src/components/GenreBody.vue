<script setup>
import CancelIcon from 'vue-material-design-icons/CloseCircle.vue'
</script>

<template>
    <div class="modal_body">
      <h2 class="input_menu">ジャンル編集</h2>
      <ul>
        <li class="genre_title">
          <span>ジャンルの名前</span>
          <CancelIcon />
        </li>
      </ul>
      <input type="text" />
      <input class="input_submit" type="button" value="追加" />
    </div>
</template>

<style>
.genre_title {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.input_title {
  height: 3px;
}

.modal_body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.delete_button {
  margin-top: 20px;
  border-style: none;
  font-size: 12px;
  color: rgb(196, 82, 53);
  border-bottom: medium solid rgb(196, 82, 53);
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