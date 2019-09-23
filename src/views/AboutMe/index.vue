<template>
  <div class="aboutme">
    <h1>Apie Mane</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi rem quas facere ut magni magnam aperiam, perferendis recusandae, quibusdam nisi quia corrupti omnis voluptates et! Iusto quaerat blanditiis molestias?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit harum quaerat laborum quos ipsa aspernatur sequi voluptatem iure rem deleniti autem, deserunt suscipit! Facere consequuntur delectus officiis exercitationem molestias eum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident asperiores ullam animi, totam ratione impedit officia sit. Dicta illum libero sunt soluta nisi sequi architecto optio veniam exercitationem quas.
    </p>
    <div class="routeris" >
    <RouterLink :to="{ name: 'AboutMe:Profile' }">Issilavinimas</RouterLink>
    <RouterLink :to="{ name: 'AboutMe:Settings' }">Karjera</RouterLink>
    <RouterLink :to="{ name: 'AboutMe:Options' }">Zinios</RouterLink>
    </div>
    <AppGreyBox> <RouterView /></AppGreyBox>
  </div>
</template>

<script>
import AppGreyBox from "@/components/AppGreyBox";
export default {
  name: "AboutMeView",
  components: {
    AppGreyBox
}
};
</script>

<style lang="scss">
.aboutme {
  h1{
    font-size: 24px;
  }
  .routeris {
     text-decoration: none;
    }
padding: 60px;
p {
 font-size: 16px;
}
a {
  text-decoration: none;
    margin: 49px;
    font-size: 16px;

}
}


</style>
