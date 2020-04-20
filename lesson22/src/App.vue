<template>
  <div id="app" class="container">
    <h2>Tareas</h2>

    <app-task-list :tasks="tasks"></app-task-list>

    <button class="btn btn-success m-bottom" @click="deleteCompleted">Eliminar tareas completadas</button>

    <h4>Crear:</h4>
    <app-task-form @created="createTask"></app-task-form>

    <h4>Imprimir</h4>
    <app-task-form @created="alertTask"></app-task-form>


    <footer class="footer">
      <p>&copy; 2020 Juan Cid</p>
    </footer>
  </div>
</template>

<script>

  import TaskList from './TaskList/TaskList'
  import TaskForm from './TaskForm/TaskForm'

  export default {
    components: {
      'app-task-list': TaskList,
      'app-task-form': TaskForm
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
        ],
        tasks2: [
          {
            description: 'Aprender Vue 2',
            pending: true
          },
          {
            description: 'Subscribirse a Styde',
            pending: true
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
