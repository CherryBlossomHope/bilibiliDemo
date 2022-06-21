<template>
  <div>
    <aggregate></aggregate>
  </div>
</template>

<script>
import aggregate from "@/pages/all.vue";
export default {
  name: "App",
  components: {
    aggregate,
  },
};
</script>

<style>
@import "./assets/css/reset.css";
body {
  font-family: Microsoft YaHei !important;
}
div {
  box-sizing: border-box;
}
</style>
