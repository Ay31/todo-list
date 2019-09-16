import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    allTodos: (state) => state.todos,
    completeTodo: (state) => {
      const CompleteTodo = state.todos.filter((todo) => todo.completed === true)
      return CompleteTodo
    },
    inCompleteTodo: (state) => {
      const inCompleteTodo = state.todos.filter((todo) => todo.completed === false)
      return inCompleteTodo
    }
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos
    },
    addTodo: (state, todo) => {
      state.todos.unshift(todo)
    },
    updateTodo: (state, todo) => {
      const index = state.todos.findIndex(todos => todos.id === todo.id)
      state.todos[index].completed = !state.todos[index].completed
    },
    deleteTodo: (state, id) => {
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(index, 1)
    }
  },
  actions: {
    async setTodos ({
      commit
    }) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
      commit('setTodos', response.data)
    },
    async addTodo ({
      commit
    }, title) {
      const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        title,
        completed: false
      })
      commit('addTodo', response.data)
    },
    async updateTodo ({
      commit
    }, todo) {
      // const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
      commit('updateTodo', todo)
    },
    async deleteTodo ({ commit }, id) {
      // await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      commit('deleteTodo', id)
    }

  }
})
