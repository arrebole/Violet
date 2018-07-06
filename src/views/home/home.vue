<template>
  <div class="home-app">

    <x-header>

      <el-breadcrumb separator="/" slot="x-hn-item">
        <el-breadcrumb-item :to="{ name: 'Home' }">Arrebol</el-breadcrumb-item>
      </el-breadcrumb>
    </x-header>

    <transition name="el-fade-in-linear">
      <x-aside>
      </x-aside>
    </transition>

    <article>

      <section class="user-info">

        <h1>系统信息</h1>

        <h2>接入用户: customer </h2>
        <h2>接入时间:  {{ date }}</h2>
        <h2>接入系统: nginx静态处理 + nodejs(v1)</h2>

        <br/>
        <br/>
        <h1>建设进度</h1>
        <h2>基础建设已完成50%</h2>
        <h2>可以点击左上角菜单随意访问</h2>

        <br/>
        <br/>
        <h1>测试区</h1>
        <h2>1: <router-link to="/articles">articles</router-link></h2>

      </section>

    </article>

  </div>
</template>

<script>
import { mapActions } from "vuex";
import xHeader from "../../components/header";
import xAside from "../../components/aside";
export default {
  name: "Home",
  created(){
    this.getDate();
  },
  data() {
    return {
      date: "",
    };
  },
  methods: {
    getDate(){
      let time = new Date()
      this.date = time.toString();
    }
  },
  components: {
    "x-header": xHeader,
    "x-aside": xAside
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/home.scss";
</style>

