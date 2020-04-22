<template>
    <div>
      <div v-if="task">
        <h2>{{ task.title }}</h2>
        <p>{{task.description}}</p>
      </div>

      <div v-else>
        <h2>Tarea no encontrada</h2>
      </div>
    </div>
</template>

<script>
  import store from '../../../store';

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
      watch : {
        id: 'findTask'
      },
      methods : {
        findTask() {
          this.task = store.findTask(this.id);

          not_found_unless(this.task);
        }
      }

    };
</script>
