<template>
  <div class="footerBox">
    <div
      :class="{ on: $route.path.indexOf('/indexpage') >= 0 }"
      @click="goTo('/indexpage')"
    >
      <div class="icon">
        <img
          :src="
            $route.path.indexOf('/indexpage') >= 0
              ? require('@/assets/images/index-icon-p.png')
              : require('@/assets/images/index-icon.png')
          "
          alt=""
        />
      </div>
      <p>首页</p>
    </div>
    <div :class="{ on: '/dynamic' === $route.path }" @click="goTo('/dynamic')">
      <div class="icon">
        <img
          :src="
            '/dynamic' === $route.path
              ? require('@/assets/images/fc-icon-p.png')
              : require('@/assets/images/fc-icon.png')
          "
          alt=""
        />
      </div>
      <p>动态</p>
    </div>
    <div class="add">
      <img src="@/assets/images/add.png" alt="" />
    </div>
    <div
      :class="{ on: '/vippurchase' === $route.path }"
      @click="goTo('/vippurchase')"
    >
      <div class="icon">
        <img
          :src="
            '/vippurchase' === $route.path
              ? require('@/assets/images/shop-icon-p.png')
              : require('@/assets/images/shop-icon.png')
          "
          alt=""
        />
      </div>
      <p>会员购</p>
    </div>
    <div
      :class="{ on: '/personinit' === $route.path }"
      @click="goTo('/personinit')"
    >
      <div class="icon">
        <img
          :src="
            '/personinit' === $route.path
              ? require('@/assets/images/down-icon-p.png')
              : require('@/assets/images/down-icon.png')
          "
          alt=""
        />
      </div>
      <p>我的</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "downFooter",
  data() {
    return {};
  },
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style lang="less" scoped>
.footerBox {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 5px 25px;
  .icon {
    margin: 0 auto;
    width: 25px;
    height: 25px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    text-align: center;
    font-size: 13px;
    color: #999;
  }
  .on p {
    color: #fb7299;
  }
  .add {
    position: relative;
    width: 45px;
    height: 45px;
    background: #fb7299;
    border-radius: 15px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
    }
  }
}
</style>