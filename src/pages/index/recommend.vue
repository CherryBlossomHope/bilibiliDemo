<template>
  <div class="bigBox">
    <el-carousel
      :interval="5000"
      height="220px"
      arrow="never"
      indicator-position="none"
    >
      <el-carousel-item v-for="(item, index) in swiperImg" :key="index">
        <div class="imgBox">
          <img :src="item.url" alt="" class="swiperImg" />
          <p class="infotxt">{{ item.txt }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="videoBox">
      <div
        v-for="(item, index) in videoList"
        :key="index"
        class="box"
        @click="seeView(index)"
      >
        <div class="imgBox">
          <img :src="item.imgUrl" alt="" />
          <div class="mask"></div>
          <div class="vInfo">
            <div class="disflex">
              <div class="disflex">
                <div>
                  <img src="@/assets/images/bofangicon.png" alt="" />
                </div>
                <p class="vInfotxt">{{ item.playBack }}</p>
              </div>
              <div class="disflex marr10">
                <div>
                  <img src="@/assets/images/danmicon.png" alt="" />
                </div>
                <p class="vInfotxt">{{ item.popups }}</p>
              </div>
            </div>
            <p class="vInfotxt">{{ item.time }}</p>
          </div>
        </div>
        <div class="downBox">
          <p class="vname">{{ item.videoName }}</p>
          <div class="upBox">
            <div class="disflex">
              <div class="upImg">
                <img src="@/assets/images/upicon.png" alt="" />
              </div>
              <p>{{ item.upName }}</p>
            </div>
            <div class="upImg" @click.stop="more()">
              <img src="@/assets/images/more.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
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
      videoList: [
        {
          imgUrl: require("@/assets/images/videoImg.webp"),
          playBack: "4651",
          popups: 152,
          time: "2:52",
          videoName:
            "人人嫌弃的丑女，因少年一句话变成绝世美人！这番全程高能却被埋没！着实可惜！",
          upName: "政宗君de情敌",
        },
        {
          imgUrl: require("@/assets/images/videoImg2.webp"),
          playBack: "1.1万",
          popups: 3150,
          time: "2:52",
          videoName: "【JOJO】本草纲目-JO杰伦",
          upName: "陌一一微凉",
        },
        {
          imgUrl: require("@/assets/images/videoImg3.webp"),
          playBack: "48.9万",
          popups: 53,
          time: "2:52",
          videoName: "【洗脑循环】阿尼亚又来给你洗脑啦~哇酷哇酷☆",
          upName: "柚卡yk",
        },
        {
          imgUrl: require("@/assets/images/videoImg4.webp"),
          playBack: "2.6万",
          popups: 27,
          time: "2:52",
          videoName: "辉夜大小姐想让我告白 -究极浪漫-",
          upName: "哔哩哔哩追番",
        },
        {
          imgUrl: require("@/assets/images/videoImg5.webp"),
          playBack: "2.6万",
          popups: 27,
          time: "2:52",
          videoName: "“流浪猫将全部的温柔，都给了静香一人。”",
          upName: "英缘木",
        },
        {
          imgUrl: require("@/assets/images/videoImg6.webp"),
          playBack: "1.9万",
          popups: 32,
          time: "4:58",
          videoName:
            "【ACG鉴赏会】伪娘作品的巅峰之作 一部集浪漫与理想为一体的作品",
          upName: "Eins陈",
        },
      ],
    };
  },
  methods: {
    more(i) {
      console.log(123);
    },
    seeView(i) {
      console.log(i);
    },
  },
  mounted() {
    this.axios
      .get("http://81.68.198.249:3002/videoList", {})
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  },
};
</script>

<style lang="less" scoped>
img {
  display: block;
}
.marr10 {
  margin-left: 10px;
}
.disflex {
  display: flex;
  align-items: center;
}
.bigBox {
  padding: 10px 3px 70px 3px;
  background: #fafafa;
}
.swiperImg {
  width: 100%;
  height: 100%;
}
.imgBox {
  position: relative;
  .infotxt {
    position: absolute;
    left: 2%;
    bottom: 6%;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    font-family: SimHei;
  }
}
.videoBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  .box {
    background-color: #fff;
    width: 48.5%;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0px 5px 12px 1px rgba(202, 202, 202, 0.3);
    .imgBox {
      position: relative;
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }
      .vInfo {
        width: 100%;
        display: flex;
        padding: 0 8px;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 3px;
        left: 0;
        img {
          width: 20px;
        }
        .vInfotxt {
          font-size: 12px;
          color: #fff;
        }
      }
    }
    img {
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      width: 100%;
    }
    .downBox {
      padding: 8px;
      .vname {
        font-size: 14px;
        color: #000;
        min-height: 39px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .upBox {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .upImg {
          margin-right: 4px;
          width: 20px;
        }
        p {
          font-size: 13px;
          color: #999;
        }
      }
    }
  }
}
</style>