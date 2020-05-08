<script>
import store from '../../../store/index'
import Form from "../Form/Form";
import Loader from "../../Loader/Loader"

export default {
  props: ['id'],
  computed: {
    task() {
      return store.getters.findTask(this.id)
    }
  },
  render(createElement){
    if (!this.task) {
      return createElement(Loader);
    }

    return createElement(Form, {
      props: {
           title: 'Editar Tarea',
           action: 'Actualizar tarea',
           task: this.task,
           edit: true
         },
      on: {
           save: (draft) => {
             store.dispatch('updateTask', {
               id: this.id,
               draft
             });

             this.$router.push({
               name: 'tasks.details',
               params: {id: this.id}
             });
           }
         }
    });
  }
};
</script>
