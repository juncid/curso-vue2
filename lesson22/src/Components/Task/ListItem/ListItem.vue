<template>
  <li class="list-group-item task-list-item"
      :class="{editing: editing, completed: !task.pending}">
    <a @click="toggleStatus">
      <app-icon :img="task.pending ? 'unchecked': 'check'"></app-icon>
    </a>

    <template v-if="!editing">
      <span class="description">{{ task.description }}</span>
      <div>
        <a @click="edit">
          <app-icon img="edit"></app-icon>
        </a>
        <a @click="remove">
          <app-icon img="trash"></app-icon>
        </a>
      </div>
    </template>

    <template v-else>
      <input  type="text" v-model="draft">
      <div>
        <a @click="update">
          <app-icon img="ok"></app-icon>
        </a>
        <a @click="discard">
          <app-icon img="remove"></app-icon>
        </a>
      </div>
    </template>
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
            editing: false,
            draft: ''
          };
        },
        methods: {
        toggleStatus() {
          this.task.pending = !this.task.pending;
        },
        edit() {
          EventBus.$emit('editing', this.index);
          this.draft = this.task.description;
          this.editing = true;
        },
        update() {
          this.task.description = this.draft;
          this.editing = false;
        },
        discard() {
          this.editing = false;
        },
        remove() {
          this.$emit('remove', this.index);
        }
      },
        created() {
        EventBus.$on('editing', (index) => {
          if(this.index != index) {
            this.discard();
          }
        });
      },
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

    &.editing {
      box-shadow: inset 0 0 5px #999;
    }

    input {
      flex: 1;
      padding: 0 5px;
    }
  }

  .tasks-list-item .description {
    flex: 1;
    padding: 0 5px;
  }

  .task-list-item {
    input {
      border: 0;

      &:focus {
        outline: none;
      }
    }

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
