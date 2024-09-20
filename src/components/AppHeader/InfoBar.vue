<script>
export default {
}
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <ul>
        <li>
          <a href="">
            <font-awesome-icon icon="fa-solid fa-clock" class="me-2"/>
            Open Hours: Mon - Sat - 9:00 - 18.00
          </a>
        </li>
      </ul>

      <ul class="d-flex">
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-phone" class="me-2" />
            +1 (305) 1234-5678
          </a>
        </li>

        <li>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-envelope" class="me-2" />
            hello@example.com
          </a>
        </li>

        <li>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a>
        </li>

        <li>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </a>
        </li>

        <li>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/mixins.scss' as *;
@use '../../assets/scss/partials/colors.scss' as *;

nav {
  background-color: $infoBar;

  ul {
    padding: 5px;
    @include simple-ul;

    li {
      @include simple-li;

      a {
      text-decoration: none;
      color: $silverSand;
      }
    } 
  }
}
</style>
