<template>
  <div>
    <Setting/>
    <Todos/>

  </div>
</template>

<script>
// @ is an alias to /src
import Setting from '@/components/Setting.vue'
import Todos from '@/components/Todos.vue'

export default {
  name: 'todos',
  components: {
    Setting,
    Todos
  }
}
</script>
