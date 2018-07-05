<template>
  <div id="home-app">
    <x-header></x-header>

    <article>
      <!-- 轮播图 -->
      <section class="r-home-wrapper">
      </section>
      <!-- bar -->
      <section class="r-home-bar"></section>
      <!-- 分区 -->
      <section class="r-home-zone">

        <router-link :to="{ name: 'Articles'}">
          <ivu-card class="r-hz-card">
            <h2>
              <ivu-icon type="pound"></ivu-icon> Article
            </h2>
          </ivu-card>
        </router-link>

        <router-link :to="{ name: 'Video' }">
          <ivu-card class="r-hz-card">
            <h2>
              <ivu-icon type="film-marker"></ivu-icon> Video
            </h2>
          </ivu-card>
        </router-link>

        <router-link :to="{ name: 'Firmware' }">
          <ivu-card class="r-hz-card">
            <h2>
              <ivu-icon type="cube"></ivu-icon> Firmware
            </h2>
          </ivu-card>
        </router-link>

        <router-link :to="{ name: 'Images' }">
          <ivu-card class="r-hz-card">
            <h2>
              <ivu-icon type="image"></ivu-icon> Image
            </h2>
          </ivu-card>
        </router-link>

      </section>
      <!-- show -->
      <section class="r-home-excellent"></section>
    </article>
    <!-- footer -->
    <x-footer></x-footer>
  </div>
</template>

<script>
import xHeader from "../../components/header";
import xFooter from "../../components/footer";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
  },
  computed: {},
  components: {
    "x-header": xHeader,
    "x-footer": xFooter
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/home.scss";
</style>
