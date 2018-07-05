<template>
  <div class="x-caption">
    <!-- COVER -->
    <div class="x-caption-cover">
      <img :src="ico" />
    </div>
    <!-- INFO -->
    <div class="x-caption-info">
      <!--  -->
      <div class="r-C_info-txt">
        <h1>{{ title }}</h1>
        <h3>Author: {{ author }}</h3>
        <h3>Version: {{ version }}</h3>
        <h3>Update: {{ update }}</h3>
      </div>
      <!--  -->
    </div>

  </div>
</template>


<script>
export default {
  name: "xCaption",
  props:['title','author','version','update','ico']
};
</script>


<style lang="scss" scoped>
@mixin xCaption-big {
  .x-caption{
    display: flex;
    padding: 20px;
    margin-left: 25px;
  }
  .x-caption-cover{
    flex: 0 1 auto;
    margin: {
      top: 0;
      left: 60px;
      right: 60px;
    }
    img{
      height: 180px;
    }
  }
  .x-caption-info{
    flex: 0 1 auto;
    h1{
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .r-C_info-txt{
      h3 {
        padding: 3px;
      }
    }

  }
}


@mixin xCaption-small {
    .x-caption{
    padding: 30px;
  }
  .x-caption-cover{
    flex: 0 1 auto;
    text-align: center;
    img{
      height: 128px;
    }
  }
  .x-caption-info{
    flex: 0 1 auto;
    text-align: center;
    h1{
      font-size: 20px;
      margin-bottom: 10px;
      margin-top: 10px;
    }

  }
}

@media screen and (min-width: 768px) {
  @include xCaption-big();
}

@media screen and (max-width: 768px) {
  @include xCaption-small();
}
</style>
