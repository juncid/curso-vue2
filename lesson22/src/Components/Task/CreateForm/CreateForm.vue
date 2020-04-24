<template>
  <div>
    <h2>Nueva Tarea:</h2>
    <form @submit.prevent="created" >

      <div class="form-group">
        <label for="title">Título</label>
        <input type="text" v-model="task.title" class="form-control" id="title">
      </div>

      <div class="form-group">
        <label for="description">Descripción</label>
        <textarea name="" id="description" cols="30" rows="6" v-model="task.description"
                  class="form-control"></textarea>
      </div>

      <button class="btn btn-primary">Crear tarea</button>
    </form>
  </div>
</template>

<script>
  import store from '../../../store/index'

    export default {
        data(){
          return {
            task: {
              id: '',
              title: '',
              description: '',
              pending: true
            }
          }
        },
        methods: {
          created() {
            store.createTask(this.task);

            this.$router.push({
              name: 'tasks.details',
              params: {id: this.task.id}
            });
          },
        }
    };
</script>

<style lang="scss">
</style>
