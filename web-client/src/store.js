import Vue from 'vue'
import Vuex from 'vuex'
import mongoose from 'mongoose'
import {metacode, instancecode} from './code'
import axios from 'axios'

Vue.use(Vuex)


// root state object.
// each Vuex instance is just a single state tree.
const state = {
  metadata: {code:"loading..."},
  instancedata: {code:instancecode}
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  saveMetaData (state, {code}) {
    state.metadata = code
    //initSchemas(state);
  },
  saveInstanceData (state, {code}) {
    state.instancedata = eval("("+code+")");
  },
}




const actions = {

  sendMetaData ({ commit, state }, {code}) {
    commit('saveMetaData', {code})
   axios({
     method: 'post',
     url: '/api/meta',
     data: {code:state.metadata}
   }).then(res => {
     console.log(res.data)
   })
 },

 loadMetaData ({ commit, state }, cb) {
   axios({
     method: 'get',
     url: '/api/meta',
     responseType:'json'
   }).then(res => {
     debugger;
     state.metadata = (res.data) || {code:metacode};
     cb(state.metadata);
   })
 },


  sendInstanceData ({ commit, state }, {code}) {
    commit('saveInstanceData', {code})
    axios({
      method: 'post',
      url: '/api/instance',
      data: {data:state.instancedata}
    }).then(res => {
      console.log(res.data)
    })
  },









}


// getters are functions
const getters = {
  metadatacode: () => {
    return state.metadata.code
  },
  instancedatacode: ()=> {
    return state.instancedata.code
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
