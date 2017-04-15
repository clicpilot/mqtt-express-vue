<template>
  <div id="app">

  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {

    }
  },


  created: function (){
    Vue.nextTick(()=>{
      setTimeout(()=>{
        location.href = "/#InstanceData"
      }, 3000);
    })

  }
}
</script>

<style>

</style>
