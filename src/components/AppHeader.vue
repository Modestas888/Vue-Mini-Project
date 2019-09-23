<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <ul class="app-header__list">
        <li class="app-header__list-item">
          <RouterLink
            v-for="route in links"
            :key="route.name"
            :to="{ name: route.name || route.meta.defaultName }"
            exact
          >{{ route.meta.displayName }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="namese">
      <h1>VARDAS PAVARDE</h1>
      <h5>PORTFOLIO</h5>
    </div>
  </header>
</template>

<script>
import routes from "@/routes";
export default {
  name: "AppHeader",
  data() {
    return {
      routes
    };
  },
  computed: {
    links() {
      return this.routes.filter(route => route.meta.displayName);
    }
  }
};
</script>

<style lang="scss">
.app-header {
  text-align: -webkit-center;
  top: 0;
  background-color: #3252e5;
  height: 450px;

  &__nav {
    display: flex;
    flex: 1;
  }

  &__list {
    font-size: 21px;

    flex-direction: row-reverse;
    display: flex;
    flex: 1;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__list-item {
    padding-top: 20px;
    padding-right: 135px;
  }
  .namese {
    padding-top: 187px;
    color: white;
  }
  a {
    padding: 20px;
    color: white;
    text-decoration: none;
  }
}
</style>
