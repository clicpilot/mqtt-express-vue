<template>
  <div id="app">
    <!-- Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button> -->
    <span>{{ metadatacode }}</span>
    <span>{{ $store.state.metadata }}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'metadatacode'
  ]),
  // methods: mapActions([
  //   'increment',
  //   'decrement',
  //   'incrementIfOdd',
  //   'incrementAsync'
  // ])
}
</script>
