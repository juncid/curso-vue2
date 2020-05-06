<script>
  import store from '../../../store/index'
  import Form from "../Form/Form";
  import Loader from "../../Loader/Loader"

   export default {
        props: ['id'],
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
              save: this.update
            }
          });

        },

        data() {
          return {
            task: null
          }
        },
        created() {
          this.findTask();
        },
        watch: {
          'id': 'findTask'
        },
        methods: {
          findTask() {
            setTimeout(()=>{
              this.task = clone(store.findTask(this.id));

              not_found_unless(this.task);
            }, 1500);
          },
          update(draft) {
            store.updateTask(this.id, draft);

            this.$router.push({
              name: 'tasks.details',
              params: {id: this.id}
            })
          }
        }
   };
</script>
