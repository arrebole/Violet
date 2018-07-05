<template>
  <div id="error-app">
    <x-header></x-header>
    <article>

        <section class="r-error-nav">
          <h1 class="error-font-title">非常抱歉找不到页面</h1>
          <h3>本次错误生成时间: <span class="font-color-yellow">{{ birthday }}</span></h3>
          <h3>错误原因: <span class="font-color-yellow">{{ reason }}</span></h3>
          <h3>解决方法: <span class="font-color-yellow">{{ resolve }}</span></h3>
        </section>

    </article>
    <x-footer></x-footer>
  </div>
</template>


<script>
import xHeader from "../../components/header";
import xFooter from "../../components/footer";

export default {
  name: "Error",
  created(){
    this.getBirthday();
  },
  data(){
    return {
      birthday:"",
      reason:"未知",
      resolve:"暂无"
    }
  },
  methods:{
    getBirthday(){
      let NowTime = new Date();
      this.birthday = NowTime.toLocaleString();
    }
  },
  components: {
    "x-header": xHeader,
    "x-footer": xFooter
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/error.scss';
</style>
