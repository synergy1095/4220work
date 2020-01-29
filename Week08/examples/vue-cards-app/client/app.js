let cards = new Vue({
    el: '#cards',
    data: {
        appName: 'Deck of Cards App',
        shuffle: '',
        numberOfCards: '',
        deck: {},
        isPlaying: false,
        selectedCards: []
    },
    methods: {
        drawCards: function () {
            let vm = this
            axios.get(`http://localhost:8080/api/draw?number=${this.numberOfCards}&shuffle=${this.shuffle}`)
                .then(response => {
                    console.log(response.data)
                    vm.deck = response.data
                })
        },
        playGame: function () {
            let vm = this
            vm.isPlaying = true
            axios.get(`http://localhost:8080/api/play`)
                .then(response => {
                    vm.deck = response.data
                })
        },
        throwaway: function () {
            let vm = this
            axios.post(`/api/throwaway`, {
                deck: vm.deck,
                selectedCards: vm.selectedCards
            })
            .then(response => {
                vm.deck = response.data
                vm.isPlaying = false
            })
        },
        clear: function () {
            this.deck = {}
            this.numberOfCards = ''
            this.shuffle = ''
            this.selectedCards = []
        }
    }
})
