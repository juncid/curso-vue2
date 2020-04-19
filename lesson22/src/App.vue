<template>
  <div id="app" class="container">
    <h2>Tareas</h2>

    <ul class="list-group tasks">
      <li is="app-task" v-for="(task, index) in tasks"
          :tasks="tasks" :task="task" :index="index" @remove="deleteTask"></li>
    </ul>
    <button class="btn btn-success m-bottom" @click="deleteCompleted">Eliminar tareas completadas</button>
    <br>
    <form @submit.prevent="createTask" class="new-task-form">
      <input v-model="new_task" type="text" class="form-control">
      <button class="btn btn-primary">Crear tarea</button>
    </form>

    <footer class="footer">
      <p>&copy; 2020 Juan Cid</p>
    </footer>
  </div>
</template>

<script>
  import Task from './Tasks/Tasks'

  export default {
    components: {
      'app-task': Task
    },
    data: function () {
      return {
        new_task: '',
        tasks: [
          {
            description: 'Aprender Vue.js',
            pending: true,
            editing: false
          },
          {
            description: 'Subscribirse a Styde.net',
            pending: true,
            editing: false
          },
          {
            description: 'Grabar lección de Vue',
            pending: false,
            editing: false
          }
        ]
      }
    },
    methods: {
      createTask: function () {
        this.tasks.push({
          description: this.new_task,
          pending: true,
          editing: false
        });

        this.new_task = '';
      },
      deleteTask: function(index) {
        this.tasks.splice(index, 1);
      },
      deleteCompleted: function () {
        this.tasks = this.tasks.filter(function (task) {
          return task.pending;
        });
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
