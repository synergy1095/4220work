
let chuck = new Vue({
    
    el: '#chuck',

    data: {
        appName: 'Chuck Noris Facts',
        categories: [],
        selectedValue: 'all',
        currentFact: null,
        previousFacts: [],
        searchVal: '',
        searchRes: [],
        previousSearches: []
    },

    methods: {
        getCategories: function() {
            let viewModel = this

            axios.get('https://api.chucknorris.io/jokes/categories', {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function (response) {
                // console.log(response.data)
                // for (let index = 0; index < response.data.length; index++) {
                //     viewModel.categories.push(response.data[index])
                // }
                // for (let index = 0; index < response.data.length; index++) {
                //     viewModel.categories.push(response.data[index])
                // }
                viewModel.categories = response.data
                // console.log(viewModel.categories)
            })
            .catch(function (err) {
                alert(err)
            })
        },
        getRandomFact: function() {
            let viewModel = this
            let cat = (viewModel.selectedValue != 'all') ? '?category=' + viewModel.selectedValue : ''

            axios.get(`https://api.chucknorris.io/jokes/random${cat}`, {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function (response) {
                if (viewModel.currentFact)
                    viewModel.previousFacts.push(viewModel.currentFact)

                viewModel.currentFact = response.data['value']
            })
            .catch(function (err) {
                alert(err)
            })
        },
        searchHandler: function () {
            let viewModel = this

            if(viewModel.searchVal == '') return;

            // console.log(this.searchVal)

            viewModel.previousSearches.push(viewModel.searchVal)

            axios.get(`https://api.chucknorris.io/jokes/search?query=${viewModel.searchVal}`, {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function (response) {
                let temp = response.data['result']
                temp.forEach(element => {
                    element.value = element.value.replace(new RegExp('(' + viewModel.searchVal + ')', 'gi'), 
                        '<span class="highlightText">$1</span>')
                })
                viewModel.searchRes = temp
            })
            .catch(function (err) {
                viewModel.previousSearches.pop()
            })
        }
    },

    // watch: {
    //     searchVal: function (curVal, oldVal) {
    //         this.searchHandler()
    //     }
    // },

    beforeMount(){
        this.getCategories()
    }
})