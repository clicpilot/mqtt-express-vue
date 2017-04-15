<template>
  <div id="main" style="width:100%;height:100%">
  <toolbar  class="header row">
    <span slot="subtitle">{{ title }}</span>
  </toolbar>
  <div class="body row scroll-y">
    <md-layout md-gutter style="width:100%;height:100%">
      <editor  :content="code" :ref="name" :lang="'json'" :theme="'chaos'" :width="'100%'" :height="'100%'"></editor>
    </md-layout>
    <md-button class="md-fab md-fab-bottom-right md-primary" @click.native="saveCode()">
      <md-icon>save</md-icon>
    </md-button>
  </div>
</div>
</template>
<style src="vue-material/dist/vue-material.css"></style>
<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import Toolbar from './Toolbar.vue'
import editor from 'vue2-ace'
import 'brace/mode/json'
import 'brace/theme/chaos'

Vue.use(VueMaterial)

export default {
  props:['title', 'code', 'lang', 'name', 'save'],
  name: 'app',
  data () {
    return {
      content:this.code
    }
  },
  methods: {
    saveCode(){
      this.$parent.$store.dispatch(this.save, {code:this.$refs[this.name].editor.getValue()});
      //this.$parent[this.save]();
    },

  },
  components: {
    'toolbar':Toolbar,
    'editor':editor
  }
}
</script>

<style>

</style>
