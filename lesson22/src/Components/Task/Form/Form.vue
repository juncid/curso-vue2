<template>
  <div>
    <h2>{{title}}</h2>
    <form @submit.prevent="save" >

      <div class="form-group">
        <label for="title">Título</label>
        <input type="text" v-model="draft.title" class="form-control" id="title">
      </div>

      <div class="form-group">
        <label for="description">Descripción</label>
        <textarea name="" id="description" cols="30" rows="6" v-model="draft.description"
                  class="form-control"></textarea>
      </div>


      <button class="btn"
              :class="edit ? 'btn-success': 'btn-primary'"
      >{{action}}</button>
      <button v-if="edit" @click="$router.push({name:'tasks'})" class="btn btn-danger">Cancelar</button>

    </form>
  </div>
</template>

<script>
    export default {
        props: ['title', 'action', 'task', 'edit'],
        data(){
          return {
            draft: clone(this.task)
          }
        },
        methods: {
          save() {
            this.$emit('save', this.draft)
          }
        }
    };
</script>
