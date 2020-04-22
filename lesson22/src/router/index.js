import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '../Components/Task/Task'
import Dashboard from '../Components/Dashboard/Dashboard'
import TaskDetails from '../Components/Task/Details/Details'
import ErrorNotFound from '../Components/Errors/NotFound/NotFound'

Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/tasks',
      component: Tasks
    },
    {
      path: '/tasks/:id',
      component: TaskDetails,
      props: true
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
