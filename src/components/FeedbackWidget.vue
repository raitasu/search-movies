<template>
  <div class="feedback-widget"
       @click="goToFeedbackPage">
    <span>Feedback</span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToFeedbackPage = () => {
  router.push('/feedback');
};
</script>

<style scoped>
.feedback-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.feedback-widget:hover {
  background-color: #0056b3;
}
</style>