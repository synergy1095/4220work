const socket = io()

// Chat Component
const chatComponent = {
    template: ` <div class="chat-box">
                    <p v-for="data in content">
                        <img :src="data.user.avatar" class="circle" width="30px">
                        <span><strong>{{data.user.name}}</strong> <small>{{data.date}}</small><span>
                        <br />
                        {{data.message}}
                    </p>
                </div>`,
    props: ['content']
}

// Users Component
const usersComponent = {
    template: ` <div class="user-list">
                    <h6>Active Users ({{users.length}})</h6>
                    <ul v-for="user in users">
                        <li>
                            <img v-bind:src="user.avatar" class="circle" width="30px">
                            <span>{{user.name}}</span>
                        </li>
                        <hr>
                    </ul>
                </div>`,
    props: ['users']
}

// Me Component
const meComponent = {
    template: ` <div class="me" v-show="me.name">
                    <h5> Welcome </h5>
                        <p><img :src="me.avatar" class="circle" width="80px"></p>
                        <h6>{{me.name}}</h6>
                </div>`,
    props: ['me']
}

const app = new Vue({
    el: '#chat-app',
    data: {
        loggedIn: false,
        userName: '',
        password: '',
        failedName: '',
        me: {},
        users: [],
        message: '',
        messages: []
    },
    methods: {
        joinUser: function () {
            if (!this.userName || !this.password)
                return

            socket.emit('join-user', this.userName, this.password)
        },
        signupUser: function () {
            if (!this.userName || !this.password)
                return

            socket.emit('create-user', this.userName, this.password)
        },
        sendMessage: function () {
            if (!this.message)
                return

            socket.emit('send-message', { message: this.message, user: this.me })
        }
    },
    components: {
        'users-component': usersComponent,
        'chat-component': chatComponent,
        'me-component': meComponent
    }
})


// Client Side Socket Event
socket.on('refresh-messages', messages => {
    app.messages = messages
})
socket.on('refresh-users', users => {
    app.users = users
})

socket.on('successful-message', content => {
    app.message = ''
    app.messages.push(content)
})

socket.on('successful-join', user => {
    if (user.name === app.userName) {
        app.me = user
        app.loggedIn = true
        app.failed = ''
        app.password = ''
    }

    app.users.push(user)
})

socket.on('failed-join', userName => {
    if (userName === app.userName)
        app.failedName = userName
})