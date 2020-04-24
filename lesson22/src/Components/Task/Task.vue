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
    components: {
      'task-form': TaskForm,
      'task-item': TaskItem
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
