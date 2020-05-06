<template>
    <div>
      <div v-if="task">
        <h2>{{ task.title }}</h2>
        <p>{{task.description}}</p>

        <div class="well">
          <button @click="toggleStatusTask" class="btn" :class="task.pending ? 'btn-default' : 'btn-primary'">
            <app-icon img="ok"></app-icon> Completar
          </button>
          <button @click="editTask" class="btn btn-default">
            <app-icon img="edit"></app-icon> Editar
          </button>
          <button @click="deleteTask" class="btn btn-default">
            <app-icon img="trash"></app-icon> Eliminar
          </button>
        </div>
      </div>

      <div v-else>
        <h2>Tarea no encontrada</h2>
      </div>
    </div>
</template>

<script>
  import store from '../../../store';
  import Icon from "../../Icon/Icon";

    export default {
      props: ['id'],
      computed: {
        task() {
          return store.findTask(this.id);
        }
      },
      components: {
        'app-icon': Icon
      },
      methods : {
        toggleStatusTask() {
          store.toggleTask(this.task);
        },
        deleteTask() {
          store.deleteTask(this.id);
          this.$router.replace({name: 'tasks'});
        },
        editTask() {
          this.$router.push({
            name: 'tasks.edit',
            params: {id: this.id}
          });
        }
      }

    };
</script>

<style lang="scss">
  .well{
    display: flex;
    justify-content: space-between;
  }
</style>
