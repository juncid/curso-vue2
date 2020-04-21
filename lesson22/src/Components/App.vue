<template>
  <div id="app" class="container">

    <ul class="nav nav-tabs">
      <router-link tag="li" to="/" exact-active-class="active"><a>Dashboard</a></router-link>
      <router-link tag="li" to="/tasks" active-class="active"><a>Tareas</a></router-link>
    </ul>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from '../Components/Footer/Footer'

  export default {
    components: {
      'app-footer': AppFooter
    }
  }
</script>

<style lang="scss">
 @import "../sass/app";
  body {
    margin: 10px;
  }

  .container {
    max-width: 650px;

    h2 {
      max-width: 650px;
    }

  }

  .m-bottom{
    margin-bottom: 15px;
  }
</style>
