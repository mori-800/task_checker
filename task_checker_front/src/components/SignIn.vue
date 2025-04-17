<script setup>
import { auth, signInWithEmailAndPassword } from '../firebase';
import Header from './Header.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
</script>

<template>
  <Header />
  <div class="form-body">
    <h1>ログイン</h1>
    <input type="text" id="email" placeholder="email">
    <input type="password" id="password" placeholder="password">
    <button value="ログイン" >ログイン</button>
    <p>アカウント作成がお済みでない場合は<router-link to="/signup">こちら</router-link></p>
  </div>
</template>

<style scoped>
.form-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  padding: 2vw 10vw;
  text-align: center;
}

input {
  margin-bottom: 16px;
}

button {
  background-color: rgb(66, 163, 247);
  color: white;
  border-radius: 25px;
  border-style: none;
  padding: 8px 20px;
  margin-bottom: 8px;
  font-size: 15px;
  width: 246px;
}
</style>