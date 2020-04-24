<template>
  <li @click="select" class="list-group-item task-list-item"
      :class="{active: isActive,completed: !task.pending}">
    <a @click.stop="toggleStatus">
      <app-icon :img="task.pending ? 'unchecked': 'check'"></app-icon>
    </a>
    <span class="description">{{ task.title }}</span>
  </li>
</template>

<script>
  import store from '../../../store/index'
  import Icon from "../../Icon/Icon";

  export default {
    components: {
      'app-icon': Icon
    },
    props:['task'],
    data(){
      return {
        draft: ''
      };
    },
    computed: {
          isActive() {
          return this.task.id == this.$route.params.id;
          }
    },
    methods: {
        toggleStatus() {
          store.toggleTask(this.task);
        },
        select()  {
          let route = this.isActive
            ? {name: 'tasks'}
            : {name: 'tasks.details', params: {id: this.task.id}};
          this.$router.push(route)
        }
      }
    };
</script>

<style lang="scss">
  .task-list-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    a {
      text-decoration: none;
    }

  }

  .task-list-item .description {
    flex: 1;
    padding: 0 5px;
  }

  .task-list-item {

    &.completed {
      color: #999;

      a {
        color: #999;
      }

      .description {
        text-decoration: line-through;
      }
    }

    &.active a, &.active{
      color: #ffffff;
    }

  }
</style>
