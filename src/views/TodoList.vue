<template>
  <div class="todoList">
    <AddTodo/>
    <Todos/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'
import Todos from '@/components/Todos.vue'

export default {
  name: 'todoList',
  components: {
    AddTodo,
    Todos
  }

}
</script>
