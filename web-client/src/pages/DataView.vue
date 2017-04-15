<template>
  <div id="main" style="width:100%;height:100%">
    <toolbar  class="header row">
      <span slot="subtitle">Data View</span>
    </toolbar>
    <div class="body row scroll-y">

      <md-menu>
        <md-button md-menu-trigger>Select Data</md-button>

        <md-menu-content>
          <md-menu-item v-for="item in types" @click.native="loadData(item.class, item.type)">{{ item.class }} {{ item.type }}</md-menu-item>
        </md-menu-content>
      </md-menu>


      <!-- <md-button  @click.native="loadData('Event', 'EventType1')">EventType1</md-button>
      <md-button  @click.native="loadData('Device', 'DeviceType1')">DeviceType1</md-button>
      <md-button  @click.native="loadData('User', 'UserType1')">UserType1</md-button> -->
      <!-- <pre>{{data}}</pre> -->

      <!-- <md-button  v-for="item in types" @click.native="loadData(item.class, item.type)">{{ item.class }} {{ item.type }}</md-button> -->
      <p>
      <md-chip>{{ dataname}}</md-chip>
      </p>
      <md-table v-if="data && data.length>0">
        <md-table-header>
          <md-table-row>
            <md-table-head v-for="key in Object.keys(data[0])">{{ key }} </md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(row, index) in data">
            <md-table-cell v-for="key in Object.keys(data[index])">{{ data[index][key] }}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>

    </div>
  </div>
</template>
<style src="vue-material/dist/vue-material.css"></style>
<script>

import { mapGetters, mapActions, mapMutations } from 'vuex'
import axios from 'axios'
import Toolbar from '../Toolbar.vue'

export default {
  data () {
    return {
      data:null,
      meta:null,
      dataname:""
    }
  },
  computed: mapGetters({
    code:'instancedatacode'
  }),
  methods: {
    loadData:function(className, typeName) {
      this.dataname = className+" "+typeName;
      axios({
        method: 'post',
        url: '/api/data',
        data: {class:className,type:typeName}
      }).then(res => {
        this.data = res.data
      })
    }
  },
  components: {
    'toolbar':Toolbar
  },
  computed:{
    types: function() {
      var types = [];
      if(this.meta) {
      for(var i=0;i<this.meta.length;i++) {
        var names = this.meta[i].name.split("_");
        types.push({class:names[0],type:names[1]});
      }
      }
      return types;
    }
  },
  created: function (){
    axios({
      method: 'post',
      url: '/api/data/meta',
    }).then(res => {
      this.meta = res.data
    })
  }

}
</script>
<style>
</style>
