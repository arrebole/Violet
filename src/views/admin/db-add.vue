<template>
    <div class="db-add-app">
        <x-header>
            <el-breadcrumb separator="/" slot="x-hn-item">
                <el-breadcrumb-item :to="{ name: 'Home' }">Arrebol</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'DbAdd'}">add</el-breadcrumb-item>
            </el-breadcrumb>
        </x-header>

        <transition name="el-fade-in-linear">
            <x-aside>
            </x-aside>
        </transition>

        <ivu-spin v-if="loading" fix>
            <x-slack-loader></x-slack-loader>
        </ivu-spin>

    </div>
</template>


<script>
import api from "../../api";
import xHeader from "../../components/header";
import xAside from "../../components/aside";
import xSlackLoader from "../../components/slack-loader";
export default {
  name: "DbAdd",
  created(){
      this.getDate()
  },
  data(){
      return {
          loading: true
      }
  },
  methods:{
      getDate(){
          api.dbArticlesList();
          this.loading = false;

      }
  },
  components: {
    "x-header": xHeader,
    "x-aside": xAside,
    "x-slack-loader": xSlackLoader
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/db-add.scss";
</style>

