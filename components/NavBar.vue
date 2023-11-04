<template>
  <section class="container">
    <h1 class="header">
      Лабораторная работа №2
      <hr />
      <strong class="header-name"> "Музыкальный лейбл" </strong>
    </h1>
    <div>
      <b-nav class="nav">
        <b-nav-item active>
          <nuxt-link  exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/base">База</nuxt-link>
          </b-nav-item>
        <b-nav-item>
          <nuxt-link  exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/rule">Правило</nuxt-link>
          </b-nav-item>
      </b-nav>
    </div>
  </section>
</template>

<script>
export default {}
</script>

</script>
<style scoped>
.header, .nav {
  text-align: center;
}
.header-name {
  color: cornflowerblue;
  text-align: center;
}
</style>