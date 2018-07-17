<template>

  <transition name="fade" mode="out-in">
    <keep-alive :include="cachedViews">
      <router-view></router-view>
    </keep-alive>
  </transition>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cachedViews: ["Home","Articles","AdminDatabase"]
    };
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}

</style>
