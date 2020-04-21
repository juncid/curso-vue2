<template>
  <div>
    <h2>Tareas</h2>
    <task-list :tasks="tasks"></task-list>

    <button class="btn btn-success m-bottom" @click="deleteCompleted">Eliminar tareas completadas</button>

    <task-form @created="createTask"></task-form>
  </div>
</template>

<script>
  import TaskList from './List/List'
  import TaskForm from './CreateForm/CreateForm'

  export default {
    components: {
      'task-list': TaskList,
      'task-form': TaskForm
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
