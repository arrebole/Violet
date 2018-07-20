<template>
  <div class="read-app">

    <x-header>
      <el-breadcrumb separator="/" slot="x-hn-item">
        <el-breadcrumb-item :to="{ name: 'Home' }">Arrebol</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'Articles'}">articles</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'Column',params:{ cvId: $route.params.cvId } }">column</el-breadcrumb-item>
        <el-breadcrumb-item>{{ 'P' + $route.params.page }}</el-breadcrumb-item>
      </el-breadcrumb>
    </x-header>

    <transition name="el-fade-in-linear">
      <x-aside>
      </x-aside>
    </transition>

    <article>

      <ivu-spin v-if="loading" fix>
        <x-slack-loader></x-slack-loader>
      </ivu-spin>

      <template v-else>

        <section class="r-read-itemInfo">
          <h1> 第{{ $route.params.page }}章: {{ read.page_title }}</h1>
        </section>
        <section class="r-read-itemMajor">
          <div class="r-read-majorTxt" v-html="markdown"></div>
        </section>
      </template>
    </article>
  </div>
</template>


<script>
import api from "../../api";
import { mapState, mapActions } from "vuex";
import marked from "marked";
import xHeader from "../../components/header";
import xAside from "../../components/aside";
import xSlackLoader from "../../components/slack-loader";
export default {
  name: "Read",
  created() {
    this.fetchDate(this.$route.params);
  },
  data() {
    return {
      loading: true,
      read: {}
    };
  },
  computed: {
    ...mapState({
      system: "system"
    }),
    markdown() {
      return marked(this.read.text);
    }
  },
  methods: {
    async fetchDate(params) {
      this.loading = true;
      let temp = await api.read(params);
      this.read = temp.data.data;
      this.loading = false;
    }
  },
  components: {
    "x-header": xHeader,
    "x-slack-loader": xSlackLoader,
    "x-aside":xAside
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/read.scss";
</style>
