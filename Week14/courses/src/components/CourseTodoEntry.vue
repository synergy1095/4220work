<template>
<div class="course-todo-entry">
  <div class="field">
    <label class="label">New Todo for <code>{{activeCourseAbbvName}}</code></label>
    <div class="control">
      <input class="input" type="text" placeholder="Enter your todo" 
            required v-model="todoEntry"
            @keyup.enter="submitTodo(todoEntry)">
    </div>
    <p class="help has-text-info">{{activeCourseFullName}}</p>
    <p class="help has-text-danger" v-if="error">
        You must enter the details of your todo!
    </p>

  </div>
</div>

</template>

<script>
    import { store } from '../store.js';
    
    export default {
        name: 'CourseTodoEntry',        
        data () {
            return {
                todoEntry: '',
                error: false
            }
        },
        methods: {
            submitTodo (description) {
                if (description === '') return this.error = true;

                store.submitTodo( description )
                this.todoEntry = ''
                this.error = false;
            }
        },
        computed: {
            activeCourseAbbvName () {
                const abbv = store.getActiveCourse().abbvName
                return abbv
            },
            activeCourseFullName () {
                const full = store.getActiveCourse().fullName
                return full
            }
        }
    }
</script>

<style scoped>
.course-todo-entry{
    margin-bottom: 40px;
}
</style>