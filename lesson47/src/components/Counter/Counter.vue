<template>
    <div>
      <h2>{{ count}}</h2>
      <increment></increment>
      <decrement></decrement>
    </div>
</template>

<script>
  import store from '../../store/'
  import Increment from '../Increment/Increment';
  import Decrement from '../Decrement/Decrement';

    export default {
      components: {
        Increment,
        Decrement
      },
      computed: {
        count() {
          return store.state.count;
        }
      }
    };
</script>
