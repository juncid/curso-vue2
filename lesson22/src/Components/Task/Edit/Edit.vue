<template>
  <div v-if="task">
    <h2>Editar Tarea</h2>
    <form @submit.prevent="update" >

      <div class="form-group">
        <label for="title">Título</label>
        <input type="text" v-model="task.title" class="form-control" id="title">
      </div>

      <div class="form-group">
        <label for="description">Descripción</label>
        <textarea name="" id="description" cols="30" rows="6" v-model="task.description"
                  class="form-control"></textarea>
      </div>

      <button class="btn btn-success">Editar tarea</button>
      <button @click="$router.push({name:'tasks'})" class="btn btn-danger">Cancelar</button>
    </form>
  </div>
</template>

<script>
  import store from '../../../store/index'

   export default {
        props: ['id'],
        data() {
          return {
            task: null
          }
        },
        created() {
          this.findTask();
        },
        watch: {
          'id': 'findTask'
        },
        methods: {
          findTask() {
            this.task = clone(store.findTask(this.id));

            not_found_unless(this.task);
          },
          update() {
            store.updateTask(this.id, this.task);

            this.$router.push({
              name: 'tasks.details',
              params: {id: this.id}
            })
          }
        }
   };
</script>
