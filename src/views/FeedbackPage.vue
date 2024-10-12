<template>
  <div class="feedback-container">
    <a class="telegram-button" href="https://t.me/shakesoul" target="_blank" rel="noopener noreferrer">
      <span>Contact on Telegram</span>
    </a>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.feedback-container {
  display: flex;
  justify-content: center;
}
.telegram-button {
  max-width: 300px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 20px;
}

.telegram-button:hover {
  background-color: #0056b3;
}

.telegram-button img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>