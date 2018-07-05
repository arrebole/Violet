<template>
    <div class="x-comment">
        <div class="x-comment-user">
            <ivu-avatar icon="person" size="small" />
            <span class="x-comment-userName">
                <router-link to="/error">围观群众</router-link>
            </span>
        </div>
        <div class="x-comment-txt">
            <p>不错，好书一本~涨姿势！</p>
        </div>
        <div class="x-comment-info">
            <span>#1</span>
            <span>2016-03-15 19:09</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'xComment'
}
</script>

<style lang="scss" scoped>
.x-comment {
  margin: 2px 0px;
  background-color: #fff;
  padding: 10px 20px;
}

.x-comment-user {
  display: flex;
  align-items: center;
}

.x-comment-userName {
  margin-left: 10px;
}

.x-comment-txt {
  padding: 10px 20px;
}

.x-comment-info {
  padding: 0px 20px;
  color: rgb(185, 185, 185);
  span {
    margin-right: 5px;
  }
}
</style>
