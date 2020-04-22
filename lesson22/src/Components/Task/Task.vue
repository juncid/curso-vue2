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
  import store from '../../store/'

  export default {
    components: {
      'task-list': TaskList,
      'task-form': TaskForm
    },
    data() {
      return {
        new_task: '',
        tasks: store.state.tasks
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
