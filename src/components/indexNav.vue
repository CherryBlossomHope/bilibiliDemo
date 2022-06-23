<template>
  <div class="index-Nav">
    <div class="disflex">
      <div class="avatar">
        <img :src="avatar" alt="" />
      </div>
      <div class="sele">
        <img src="@/assets/images/sele.png" alt="" />
        <span>{{ place }}</span>
      </div>
      <div class="game">
        <img src="@/assets/images/game-icon.png" alt="" />
      </div>
      <div class="game">
        <img src="@/assets/images/email-icon.png" alt="" />
      </div>
    </div>
    <div class="tabal">
      <ul>
        <li v-for="(item, index) in table" :key="index">
          <router-link active-class="active" :to="item.url">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: require("@/assets/images/avatar2.png"),
      place: "JOJO的奇妙冒险 石之海",
      table: [
        {
          name: "直播",
          url: "/indexpage/liveStreaming",
        },
        {
          name: "推荐",
          url: "/indexpage/recommend",
        },
        {
          name: "追番",
          url: "/indexpage/serialNumber",
        },
        // {
        //   name: "影视",
        //   url: "",
        // },
        // {
        //   name: "共同抗疫",
        //   url: "",
        // },
        // {
        //   name: "共同抗疫",
        //   url: "",
        // },

        // {
        //   name: "共同抗疫",
        //   url: "",
        // },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.index-Nav {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #fff;
}
.disflex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 10px 15px;
  .avatar {
    width: 45px;
    height: 45px;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .sele {
    width: 60%;
    height: 30px;
    background-color: #efeeee;
    border-radius: 20px;
    position: relative;
    padding-left: 38px;
    img {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      width: 15px;
    }
    span {
      line-height: 31px;
      color: #bfbfbf;
      font-size: 14px;
    }
  }
  .game {
    width: 22px;
    height: 22px;
    img {
      width: 100%;
    }
  }
}
.tabal {
  padding: 0 15px;
  ul::-webkit-scrollbar {
    display: none;
  }
  ul {
    width: 91%;
    display: flex;
    flex-flow: row nowrap;
    overflow-x: auto;
    align-items: center;
    .active {
      color: #fb7299;
      border-bottom: 3px solid #fb7299;
      font-weight: bolder;
    }
    li {
      margin-right: 27px;
      white-space: nowrap;
      a {
        display: block;
        color: #000;
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
}
</style>