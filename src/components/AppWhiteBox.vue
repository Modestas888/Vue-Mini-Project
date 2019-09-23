<template>
  <div class="whitebox">
    <h3 v-if="WhiteBoxTitle">{{ WhiteBoxTitle }}</h3>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppWhiteBox",
  props: {
    WhiteBoxTitle: {
      type: String,
      default: null
    },
    WhiteBoxText: {
      type: String,
      default: null
    }
  }
};
</script>

<script>
export default {
  name: "AppWhiteBox"
};
</script>

<style lang = "scss">
.whitebox {
  margin: 0 auto;
  height: 640px;
  width: 1200px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: -50px;
}
</style>