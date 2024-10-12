<template>
  <div class="pagination">
    <button @click="previousPage"
            :disabled="currentPage === 1">
      Previous
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage"
            :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emits = defineEmits(['change'])

const previousPage = () => {
  if (props.currentPage > 1) {
    emits('change', props.currentPage - 1)
  }
}

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emits('change', props.currentPage + 1)
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

button {
  padding: 10px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  border-radius: 5px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

span {
  font-size: 1.2em;
}
</style>