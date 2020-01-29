<template>
    <div class="course tile is-child" @click="setActiveCourse(course.id)" :class="{'active': course.active}" >
        <h1 class="title">{{course.abbvName}}</h1>
        <h2 class="subtitle">{{course.fullName}}</h2>
        <CourseTodo v-for="todo in course.todos"
            :key="course.todos.indexOf(todo)"
            :todo="todo"
            :course="course" />
    </div>
</template>

<script>
    import { store } from '../store.js';
    import CourseTodo from './CourseTodo.vue'
    export default {
        name: 'Course',        
        data () {
            return {
            }
        },
        props: ['course'],
        components: {
            CourseTodo
        },
        methods: {
            setActiveCourse (courseId) {
                store.setActiveCourse(courseId)
            }
        }
    }
</script>

<style scoped>
.course {
    margin: 10px 20px !important;
    padding: 10px;
    border: 1px solid gainsboro;
}
.title, .subtitle {
    text-align: center !important;
}
.active {
    background-color:whitesmoke;
}
</style>