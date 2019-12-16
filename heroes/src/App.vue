<template>
  <div id="app">
    <el-header></el-header>
    <div class="container-fluid">
      <div class="row">
        <el-side-bar></el-side-bar>
        <transition name="slide">
          <router-view class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"; //引入vue.js的全局对象
import appHeader from "./components/app-header"; //引入组件对象
import appSideBar from "./components/app-sidebar";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    "el-header": appHeader,
    "el-side-bar": appSideBar
  }
};
</script>

<style>
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-to,
.slide-leave {
  opacity: 1;
}
.slide-enter-active {
  transition: all 2s;
}
</style>



