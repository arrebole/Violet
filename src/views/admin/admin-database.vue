<template>
    <div class="db-app">
        <x-header>
            <el-breadcrumb separator="/" slot="x-hn-item">
                <el-breadcrumb-item :to="{ name: 'Home' }">Arrebol</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'AdminDatabase'}">database</el-breadcrumb-item>
            </el-breadcrumb>
        </x-header>

        <transition name="el-fade-in-linear">
            <x-aside>
            </x-aside>
        </transition>

        <article>
            <section class="r-db-search">

                <el-input placeholder="请输入内容" v-model="search">
                    <h2 slot="prepend">cv</h2>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </section>

            <section class="r-db-item">
                <h2>文章:</h2>
                <br/>
                <ivu-table border :columns="columns" :data="articles"></ivu-table>
            </section>

        </article>

    </div>
</template>

<script>
import xHeader from "../../components/header";
import xAside from "../../components/aside";
import xSlackLoader from "../../components/slack-loader";
import articlesVue from "../articles/articles.vue";
export default {
  name: "AdminDatabase",
  data() {
    return {
      search: "",
      select: "",
      user: {},
      columns: [
        {
          type: "index",
          width: 60,
          align: "center"
        },
        {
          title: "ID",
          key: "cv_id"
        },
        {
          title: "Name",
          key: "title"
        },
        {
          title: "Author",
          key: "author"
        }
      ],
      articles: [
        {
          title: "某某某",
          cv_id: "cv000000000",
          author:"xxx"
        }
      ]
    };
  },
  components: {
    "x-header": xHeader,
    "x-slack-loader": xSlackLoader,
    "x-aside": xAside
  }
};
</script>


<style lang="scss" scoped>
@import "../../style/admin-database.scss";
</style>

