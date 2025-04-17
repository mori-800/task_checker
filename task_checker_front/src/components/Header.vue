<script setup>
import CheckAll from 'vue-material-design-icons/CheckAll.vue';
import { auth, signOut } from '../firebase';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSignOut = async() => {
  try{
    await signOut(auth)
    router.push("/")
  }catch(error){
    console.log('ログアウトに失敗しました')
  }
}
</script>

<template>
  <div class="header">
    <div class="header-left">
      <CheckAll class="header_icon" fontsize="large" />
      <span class="header-title">Task Checker</span>
    </div>
    <div class="header-search">
      <form class="search-container">
        <input
          placeholder="タイトルで検索"
          class="search-input"
          type="search"
          aria-label="検索"
        />
        <button
          type="submit"
          class="search-button"
        >
          検索
        </button>
      </form>
    </div>
    <div class="header-right">
      <button @click="handleSignOut" class="logout-button">
        ログアウト
      </button>
    </div>
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: white;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  padding: 0 30px;
}

.header-left {
  display: flex;
  align-items: center;
}

.header_icon {
  color: rgb(170, 1, 1);
}

.header_title {
  font-size: 25px;
  color: rgb(70, 70, 70);
  font-weight: bold;
  margin-left: 10px;
}


.search-container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  max-width: 400px;
}

.search-input {
  flex: 1;
  padding: 0.4rem 0.6rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.7rem;
  color: #1f2937;
  transition: all 0.2s ease;
}

.search-button {
  padding: 0.4rem 0.8rem;
  background-color: #4f83f2;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.logout-button {
  background-color: rgb(66, 163, 247);
  color: white;
  border-radius: 25px;
  border-style: none;
  padding: 8px 20px;
  margin-bottom: 8px;
  font-size: 15px;
}
</style>