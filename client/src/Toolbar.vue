<template>
  <md-toolbar class="md-large">
    <div class="md-toolbar-container">
      <span style="flex: 1;">Energy System</span>
      <md-button href="/#MetaData">数据模型</md-button>
      <md-button href="/#InstanceData">数据实例</md-button>
      <md-button href="/#DataView">数据展现</md-button>

    </div>

    <div class="md-toolbar-container">
      <h2 class="md-title">
        <slot name="subtitle"></slot>
      </h2>
    </div>
  </md-toolbar>
</template>

<style src="vue-material/dist/vue-material.css"></style>
<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

export default {
  props:['subtitle'],
  data () {
    return {

    }
  }
}
</script>
