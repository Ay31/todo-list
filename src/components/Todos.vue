<template>
    <div class="todos">
      <div
        v-for="todo of isTodos"
        :key="todo.id"
        class="todo"
        @click="isComplete(todo)"
        :class="{'is-complete':todo.completed}"
      >{{ todo.title }} 
      <i @click="deleteTodo(todo.id)" :class="{'fa fa-trash':isSet}"></i>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Todos",
  data() {
    return {
      todos: this.completeTodo
    };
  },
  methods: {
    ...mapActions(["setTodos", "updateTodo","deleteTodo"]),
    isComplete(todo) {
      const newTodo = {
        title: todo.title,
        id: todo.id,
        userId: todo.userId,
        completed: !todo.completed
      };
      this.updateTodo(newTodo)
    }
  },
  computed: {
    ...mapGetters(["allTodos", "completeTodo", "inCompleteTodo"]),
    isTodos() {
      switch (this.$route.name) {
        case "TodoList":
          return this.inCompleteTodo;
        case "Todos":
          return this.completeTodo;
        case "Setting":
          return this.allTodos;
      }
    },
    isSet() {
      if(this.$route.name === "Setting"){
        return true
      }
    }
  },
  created() {
    this.setTodos();
  }
};
</script>

<style>
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}

.todo {
  margin: 10px;
  background: #41b88c;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  position: relative;
}

.is-complete {
  background: #3CB371;
}
@media (max-width: 600px) {
        .todos {
        grid-template-columns: repeat(1,1fr);
        }
    }
</style>