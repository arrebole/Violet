<template>
  <div id="article-app">
    <x-header></x-header>
    <article>

      <section class="r-article-nav">
        <ivu-breadcrumb separator="<b class='r-breadcrumb-separator'>/</b>">
          <ivu-breadcrumbItem :to="{ name: 'Articles' }">Article</ivu-breadcrumbItem>
        </ivu-breadcrumb>
      </section>

      <ivu-spin v-if="system.loading" fix >
        <x-slack-loader></x-slack-loader>
      </ivu-spin>

      <section class="r-article-list" v-else>

        <template v-for="(column,index) in articles.major">

          <x-piece-simple :key="index" :cover="column.cover" :link="column.cv_id.slice(2)">
            <ivu-icon slot="avatar" type="erlenmeyer-flask"></ivu-icon>
            <span slot="author">{{ column.author }}</span>
            <h2 slot="title">{{ column.title }}</h2>
            <p slot="description">{{ column.brief }}</p>

          </x-piece-simple>

        </template>

      </section>

    </article>

    <x-footer></x-footer>
  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";
import xHeader from "../../components/header";
import xFooter from "../../components/footer";
import xPieceSimple from "../../components/piece-simple";
import xSlackLoader from "../../components/slack-loader";

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
      fetchArticles: "fetchArticles"
    })
  },
  components: {
    "x-header": xHeader,
    "x-footer": xFooter,
    "x-piece-simple": xPieceSimple,
    "x-slack-loader": xSlackLoader
  }
};
</script>


<style lang="scss" scoped>
@import "../../style/article.scss";
</style>
