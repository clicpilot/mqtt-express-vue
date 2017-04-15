import Vue from 'vue'
import Vuex from 'vuex'
import mongoose from 'mongoose'
import {metacode, instancecode} from './code'

Vue.use(Vuex)


// root state object.
// each Vuex instance is just a single state tree.
const state = {
  metadata: metacode,
  instancedata: instancecode,
  schemas: {},
  models: {}
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  saveMetaData (state, {code}) {
    state.metadata = eval("("+code+")");
    initSchemas(state);
  },
  saveInstanceData (state, {code}) {
    state.instancedata = eval("("+code+")");
  },
}

const initSchemas = function(state){
  var metadata = state.metadata;
  for(var key in metadata) {
    state.schemas[key] = state.schemas[key] || {};
    state.models[key] = state.models[key] || {};
    for(var i=0;i<metadata[key].length;i++){
      var metadataschema = metadata[key][i];
      var name = metadataschema.name
      if(metadataschema.metaSchema) {
        var schema1 = mongoose.Schema(metadataschema.metaSchema);
        state.schemas[key][name] = state.schemas[key][name] || {}
        state.schemas[key][name]['metaSchema'] = schema1
        state.models[key][name]['metaModel'] = mongoose.model(key+'_'+name+'_meta', schema1);
      } else if(metadataschema.instanceSchema) {
        var schema2 = mongoose.Schema(metadataschema.instanceSchema);
        state.schemas[key][name] = state.schemas[key][name] || {}
        state.schemas[key][name]['instanceSchema'] = schema2
        state.models[key][name]['instanceModel'] = mongoose.model(key+'_'+name+'_instance', schema2);
      }


    }
  }

}


const actions = {
  aveMetaData: ({ commit, code }) => commit('saveMetaData', {code}),
}

// // actions are functions that causes side effects and can involve
// // asynchronous operations.
// const actions = {
//   saveMetaData: ({ commit }) => commit('increment'),
//   saveInstanceData: ({ commit }) => commit('decrement'),
//   incrementIfOdd ({ commit, state }) {
//     if ((state.count + 1) % 2 === 0) {
//       commit('increment')
//     }
//   },
//   incrementAsync ({ commit }) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         commit('increment')
//         resolve()
//       }, 1000)
//     })
//   }
// }

// getters are functions
const getters = {
  // evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
  metadatacode: () => {return JSON.stringify(state.metadata, null, 4)},
  instancedatacode: ()=> {return JSON.stringify(state.instancedata, null, 4)},
  metaobj:() => {return state.metadata},
  instanceobj:()=> {return state.instancedata}
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  // actions,
  mutations
})
