<template>
  <div>
    <Completed/>
    <Todos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'
import Completed from '@/components/Completed.vue'



export default {
  name: 'todos',
  components: {
    Todos,
    Completed
  }
}
</script>
