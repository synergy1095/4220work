<template>
    <div class="schedule container">
        <div class="tile is-ancestor">
            <Course v-for="course in sharedState.seedData" 
                :key="course.id"
                :course="course"                
                />
        </div>
    </div>
</template>

<script>
    import { store } from '../store.js';
    import Course from './Course.vue'

    export default {
        name: 'CourseSchedule',
        data () {
            return {
                sharedState: store.state
            }
        },
        components: {
            Course
        }
    }
</script>

<style>

</style>