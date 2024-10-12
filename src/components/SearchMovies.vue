<script lang="ts" setup>
import { ref, watch } from "vue";
import { useMoviesStore } from "@/stores/movies";

const store = useMoviesStore();
const value = ref('');
const debounceTimeout = ref<ReturnType<typeof setTimeout> | null>(null);

watch(value, (newValue) => {
  if (debounceTimeout.value) {
    clearTimeout(debounceTimeout.value);
  }

  debounceTimeout.value = setTimeout(() => {
    if (newValue.trim() === '') {
      store.emptyMovies();
    } else {
      store.getMovies(value.value);
    }
  }, 300);
});
</script>

<template>
  <input type="text" v-model="value" placeholder="Search..." />
</template>

<style scoped>
input {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>