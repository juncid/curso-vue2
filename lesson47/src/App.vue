<template>
  <div id="app" class="container">
    <h1>Vuex</h1>
    <counter></counter>
    <p>El contador es: {{ count }} y el contador multiplicado por 3 es: {{tripleCounter}}</p>
  </div>
</template>

<script>
import Counter from './components/Counter/Counter';
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters(['tripleCounter']),
    ...mapState(['count'])
  },
  components: {
    Counter
  }
}
</script>
