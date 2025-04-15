<script setup>
import Header from './Header.vue'
import Select from './Select.vue'
import AddCircleIcon from 'vue-material-design-icons/PlusCircleOutline.vue'
</script>

<template>
  <div class="main">
    <Header />
    <div class="genre">
      <Select />
      <AddCircleIcon class="add_circle_outline_icon"/>
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

</style>