const courseComponent = {
  template: 
  `<div style="display: flex; width: 100%">
    <figure class="media-left">
      <img class="image is-64x64" v-bind:src="course.courseImage">
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>
            <a v-bind:href="course.url" class="has-text-info">{{course.title}}</a>
            <span class="tag is-small">{{course.id}}</span>
          </strong>
          <br> {{course.description}}
          <br>
          <small class="is-size-7">
            Submitted by:
            <img class="image is-24x24" v-bind:src="course.avatar">
          </small>
        </p>
      </div>
    </div>
    <div class="media-right">
      <span class="icon is-small" @click="upvote(course.id)">
        <i class="fa fa-chevron-up"></i>
        <strong class="has-text-info">{{course.votes}}</strong>
      </span>
    </div>
  </div>`,
  props: ['course', 'courses'],
  methods: {
    upvote: function(courseId) {
      const course = this.courses.find(
        course => course.id === courseId
      )
      course.votes++
    }
  }
}

new Vue({
    el: '#app',
    data: {
      courses: Seed.courses 
    },
    computed: {
      sortedCourses () {
        return this.courses.sort((a, b) => {
          return b.votes - a.votes
        })
      }
    },
    components: {
      'course-component': courseComponent
    }
  })