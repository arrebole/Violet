<template>
  <header>

    <nav class="x-header-nav">
      <div class="x-hn-item x-side-menu">
        <ivu-icon class="x-icon-menu" @click="changeAside()" type="navicon-round"></ivu-icon>
      </div>
      <div class="x-hn-item">
        <slot name="x-hn-item"></slot>
      </div>
    </nav>


  </header>
</template>



<script>
import { mapState,mapActions} from "vuex";
export default {
  name: "xHeader",
  computed:{
    ...mapState({
      system:"system"
    })
  },
  methods:{
    ...mapActions({
      changeAside:"changeAside"
    })
  }

};
</script>


<style lang="scss" scoped>
header {
  height: 50px;
  width: 100%;
  position: fixed;
  display: flex;
  background-color: #fdfdfd;
  border-bottom: 1px solid #e6e6e6;
  z-index: 99;
}

.x-header-nav {
  display: flex;
  width: 100%;
  height: 100%;
}

.x-hn-item {
  display: flex;
  align-items: center;
  font-size: 14px;
}


.x-side-menu {
  padding: 0 15px 0 15px;
  font-size: 20px;
}

.x-icon-menu{
  cursor: pointer;
  &:hover{
    color: rgb(73, 4, 100);
  }
  
}



</style>
