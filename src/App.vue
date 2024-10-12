<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from "@/components/MoviesHeader.vue";
import FeedbackWidget from "@/components/FeedbackWidget.vue";
</script>

<template>
  <the-header/>
  <feedback-widget />
  <RouterView />
</template>

<style scoped>

</style>
