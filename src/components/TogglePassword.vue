<template>
  <input :type="passwordFieldType" v-model="password" />
  <button @click="togglePassword" class="toggle-btn">{{ buttonName }}</button>
</template>
<script setup>
import { ref } from "vue";
const password = ref("");
const buttonName = ref("show")
const passwordFieldType = ref("password");
function togglePassword() {
	passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
	buttonName.value = passwordFieldType.value === "password" ? "show" : "hide";
}
</script>