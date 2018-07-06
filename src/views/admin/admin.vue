<template>
    <div class="admin-app">
        <x-header>
            <el-breadcrumb separator="/" slot="x-hn-item">
                <el-breadcrumb-item :to="{ name: 'Home' }">Arrebol</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'administration'}">admin</el-breadcrumb-item>
            </el-breadcrumb>
        </x-header>

        <transition name="el-fade-in-linear">
            <x-aside>
            </x-aside>
        </transition>

    </div>
</template>

<script>
import xHeader from "../../components/header";
import xAside from "../../components/aside";
import xSlackLoader from "../../components/slack-loader";
export default {
  name: "Administration",
  components: {
    "x-header": xHeader,
    "x-slack-loader": xSlackLoader,
    "x-aside": xAside
  }
};
</script>

<style lang="scss" scoped>
</style>

