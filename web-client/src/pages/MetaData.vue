<template>
  <div id="main" style="width:100%;height:100%">
    <codeview title="Data Model" :code="code" :name="'metadataeditor'" ref="editor" lang="json" :save="'sendMetaData'"></codeview>
  </div>
</template>

<script>
import CodeView from '../CodeView.vue'

import { mapGetters, mapActions, mapMutations } from 'vuex'


export default {
  data () {
    return {
      //code:"loading..."
    }
  },

  computed: mapGetters({
    code: 'metadatacode'
  }),
  methods: mapActions([
    'sendMetaData',
  ]),
  components: {
    'codeview':CodeView,
  },
  mounted: function (){
    var self = this;
      this.$store.dispatch('loadMetaData', function(code){
        self.$refs.editor.$refs.metadataeditor.editor.setValue(code.code, -1);
      });

  }

}
</script>
<style>
</style>
