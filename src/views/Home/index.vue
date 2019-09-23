<template>
  <div class="portfolio">
    <h1>Projektai</h1>
  <div class="projects">
    <AppCart
    v-for="data in imageArray"
    :key="data.name"
    :photo="data.photo"
    :projectName="data.name" />

    </div> 
  </div>
</template>

<script>
import AppCart from "@/components/AppCart";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";

export default {
  name: "HomeView",
  components: {
    AppCart
  },
  data() {
    return {
      photos: []
    }
  },
  computed: {
    imageArray() {
      return [
        { name: "First project", photo: image1 },
        { name: "Second project", photo: image2 },
        { name: "Third project", photo: image3 }
      ];
    }
  }
};
</script>

<style>
.portfolio {
      margin: 2px;
    padding: 10px;
}
.projects {
    padding: 40px;
    justify-content: space-between;
    display: flex;
}
h1 {
  padding-left: 40px;
}
</style>
