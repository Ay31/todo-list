<template>
    <div>
        <h3>Add Todo</h3>
        <router-link to="cpl">Completed</router-link> 
        <router-link to="set">Setting</router-link> 
        <form @submit="addTodo(title)">
            <input type="text" v-model="title">
            <input type="submit" value="Submit">
        </form>
        <span>单击可完成ToDo</span>
        
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: "AddTodo",
    data() {
        return {
            title: ""
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
    },
}
</script>

<style scoped>
    a {
        display: inline-block;
        margin-bottom: 15px;
        margin-right: 20px;
        text-decoration: none;
        color: #000; 
    }
    form {
        display: flex;
    }

    input {
        outline: 0;
        padding: 8px;
        border: 1px solid #41b883;
    }

    input[type="text"] {
        flex: 10;
    }

    input[type="submit"] {
        flex: 2;
        background: #41b883;
        color: #fff;
    }

    span {
        display: flex;
        justify-content: center;
        margin: 20px;
    }
    
</style>