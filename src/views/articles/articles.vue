<template>
  <div id="article-app">
    <x-header>

      <el-breadcrumb separator="/" slot="x-hn-item">
        <el-breadcrumb-item :to="{ name: 'Home' }">Arrebol</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'Articles'}">articles</el-breadcrumb-item>
      </el-breadcrumb>

    </x-header>

    <transition name="el-fade-in-linear">
      <x-aside>
      </x-aside>
    </transition>

    <article>

      <ivu-spin v-if="system.loading" fix>
        <x-slack-loader></x-slack-loader>
      </ivu-spin>

      <template v-else>

        <section class="r-article-list">

          <template v-for="(column,index) in articles">

            <x-piece-simple 
            :key="'column'+ index" 
            :cover="column.cover" 
            :link="column.cv_id.slice(2)"
            :topic="column.topic"
            :title="column.title"
            >
            </x-piece-simple>

          </template>

        </section>

      </template>

    </article>

  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";
import xHeader from "../../components/header";
import xPieceSimple from "../../components/piece-simple";
import xSlackLoader from "../../components/slack-loader";
import xAside from "../../components/aside";

export default {
  name: "Articles",
  created() {
    this.fetchArticles();
  },
  computed: {
    ...mapState({
      articles: "articles",
      system: "system"
    })
  },
  methods: {
    ...mapActions({
      fetchArticles: "fetchArticles",
    })
  },
 components: {
    "x-header": xHeader,
    "x-piece-simple": xPieceSimple,
    "x-slack-loader": xSlackLoader,
    "x-aside":xAside
  } 
};
</script>


<style lang="scss" scoped>
@import "../../style/article.scss";
</style>
