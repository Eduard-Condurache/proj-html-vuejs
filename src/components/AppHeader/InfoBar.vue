<script>
export default {
  props: {
    contacts: Array,
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <ul>
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-clock" class="me-2"/>
            Open Hours: Mon - Sat - 9:00 - 18.00
          </a>
        </li>
      </ul>

      <ul class="d-flex align-items-center">
        <li v-for="(contact, index) in contacts" :key="index">
          <a href="#">
            <font-awesome-icon :icon="contact.icon" class="me-2" />
            {{ contact.text }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>

nav {
  background-color: $infoBar;

  ul li {
    padding: 5px 10px;

    a {
      color: $silverSand;
      font-size: 1rem;
    }
  }
}
</style>
