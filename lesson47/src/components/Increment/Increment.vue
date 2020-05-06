<template>
    <div>
      <button @click="increment" class="btn btn-primary">Incrementar</button>
    </div>
</template>

<script>
  import store from '../../store';

    export default {
        methods: {
          increment() {
            store.commit('increment')
          }
        }
    };
</script>
