<template>
    <div>
      <h2>{{msg}} {{ tripleCounter}}</h2>
      <div class="counter-button">
        <increment></increment>
        <decrement></decrement>
      </div>

    </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import Increment from '../Increment/Increment';
  import Decrement from '../Decrement/Decrement';

    export default {
      components: {
        Increment,
        Decrement
      },
      computed: {
        ...mapGetters(['tripleCounter']),
        msg() {
          return `El contador multiplicado por 3 vale:`
        }
      }
    };
</script>

<style>
  .counter-button {
    display: flex;
  }
</style>
