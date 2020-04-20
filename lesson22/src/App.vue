<template>
  <div id="app" class="container">
    <h2>Tareas</h2>

    <ul class="list-group tasks">
      <app-task v-for="(task, index) in tasks" :key="task.id"
                :tasks="tasks" :task="task" :index="index" @remove="deleteTask">
      </app-task>
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
      createTask() {
        this.tasks.push({
          description: this.new_task,
          pending: true,
          editing: false
        });

        this.new_task = '';
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      deleteCompleted() {
        this.tasks = this.tasks.filter(task => task.pending);
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
