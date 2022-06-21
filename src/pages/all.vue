<template>
  <div>
    <router-view></router-view>
    <footerDown></footerDown>
  </div>
</template>

<script>
import footerDown from "@/components/downFooter.vue";
export default {
  name: "all",
  components: {
    footerDown,
  },
};
</script>

<style>
</style>