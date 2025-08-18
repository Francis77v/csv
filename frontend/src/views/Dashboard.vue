<script setup>
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";

const router = useRouter();
const { logout } = useAuth();

const handleLogout = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-green-100">
    <h1 class="text-3xl font-bold">Welcome to the Dashboard 🎉</h1>
    <button @click="handleLogout" class="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
      Logout
    </button>
  </div>
</template>
