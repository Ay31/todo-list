<template>
  <div>
    <h3>Setting</h3>
    <div class="status">
      <span>all:{{ this.allTodos.length }}</span>
      <span>
        completed
        <span class="cpl-box"></span>
        : {{ this.completeTodo.length }}
      </span>
      <span>
        incomplete
        <span class="incpl-box"></span>
        : {{ this.inCompleteTodo.length }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Setting",
  computed: {
    ...mapGetters(["allTodos", "completeTodo", "inCompleteTodo"])
  },
  methods: {
    pageHandler(page) {
      this.page = page;
    }
  },
  created() {
    this.pageHandler(1);
  }
};
</script>

<style>
.status {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}

.cpl-box {
  display: inline-block;
  width: 13px;
  height: 13px;
  background: #3cb371;
  margin: 0 2px;
}

.incpl-box {
  display: inline-block;
  width: 13px;
  height: 13px;
  background: #41b88c;
  margin: 0 2px;
}
</style>