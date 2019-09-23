<template>
  <div class="greybox">
      <slot />

  </div>
</template>

<script>
export default {
    name: "AppGreyBox"
}
</script>

<style lang="scss">
.greybox {
    padding-top: 12px;
    text-align: left;
    padding-left: 74px;
    height: 250px;
    background: #EEEFF3;
    margin-top: 24px;


}
</style>