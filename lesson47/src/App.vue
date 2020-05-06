<template>
  <div id="app" class="container">
    <h1>Vuex</h1>
    <counter></counter>
    <p>El contador es: {{ count }}</p>
  </div>
</template>

<script>
import Counter from './components/Counter/Counter';
import store from './store'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count() {
      return store.state.count;
    }
  },
  components: {
    Counter
  }
}
</script>
