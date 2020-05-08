<script>
  import store from '../../../store/index'
  import Form from '../Form/Form'

    export default {
        render(createElement){
          return createElement(Form, {
              props: {
                  title: 'Nueva tarea',
                  action: 'Crear tarea',
                  task: {
                    title: '',
                    description: ''
                  }
              },
              on: {
                save: (draft) => {
                    store.dispatch('createTask', draft).then( newTask => {
                      this.$router.push({
                        name: 'tasks.details',
                        params: {id: newTask.id}
                      });
                    });
              }
            }
          });
        }
    };
</script>
