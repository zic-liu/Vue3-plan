<script setup lang="ts">
import { ref } from "vue";

defineProps(['msg'])
</script>

<template>
  <p>{{ msg }}</p>
  <hr>
</template>

<style scoped>
</style>
