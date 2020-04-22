<template>
  <li @click="select" class="list-group-item task-list-item"
      :class="{completed: !task.pending}">
    <a @click.stop="toggleStatus">
      <app-icon :img="task.pending ? 'unchecked': 'check'"></app-icon>
    </a>
    <span class="description">{{ task.title }}</span>
  </li>
</template>

<script>
  import EventBus from '../../../event-bus'
  import Icon from '../../Icon/Icon'

  export default {
        components : {
          'app-icon': Icon
        },
        template: '#task-template',
        props:['task', 'index'],
        data(){
          return {
            draft: ''
          };
        },
        methods: {
        toggleStatus() {
          this.task.pending = !this.task.pending;
        },
        select()  {
          this.$router.push('/tasks/' + this.task.id)
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
  }
</style>
