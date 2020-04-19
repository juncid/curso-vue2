<template>
  <li class="list-group-item"
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
  import EventBus from '../event-bus'
  import Icon from '../Icon/Icon'

  export default {
        components : {
          'app-icon': Icon
        },
        template: '#task-template',
        props:['task', 'index'],
        data: function (){
          return {
            editing: false,
            draft: ''
          };
        },
        methods: {
        toggleStatus: function () {
          this.task.pending = !this.task.pending;
        },
        edit: function () {
          console.log('Editing ' + this.index);
          EventBus.$emit('editing', this.index);
          this.draft = this.task.description;
          this.editing = true;
        },
        update: function () {
          this.task.description = this.draft;
          this.editing = false;
        },
        discard: function () {
          this.editing = false;
        },
        remove: function () {
          this.$emit('remove', this.index);
        }
      },
        created: function() {
        EventBus.$on('editing', function (index) {
          if(this.index != index) {
            console.log('Discarding '+this.index);
            this.discard();
          }
        }.bind(this));
      },
    };
</script>
