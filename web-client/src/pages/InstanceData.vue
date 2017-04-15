<template>
  <div id="main" style="width:100%;height:100%">
    <codeview title="Data Instance" :code="code" :name="'instancedataeditor'" ref="editor" lang="json" :save="'sendInstanceData'" :sync="true"></codeview>
  </div>
</template>

<script>
import CodeView from '../CodeView.vue'
import {instancecode} from '../code'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: mapGetters({
    code:'instancedatacode'
  }),
  methods: mapActions([
    'sendInstanceData'
  ]),
  components: {
    'codeview':CodeView,
  },
  created: function (){
      //this.$refs.editor.$refs.metadataeditor.editor.setValue(instancecode, -1);
  }

}
</script>
<style>
</style>
