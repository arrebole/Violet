<template>
  <div class="read-app">

    <x-header>
      <el-breadcrumb separator="/" slot="x-hn-item">
        <el-breadcrumb-item :to="{ name: 'Home' }">Arrebol</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'Articles'}">articles</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'Column',params:{ cvId: $route.params.cvId } }">column</el-breadcrumb-item>
        <el-breadcrumb-item >{{ 'P' + $route.params.page }}</el-breadcrumb-item>
      </el-breadcrumb>
    </x-header>

    <article>

      <ivu-spin v-if="system.loading" fix>
        <x-slack-loader></x-slack-loader>
      </ivu-spin>

      <template v-else>

        <section class="r-read-itemInfo">
          <h1>{{ read.info.page_title }}</h1>
          <p>
            <span>书名: {{ read.info.origin }}</span>
            <span>作者: {{ read.info.author }}</span>
            <span>更新时间: {{ read.info.update }}</span>
          </p>
          <hr/>
        </section>
        <section class="r-read-itemMajor">
          <div class="r-read-majorTxt" v-html="markdown"></div>
        </section>
      </template>
    </article>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import marked from "marked";
import xHeader from "../../components/header";
import xSlackLoader from "../../components/slack-loader";
export default {
  name: "Read",
  created() {
    this.fetchRead(this.$route.params);
  },
  computed: {
    ...mapState({
      read: "read",
      system: "system"
    }),
    markdown() {
      return marked(this.read.major.text);
    }
  },
  methods: {
    ...mapActions({
      fetchRead: "fetchRead",
    })
  },
  components: {
    "x-header": xHeader,
    "x-slack-loader": xSlackLoader
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/read.scss";
</style>
