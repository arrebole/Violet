<template>
  <div class="login-app">
    <x-header>
      <el-breadcrumb separator="/" slot="x-hn-item">
        <el-breadcrumb-item :to="{ name: 'Home' }">Arrebol</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'Login'}">Login</el-breadcrumb-item>
      </el-breadcrumb>
    </x-header>

    <transition name="el-fade-in-linear">
      <x-aside>
      </x-aside>
    </transition>
    <article>
      <section class="r-login-form">

      </section>

    </article>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import xHeader from "../../components/header";
import xAside from "../../components/aside";
import xSlackLoader from "../../components/slack-loader";
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      message: ""
    };
  },
  computed: {
    ...mapState({
      login: "login"
    })
  },
  methods: {
    ...mapActions({
      changeLogin: "changeLogin"
    })
  },
  components: {
    "x-header": xHeader,
    "x-slack-loader": xSlackLoader,
    "x-aside": xAside
  }
};
</script>


<style lang="scss" scoped>
@import "../../style/login.scss";
</style>
