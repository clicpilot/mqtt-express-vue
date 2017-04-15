<template>
  <div id="main" style="width:100%;height:100%">
    <codeview title="数据模型" :code="metadatacode" :name="'metadataeditor'" lang="json" :save="'saveMetaData'"></codeview>
  </div>
</template>

<script>
import CodeView from '../CodeView.vue'

import { mapGetters, mapActions, mapMutations } from 'vuex'


export default {
  data () {
    return {

    }
  },
  computed: mapGetters([
    'metadatacode'
  ]),
  methods: mapMutations([
    'saveMetaData'
  ]),
  components: {
    'codeview':CodeView,
  }
}
</script>
<style>
</style>
