<template>
  <div class="app-header">
    <h1>
      <RouterLink class="router-link" to="/">
        <img class="icon" src="@/assets/icons/movie-icon.png" alt="Movie Icon" />
        <span class="title"> {{ title }}</span>
      </RouterLink>
    </h1>
    <search-movie />
    <profile-settings />
  </div>
</template>
<script lang="ts" setup>
import ProfileSettings from "@/components/ProfileSettings.vue";
import { RouterLink } from "vue-router";
import SearchMovie from "@/components/SearchMovies.vue";

defineProps({
  title: {
    type: String,
    default: 'Movie Catalog',
  }
});
</script>
<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: gray;
  color: #fff;
  padding: 0 20px;
}

.title {
  display: block;
  font-size: 34px;
  font-weight: bold;
  color: #fff;
}
.router-link {
  text-decoration: none;
}
.icon {
  display: none;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  color: #fff;
}

@media (max-width: 1000px) {
  .icon {
    display: block;
  }
  .title {
    display: none;
  }
}
</style>