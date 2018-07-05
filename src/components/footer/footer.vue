<template>
  <footer>
    <div class="x-footer-content">
      <p class="x-fc-first">Copyright © xxxx - xxxx</p>
      <p>Arrebol. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "xFooter"
};
</script>

<style lang="scss" scoped>

footer {
  height: 120px;
  background: #2e3033;
}

.x-footer-content{
  .x-fc-first{
    padding-top: 25px;
  }
  p{
    text-align: center;
    font-size: 15px;
    color: rgb(177, 177, 177);
  }
}
</style>
