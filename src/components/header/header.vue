<template>
  <header>
    <nav class="x-header-nav">
      <div class="x-hn-item x-hn-menuIco">
        <ivu-icon type="navicon-round"></ivu-icon>
      </div>
      <div class="x-hn-item">
        <router-link to="/">
          <h3>Arrebol</h3>
        </router-link>
      </div>
    </nav>
  </header>
</template>



<script>
export default {
  name: "xHeader"
};
</script>


<style lang="scss" scoped>

@mixin x-layout-header($height, $bgcolor) {
  header {
    height: $height;
    width: 100%;
    position: fixed;
    background-color: $bgcolor;
    box-shadow: 0px 0px 8px black;
    z-index: 99;
  }
}

.x-header-nav {
  display: flex;
  width: 100%;
  height: 100%;
  color: aliceblue;
}

.x-hn-item {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.x-hn-item > a > h3, .x-hn-menuIco {
  color: rgb(216, 216, 216);
}

.x-hn-menuIco {
  padding: 0 15px 0 15px;
  font-size: 20px;
  cursor: pointer;
}


@media screen and (min-width: 1200px) {
  @include x-layout-header($height:56px,$bgcolor:rgba(47,47,47,0.98));
}

@media screen and (max-width: 1200px) and (min-width: 992px) {
  @include x-layout-header($height:56px,$bgcolor:rgba(47,47,47,0.98));
}

@media screen and (max-width: 992px) and (min-width: 768px) {
  @include x-layout-header($height:56px,$bgcolor:rgba(47,47,47,0.98));
}

@media screen and (max-width: 768px) and (min-width: 575px) {
  @include x-layout-header($height:40px, $bgcolor:rgba(47,47,47,0.98));
}

@media screen and (max-width: 575px) {
  @include x-layout-header($height:40px, $bgcolor:rgba(47,47,47,0.98));
}

</style>
