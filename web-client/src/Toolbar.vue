<template>
  <md-toolbar class="md-large">
    <div class="md-toolbar-container">
      <span style="flex: 1;">System Name</span>
      <md-button href="/#MetaData">Data Model</md-button>
      <md-button href="/#InstanceData">Data Instance</md-button>
      <md-button href="/#DataView">Data View</md-button>

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
