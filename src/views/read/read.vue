<template>
    <div class="read-app">
        <x-header></x-header>
        <article>

            <section class="r-read-nav">
                <ivu-breadcrumb separator="<b class='r-breadcrumb-separator'>/</b>">
                    <ivu-breadcrumbItem to="/article">Article</ivu-breadcrumbItem>
                    <ivu-breadcrumbItem :to="{ name:'Column',params:{ cvId: urlparams.cvId } }">{{ read.info.origin }}</ivu-breadcrumbItem>
                    <ivu-breadcrumbItem :to="{ name:'Column',params:{ cvId: urlparams.cvId, page: urlparams.page } }">{{ "P"+ urlparams.page }}</ivu-breadcrumbItem>
                </ivu-breadcrumb>
            </section>

            <ivu-spin v-if="system.loading" fix>
                <x-slack-loader></x-slack-loader>
            </ivu-spin>

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
        </article>
        <x-footer></x-footer>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import marked from "marked";
import xHeader from "../../components/header";
import xFooter from "../../components/footer";
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
    },
    urlparams() {
      return this.$route.params;
    }
  },
  methods: {
    ...mapActions({
      fetchRead: "fetchRead"
    })
  },
  components: {
    "x-header": xHeader,
    "x-footer": xFooter,
    "x-slack-loader": xSlackLoader
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/read.scss";
</style>
