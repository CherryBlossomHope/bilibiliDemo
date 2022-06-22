<template>
  <div class="bigBox">
    <el-carousel
      :interval="5000"
      height="220px"
      arrow="never"
      loop="ture"
      indicator-position="none"
      autoplay="ture"
    >
      <el-carousel-item v-for="(item, index) in swiperImg" :key="index">
        <div class="imgBox">
          <img :src="item.url" alt="" class="swiperImg" />
          <p>{{ item.txt }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
export default {
  data() {
    return {
      swiperImg: [
        {
          url: require("@/assets/images/swiper1.jpg"),
          txt: "分享游戏瞬间,抽取精美奖品>>>",
        },
        {
          url: require("@/assets/images/swiper2.jpg"),
          txt: "分享游戏瞬间,抽取精美奖品>>>",
        },
        {
          url: require("@/assets/images/swiper3.jpg"),
          txt: "分享游戏瞬间,抽取精美奖品>>>",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.bigBox {
  padding: 10px 3px;
  background: #fafafa;
}
.swiperImg {
  width: 100%;
  height: 100%;
}
.imgBox {
  position: relative;
  p {
    position: absolute;
    left: 2%;
    bottom: 6%;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    font-family: SimHei;
  }
}
</style>