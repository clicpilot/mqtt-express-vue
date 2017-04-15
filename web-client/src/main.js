import Vue from 'vue'
import Vuex from 'vuex'
import store from './store';

Vue.use(Vuex)
var app = new Vue({
  el: '#app',
  store,
  data: {
    currentRoute: window.location.hash,
  },
  computed: {
    ViewComponent () {
      try{
        return require('./pages/' + this.currentRoute.substring(1) + '.vue');
      } catch(e) {
        return require('./App.vue');
      }
    },
  },
  created: function (){

    //this.$store.dispatch('loadMetaData');


  },
  render (h) { return h(this.ViewComponent) }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.hash
})



// // import 'babel-polyfill'
// import Vue from 'vue'
// import store from './store'
//
// new Vue({
//   el: '#app',
//   store,
//   data(){
//     return {
//     }
//   },
//   computed: {
//     ViewComponent () {
//       return require('./test.vue');
//     },
//   },
//   render (h) { return h(this.ViewComponent) }
// })
