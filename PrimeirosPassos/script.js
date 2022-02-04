let app = new Vue({
    el: '#app',
    data: {
show:true,
tickets: 100
    },
    methods: {
        beforeEnter() {
            console.log('beforeEnter')
        },
        Enter() {
            console.log('Enter')
            
        },
        afterEnter(element) {
            console.log('AfterEnter', element)

            document.querySelector('h1').style.background = '#CCC';
            document.querySelector('h1').style.color = 'red';
// de dev
        },
        enterCancelled() {
 console.log('EnterCancelled')
        },
        beforeLeave() {
console.log('beforeLeave')
        },
        afterLeave() {
console.log('afterLeave')
        },
        Leave() {
console.log('Leave')
        },
        leaveCancelled() {
            console.log('LeaveCancelled')

        }
    },
    filters: {
     
    }

})