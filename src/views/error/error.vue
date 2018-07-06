<template>
  <div id="error-app">
    <x-header>
      <el-breadcrumb separator="/" slot="x-hn-item">
        <el-breadcrumb-item :to="{ name: 'Home' }">Arrebol</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'Error' }">error</el-breadcrumb-item>
      </el-breadcrumb>
    </x-header>

    <transition name="el-fade-in-linear">
      <x-aside>
      </x-aside>
    </transition>

    <article>

      <section class="r-error-content">
        <h1 class="error-font-title">非常抱歉找不到页面</h1>
        <h3>本次错误生成时间:
          <span class="font-color-yellow">{{ birthday }}</span>
        </h3>
        <h3>错误原因:
          <span class="font-color-yellow">{{ reason }}</span>
        </h3>
        <h3>解决方法:
          <span class="font-color-yellow">{{ resolve }}</span>
        </h3>
      </section>

    </article>

  </div>
</template>


<script>
import { mapActions } from "vuex";
import xHeader from "../../components/header";
import xAside from "../../components/aside";

export default {
  name: "Error",
  created() {
    this.getBirthday();
  },
  data() {
    return {
      birthday: "",
      reason: "未知",
      resolve: "暂无"
    };
  },
  methods: {
    getBirthday() {
      let NowTime = new Date();
      this.birthday = NowTime.toLocaleString();
    }
  },
  components: {
    "x-header": xHeader,
    "x-aside": xAside
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/error.scss";
</style>
