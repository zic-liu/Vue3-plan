<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
const msg = '复制成功 '

// function handelRightClick(e: Event) {
//   e.preventDefault();
//   console.log("单击右键");
// }
</script>

<template>
	<p>自定义指令</p>
	<div>
		<p> v-copy 复制</p>
		{{ count }}
		<button type="button" v-copy:[msg]="count">点击复制</button>
		<button type="button" @click="count++">count is {{ count }}</button>
	</div>

	<div>
		<p>v-permission 权限</p>
		<button type="button" v-permission="'admin'">admin</button>
		<button type="button" v-permission="'user'">user</button>
		<button type="button" v-permission="'test'">test</button>
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>