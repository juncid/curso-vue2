import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '../Components/Task/Task'
import Dashboard from '../Components/Dashboard/Dashboard'

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
    }
  ]
});

export default router;
