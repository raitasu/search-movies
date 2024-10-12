<template>
  <div class="movie-card">
    <img class="movie-poster"
         :src="moviePoster"
         alt="poster">
    <h4  class="movie-name">{{ `Name: ${movie.Title || 'unknown'}` }}</h4>
    <div class="movie-year">{{ `Year: ${movie.Year || 'unknown'}` }}</div>
    <div class="movie-imdbID">{{ `imdbID: ${movie.imdbID || 'unknown'}` }}</div>
    <div class="movie-type">{{ `Type: ${movie.Type || 'unknown'}` }}</div>

  </div>
</template>
<script setup lang="ts">

import defaultPoster from '@/assets/img/default-poster.jpg'
import {computed} from "vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const moviePoster = computed(() => {
  if (props.movie.Poster === 'N/A') {
    return defaultPoster
  }
  return props.movie.Poster
})

</script>
<style scoped>
.movie-card {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.movie-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.movie-poster {
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
}

.movie-name {
  font-size: 1.25em;
  font-weight: bold;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.movie-year,
.movie-imdbID,
.movie-type {
  font-size: 0.9em;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>