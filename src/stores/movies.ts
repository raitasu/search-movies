import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    list: [] as any[],
    tip: 'Service for searching movies',
    pageSize: 10,
    totalResults: 0,
    lastQuery: '',
    isFetching: false
  }),
  getters: {
    movies: (state) => state.list,
    error: (state) => state.tip
  },
  actions: {
    async getMovies(query: string, page = 1) {
      this.$state.lastQuery = query
      this.$state.isFetching = true
      try {
        const res = await axios.get(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=8523cbb8`)
        if (res.data.Response === 'True') {
          this.$state.list = res.data.Search
          this.$state.totalResults = parseInt(res.data.totalResults)
        } else if (res.data.Response === 'False') {
          if (res.data.Error === 'Something went wrong.' || res.data.Error === 'Movie not found!' || res.data.Error === 'Too many results.') {
            this.$state.list = []
          }
          this.$state.tip = res.data.Error
        }
      } catch (error) {
        this.$state.tip = 'An error occurred while fetching movies.'
      } finally {
        this.$state.isFetching = false
      }
    },
    emptyMovies() {
      this.$state.list = []
      this.$state.tip = 'Service for searching movies'
    },
  }
})