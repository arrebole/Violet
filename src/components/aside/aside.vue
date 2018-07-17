<template>

  <div class="x-aside" v-if="system.aside">
    <el-menu class="x-aside-menu" router :default-openeds="['2']" :default-active="$route.path">

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">管理</span>
        </template>
        <el-menu-item-group>
          <span slot="title">超级管理</span>
          <el-menu-item index="1-1" :route="{ name:'DbAdd' }">添加数据</el-menu-item>
          <el-menu-item index="1-2" :route="{ name:'DbUpdate' }">修改数据</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" :route="{ name:'Articles' }">文章区</el-menu-item>
          <el-menu-item index="2-2" :route="{ name:'Firmware' }">固件区</el-menu-item>
          <el-menu-item index="2-3" :route="{ name:'Video' }" >视频区</el-menu-item>
          <el-menu-item index="2-4" :route="{ name:'Images' }" >图片区</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>

    <div @click="changeAside" class="x-aside-fill">

    </div>

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
  display: inline-flex;
  margin-top: 50px;
  z-index: 100;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.x-aside-menu {
  display: inline-block;
  height: 100%;
  width: 240px;
}

.x-aside-fill{
  height: 100%;
  width: 100%;
  
}
</style>
