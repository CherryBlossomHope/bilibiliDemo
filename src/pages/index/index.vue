<template>
  <div>
    <indexNav />
    <router-view></router-view>
  </div>
</template>

<script>
import indexNav from "@/components/indexNav.vue";
export default {
  beforeDestroy() {},
  components: {
    indexNav,
  },
};
</script>

<style>
</style>