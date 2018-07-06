<template>

  <div @click="changeAside()" class="x-aside" v-if="system.aside">
    <ul class="x-aside-nav">
      <router-link tag="li" :to="{ name: 'Articles' }">
        <ivu-icon type="ios-paper"></ivu-icon> 文章区
      </router-link>
      <router-link tag="li" :to="{ name: 'Video' }">
        <ivu-icon type="beer"></ivu-icon> 视频区
      </router-link>
      <router-link tag="li" :to="{ name: 'Firmware' }">
        <ivu-icon type="cube"></ivu-icon> 固件区
      </router-link>
      <router-link tag="li" :to="{ name: 'Images' }">

        <ivu-icon type="image"></ivu-icon> 壁纸区
      </router-link>

    </ul>
    
  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "xAside",
  computed: {
    ...mapState({
      system: "system"
    })
  },
  methods: {
    ...mapActions({
      changeAside: "changeAside"
    })
  }
};
</script>

<style lang="scss" scoped>
.x-aside {
  position: fixed;
  margin-top: 50px;
  z-index: 100;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.x-aside-nav {
  background-color: #fff;
  height: 100%;
  width: 250px;
  border-right: 1px solid rgb(221, 221, 221);
  padding-top: 20px;
  li {
    height: 50px;
    padding-left: 20%;
    line-height: 50px;
    &:hover {
      background-color: rgb(231, 231, 231);
    }
  }
}
</style>
