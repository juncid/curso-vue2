<template>
  <div class="row">
    <div class="col-xs-6 col-md-6">
      <div class="top">
        <h2>Tareas</h2>
        <router-link :to="{name: 'tasks.create'}" >Nueva tarea </router-link>
      </div>

      <ul class="list-group tasks-list">
        <task-item v-for="(task, index) in tasks" :key="task.id" :task="task">
        </task-item>
      </ul>

      <button class="btn btn-success" @click="deleteCompleted">Eliminar tareas completadas</button>
    </div>



    <div class="col-xs-6 col-md-6">
      <router-view></router-view>
    </div>


  </div>
</template>

<script>

  import TaskItem from './ListItem/ListItem'
  import TaskForm from './CreateForm/CreateForm'
  import store from '../../store/'


  export default {
    computed: {
      tasks:() => store.state.tasks
    },
    components: {
      'task-form': TaskForm,
      'task-item': TaskItem
    },
    methods: {
      deleteCompleted() {
        store.dispatch('deleteCompletedTasks');
      }
    }
  }
</script>

<style lang="scss">

  .top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .tasks-list {
    margin-bottom: 40px;
  }
</style>
