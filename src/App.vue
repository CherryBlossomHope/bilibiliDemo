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
div {
  box-sizing: border-box;
}
</style>
