<template>
<div class="columns">
  <div class="column is-four-fifths">
    <label class="checkbox">
      <input type="checkbox" v-model="todo.done"> <span :class="{done: todo.done}">{{todo.description}}</span>
    </label>
  </div>
  <div class="column has-text-right">
    <!-- Edit and Delete icons/link go here -->
  </div>
</div>
</template>


<script>
  import { store } from '../store.js';
  export default {
      name: 'CourseTodo',
      data () {
          return {
          }
      },
      props: ['todo', 'course'],
      methods: {
        toggleTodo (courseId, description) {
          store.toggleTodo(courseId, description )
        }
      }
  }
</script>

<style>
.fa-trash {
    color: red;
}
.done {
  text-decoration: line-through;
}
</style>