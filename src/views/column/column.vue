<template>
    <div id="column-app">
        <x-header>
            <el-breadcrumb separator="/" slot="x-hn-item">
                <el-breadcrumb-item :to="{ name: 'Home' }">Arrebol</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'Articles'}">articles</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'Column',params:{ cvId: $route.params.cvId } }">column</el-breadcrumb-item>
            </el-breadcrumb>
        </x-header>
        <!--  -->
        <transition name="el-fade-in-linear">
            <x-aside>
            </x-aside>
        </transition>

        <article>

            <ivu-spin v-if="system.loading" fix>
                <x-slack-loader></x-slack-loader>
            </ivu-spin>

            <template v-else>
                <!-- 标题信息 -->
                <section class="r-column-wrapper">
                    <x-caption :title="column.info.title" :author="column.info.author" :version="column.info.version" :update="column.info.update" :ico="column.info.ico" />
                </section>
                <!-- 简述 -->
                <section class="r-column-introduce">
                    <div class="r-E_introduce-txt">
                        <h2>简介</h2>
                        <p>{{ column.info.description }}</p>
                    </div>
                </section>
                <!-- 目录 -->
                <section class="r-column-directory">
                    <!--  -->
                    <div class="r-title-i">
                        <h2>全部目录</h2>
                    </div>
                    <!--  -->
                    <template v-for="(item,index) in column.major">
                        <div class="r-ed-p" :key="index">
                            <router-link :to="{ name: 'Read',params:{ cvId: $route.params.cvId, page:index } }">第 {{ index }} 章: {{ item['P'+ index] }}</router-link>
                            <ivu-icon type="chevron-right"></ivu-icon>
                        </div>
                    </template>

                </section>
                <!-- 评论 -->
                <section class="r-column-comment">
                    <!--  -->
                    <div class="r-title-i">
                        <h2>评论(2)</h2>
                    </div>
                    <!--  -->
                    <x-comment></x-comment>
                    <x-comment></x-comment>
                    <!--  -->
                    <div class="r-C_item-more">
                        <ivu-page :total="30"></ivu-page>
                    </div>
                    <!--  -->
                </section>

            </template>

        </article>

    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import marked from "marked";
import xHeader from "../../components/header";
import xCaption from "../../components/caption";
import xComment from "../../components/comment";
import xSlackLoader from "../../components/slack-loader";
import xAside from "../../components/aside";
export default {
  name: "Column",
  created() {
    this.fetchColumn("cv" + this.$route.params.cvId);
  },
  computed: {
    ...mapState({
      column: "column",
      system: "system"
    }),
    description() {
      return marked(this.column.info.description);
    }
  },
  methods: {
    ...mapActions({
      fetchColumn: "fetchColumn",
    })
  },
  components: {
    "x-header": xHeader,
    "x-caption": xCaption,
    "x-comment": xComment,
    "x-slack-loader": xSlackLoader,
    "x-aside":xAside
  }
};
</script>


<style lang="scss" scoped>
@import "../../style/column.scss";
</style>

