<template>

  <div class="x-az-module">

    <div class="x-azm-header">

      <slot name="avatar">
        <ivu-icon type="erlenmeyer-flask"></ivu-icon>
      </slot>

      <slot name="author">
        <span>Arrebol</span>
      </slot>

    </div>

    <div class="x-azm-title">
      <slot name="title">
        <h2>数据错误</h2>
      </slot>
    </div>

    <router-link :to="{ name:'Column', params: { cvId: link }}" class="x-azm-imga">
      <img class="x-azm-img" :src="cover" />
    </router-link>

    <div class="x-azm-description">
      <slot name="description">
        <p>暂时拿来排版,内容毫无关系.</p>
      </slot>
    </div>

  </div>

</template>

<script>
export default {
  name: "xPieceSimple",
  props:['cover','link']
};
</script>

<style lang="scss" scoped>
@mixin x-az-module($margin) {
  .x-az-module {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);
    margin: 5px 0 $margin 0;
    border-radius: 5px;
  }
}

@mixin x-azm-description($font-size, $padding) {
  .x-azm-description {
    padding: $padding 10px $padding 10px;
    color: #999;
    p {
      font-size: $font-size;
    }
  }
}

.x-azm-header {
  width: 100%;
  padding: 10px 10px 0px 10px;
  img {
    box-sizing: border-box;
    vertical-align: middle;
    width: 19px;
    height: 19px;
  }
  span {
    padding-left: 3px;
    font-size: 12px;
    color: #999;
  }
}

.x-azm-img {
  width: 100%;
  display: block;
}
.x-azm-imga {
  display: inline;
}

.x-azm-title > h2 {
  font-size: 16px;
  padding: 0px 10px 0px 10px;
}

@media screen and (min-width: 480px) {
  @include x-azm-description($font-size: 14px, $padding: 15px);
}

@media screen and (max-width: 480px) {
  @include x-azm-description($font-size: 8px, $padding: 5px);
}

//---------------------------

@media screen and (min-width: 1200px) {
  @include x-az-module($margin: 60px);
}

@media screen and (max-width: 1200px) and (min-width: 992px) {
  @include x-az-module($margin: 60px);
}

@media screen and (max-width: 992px) and (min-width: 768px) {
  @include x-az-module($margin: 50px);
}

@media screen and (max-width: 768px) and (min-width: 575px) {
  @include x-az-module($margin: 30px);
}

@media screen and (max-width: 575px) {
  @include x-az-module($margin: 15px);
}
</style>
