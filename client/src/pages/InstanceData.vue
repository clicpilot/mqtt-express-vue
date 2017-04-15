<template>
  <div id="main" style="width:100%;height:100%">
    <codeview title="数据实例" :code="instancedatacode" :name="'instancedataeditor'" lang="json" :save="'saveInstanceData'"></codeview>
  </div>
</template>

<script>
import CodeView from '../CodeView.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      code:this.$parent.instancedata
    }
  },
  computed: mapGetters([
    'instancedatacode'
  ]),
  methods: mapMutations([
    'saveInstanceData'
  ]),
  components: {
    'codeview':CodeView,
  }
}
</script>
<style>
</style>
