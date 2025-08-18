

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const error = ref(null);
const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post("http://localhost:8000/api/token/", {
      username: username.value,
      password: password.value,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // save tokens in localStorage
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);

    // redirect to dashboard
    router.push("/dashboard");
  } catch (err) {
    error.value = "Invalid username or password";
  }
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-xl p-8 w-96">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
asdas
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700">Username</label>
          <input
            v-model="username"
            type="text"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>

      <p v-if="error" class="text-red-500 text-sm mt-4 text-center">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>  
</style>