<script>
  import store from '../../../store/index'
  import Form from '../Form/Form'

    export default {
        render(createElement){
          return createElement(Form, {
              props: {
                  title: 'Nueva tarea',
                  action: 'Crear tarea',
                  task: {}
              },
              on: {
                save: (draft) => {
                    let newTask = store.createTask(draft);

                    this.$router.push({
                        name: 'tasks.details',
                        params: {id: newTask.id}
                });

              }
            }
          });
        }
    };
</script>
