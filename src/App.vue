<template>
  <div class="app">
    <AppHeader />
     <AppWhiteBox> 
    <RouterView />
    </AppWhiteBox>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppWhiteBox from "@/components/AppWhiteBox";
import AppFooter from "@/components/AppFooter";



export default {
  name: "App",
  components: {
    AppHeader,
    AppWhiteBox,
    AppFooter
  }
};
</script>
<style lang="scss">
body {
  background-color: whitesmoke;
}
</style>
