import Vue from 'vue'
import App from './Components/App.vue'
import router from './router/index'


window.not_found = function () {
  console.log('Not found:'+ router.currentRoute.fullPath);
  router.replace('/404');
};

window.not_found_unless = function (condition) {
  if(!condition) {
    not_found();
  }
};

window.clone = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
