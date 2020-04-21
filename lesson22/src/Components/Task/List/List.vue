<template>
  <ul class="list-group tasks-list">
    <task v-for="(task, index) in tasks" :key="task.id"
              :tasks="tasks" :task="task" :index="index" @remove="deleteTask">
    </task>
  </ul>
</template>

<script>
    import Task from '../ListItem/ListItem'

    export default {
        components: {
          'task': Task
        },
        props: ['tasks'],
        methods: {
          deleteTask(index) {
            this.tasks.splice(index, 1);
          },
        }
    };
</script>

<style lang="scss">
  .tasks-list {
    margin-bottom: 40px;
  }
</style>
