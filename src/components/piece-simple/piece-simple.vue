<template>

  <div class="x-az-module">

    <!-- 封面 -->
    <div class="x-azm-imgContain">
      <router-link :to="{ name:'Column', params: { cvId: link }}" class="x-azm-imga">
        <img class="x-azm-img" :src="cover" />
      </router-link>
    </div>

    <div class="x-azm-infoContain">
      <div class="x-azmi-topic">
        <h3>{{ topic }}</h3>
      </div>

      <div class="x-azmi-title">
        <h1>{{ title }}</h1>
      </div>

    </div>

  </div>

</template>

<script>

export default {
  name: "xPieceSimple",
  props: ["cover", "link","topic","title"]
};
</script>

<style lang="scss" scoped>

$space:10px;


@mixin x-az-module($margin) {
  .x-az-module {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);
    margin: 20px 0 $margin 0;
    border-radius: 5px;
  }
}



.x-azm-imgContain {
  padding: 0 0;
}

.x-azm-img {
  min-height: 250px;
  width: 100%;
  object-fit: cover;
  object-position: 80%;
  display: block;
}
.x-azm-imga {
  display: inline;
}

.x-azm-infoContain{
  padding: 15px 10px;
}


.x-azmi-topic{
  color: rgb(189, 189, 189);
  padding-left: 10px;
}

.x-azmi-title{
  padding-left: 10px;
}

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
