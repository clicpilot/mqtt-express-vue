<template>
  <div id="main" style="width:100%;height:100%">
  <toolbar>
    <span slot="subtitle">数据定义A</span>
  </toolbar>
  <md-layout md-gutter style="width:100%;height:100%">
    <md-layout md-flex="25" style="border-right:solid 1px lightgrey; width:100%;height:100%">
    </md-layout>
    <md-layout></md-layout>
  </md-layout>
</div>
</template>
<style src="vue-material/dist/vue-material.css"></style>
<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import Toolbar from './Toolbar.vue'
Vue.use(VueMaterial)

export default {
  name: 'app',
  data () {
    return {
      subtitle:"数据定义"
    }
  },
  components: {
    'toolbar':Toolbar
  }
}
</script>

<style>

</style>
