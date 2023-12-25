<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
// function handelRightClick(e: Event) {
//   e.preventDefault();
//   console.log("单击右键");
// }

function add() {
  count.value++;
}
function success(value: string | number) {
  console.log("复制成功", value);
}
</script>

<template>
  <p>自定义指令 v-copy 复制：{{ count }}</p>
  <button type="button" v-copy="count">点击复制</button>
  <!-- <button type="button" v-copy:[success]="count">点击复制</button> -->
  <button type="button" @click="add">count is {{ count }}</button>

  <button type="button" v-permission="admin"></button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
