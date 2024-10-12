<template>
  <div class="full-name">
   {{ fullName }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  fullName: {
    type: String,
    default: 'Alexander Borisenko',
  }
})
</script>

<style scoped>
.full-name {
  font-weight: bold;
  margin-left: 5px;
}
</style>