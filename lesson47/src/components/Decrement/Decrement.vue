<template>
  <div>
    <button @click="decrement" class="btn btn-danger">Disminuir</button>
  </div>
</template>

<script>
  import store from '../../store'
    export default {
        methods : {
          decrement() {
            store.commit('decrement');
          }
        }
    };
</script>
