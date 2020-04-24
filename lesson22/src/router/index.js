import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '../Components/Task/Task'
import Dashboard from '../Components/Dashboard/Dashboard'
import TaskDetails from '../Components/Task/Details/Details'
import ErrorNotFound from '../Components/Errors/NotFound/NotFound'
import TaskCreate from '../Components/Task/CreateForm/CreateForm'
import TaskEdit from '../Components/Task/Edit/Edit'
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/to-do',
      component: Tasks,
      children: [
        {
          path: '',
          name: 'tasks',
          component : {
            template:'<h2>Por favor seleccione una tarea</h2>'
          }
        },
        {
          path: ':id',
          name: 'tasks.details',
          component: TaskDetails,
          props: true
        },
        {
          path: 'create',
          name: 'tasks.create',
          component: TaskCreate
        },
        {
          path: ':id/edit',
          name: 'tasks.edit',
          component: TaskEdit,
          props: true
        }
      ]
    },
    {
      path: '/404',
      component: ErrorNotFound
    },
    {
      path: '*',
      redirect: '/404'
    }

  ]
});

export default router;
