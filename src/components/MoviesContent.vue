<script setup lang="ts">
import {computed, ref} from "vue";
import { useMoviesStore } from "@/stores/movies";
import MovieCard from "@/components/MoviesCard.vue";
import MoviesPagination from "@/components/MoviesPagination.vue";
import MovieLoader from "@/components/MoviesLoader.vue";

const store = useMoviesStore();

const currentPage = ref(1);

const tip = computed(() => {
  if (!store.movies?.length) {
    return store.tip;
  }
  return null;
});

const totalPages = computed(() => {
  return Math.ceil(store.totalResults / store.pageSize);
});

const changePage = (page: number) => {
  currentPage.value = page;
  store.getMovies(store.lastQuery, page);
};
</script>

<template>
  <div class="container">
    <div v-if="tip"
         class="tip">
      {{ tip }}
    </div>
    <div v-else>
      <h2>
          You searched for "{{ store.lastQuery }}", {{ store.totalResults }} results found
      </h2>
      <movies-pagination
          class="movie-list-mobile-pagination"
          :current-page="currentPage"
          :total-pages="totalPages"
          @change="changePage"
      />
      <div class="movie-list" >
        <movie-loader v-if="store.isFetching"
                      :is-fetching="store.isFetching"/>
        <movie-card
            v-if="!store.isFetching"
            v-for="(movie, i) in store.movies"
            :key="i"
            :movie="movie"
        />
      </div>
      <movies-pagination
          class="movie-list-pagination"
          :current-page="currentPage"
          :total-pages="totalPages"
          @change="changePage"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
}

.tip {
  color: #d9534f;
  font-size: 1.2em;
  margin: 20px 0;
  text-align: center;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1400px;
  width: 100%;
  justify-items: center;
}
.movie-card {
  width: 100%;
  max-width: 300px;
}

.movie-list-mobile-pagination {
  display: none;
}

@media (max-width: 1000px) {
  .movie-list-mobile-pagination {
    display: flex;
    margin-bottom: 10px;
  }
  .movie-list-pagination {
    display: none;
  }
}
</style>