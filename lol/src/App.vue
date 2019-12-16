<template>
  <div id="app">
    <el-header></el-header>
     <div class="container-fluid">
        <div class="row">
          <el-sidebar></el-sidebar>
          <router-view  class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"></router-view>
        </div>
     </div>
  </div>
</template>

<script>
import appHeader from './components/app-header'
import appSideBar from './components/app-sideBar'
import router from './router'
export default {
  name: 'app',
  components: {
    "el-header" : appHeader,
    "el-sidebar" : appSideBar
  },
  router
}
</script>

<style>
</style>
