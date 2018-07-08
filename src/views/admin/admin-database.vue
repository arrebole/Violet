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

      <ivu-spin v-if="loading" fix>
        <x-slack-loader></x-slack-loader>
      </ivu-spin>

      <template v-else>

        <section class="r-db-search">

          <el-input placeholder="请输入内容" v-model="search">
            <h2 slot="prepend">cv</h2>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </section>

        <template v-for="(item,index) in table">

          <section class="r-db-item r-db-detail" :key="'table'+index">
            <h2>详情:</h2>
            <br/>
            <h3>Title: {{ item.title }}</h3>
            <h3>Author: {{ item.author }}</h3>
            <h3>Author ID: {{ item.author_id }}</h3>
            <h3>Create: {{ item.create }}</h3>
            <h3>Update: {{ item.update }}</h3>
            <h3>Version: {{ item.version }}</h3>
            <h3>Cover: {{ item.cover }}</h3>
            <h3>Icon: {{ item.icon }}</h3>
            <h3>Drief: {{ item.brief }}</h3>
            <h3>Description: {{ item.description }}</h3>
          </section>
        </template>

        <section class="r-db-item">
          <h2>文章:</h2>
          <br/>
          <ivu-table border :columns="columns" :data="articlesList"></ivu-table>
        </section>

      </template>

    </article>

  </div>
</template>

<script>
import { mapState } from "vuex";
import api from "../../api";
import xHeader from "../../components/header";
import xAside from "../../components/aside";
import xSlackLoader from "../../components/slack-loader";
export default {
  name: "AdminDatabase",
  created() {
    this.getDate();
  },
  data() {
    return {
      loading: false,
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
          title: "Column",
          key: "title"
        },
        {
          title: "Author",
          key: "author"
        }
      ],
      articlesList: []
    };
  },
  computed: {
    table() {
      var init = [];
      for (let i = 0; i < this.articlesList.length; i++) {
        if (this.articlesList[i].cv_id == this.search) {
          init = [this.articlesList[i]];
        }
      }
      return init;
    }
  },
  methods: {
    async getDate() {
      this.loading = true;
      let temp = await api.dbArticlesList();
      this.articlesList = temp.data;
      temp = null;
      this.loading = false;
    }
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

