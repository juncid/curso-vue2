<template>
  <div id="app" class="container">
    <h2>Tareas</h2>

    <app-task-list :tasks="tasks"></app-task-list>

    <button class="btn btn-success m-bottom" @click="deleteCompleted">Eliminar tareas completadas</button>

    <h4>Crear:</h4>
    <app-task-form @created="createTask"></app-task-form>

    <h4>Imprimir</h4>
    <app-task-form @created="alertTask"></app-task-form>

    <app-footer></app-footer>
  </div>
</template>

<script>

  import TaskList from './TaskList/TaskList'
  import TaskForm from './TaskForm/TaskForm'
  import AppFooter from './Footer/Footer'

  export default {
    components: {
      'app-task-list': TaskList,
      'app-task-form': TaskForm,
      'app-footer': AppFooter
    },
    created() {
      this.tasks.forEach((task, index) =>{
        this.$set(task, 'id', index + 1)
      });
    },
    data() {
      return {
        new_task: '',
        tasks: [
          {
            description: 'Aprender Vue.js',
            pending: true
          },
          {
            description: 'Subscribirse a Styde.net',
            pending: true
          },
          {
            description: 'Grabar lección de Vue',
            pending: false
          }
        ]
      }
    },
    methods: {
      createTask(task) {
        this.tasks.push(task);
      },
      deleteCompleted() {
        this.tasks = this.tasks.filter(task => task.pending);
      },
      alertTask(task) {
        alert(task.description);
      }
    }
  }
</script>

<style lang="scss">
 @import "sass/app";
  body {
    margin: 10px;
  }

  .container {
    max-width: 650px;

    h2 {
      max-width: 650px;
    }

  }

  .m-bottom{
    margin-bottom: 15px;
  }
</style>
