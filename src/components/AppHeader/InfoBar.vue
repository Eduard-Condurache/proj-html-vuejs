<script>
export default {
  data () {
    return {
      contacts: [
        {
          icon: 'fa-solid fa-phone',
          text: '+1 (305) 1234-5678'
        },
        {
          icon: 'fa-solid fa-envelope',
          text: 'hello@example.com'
        },
        {
          icon: 'fa-brands fa-facebook-f'
        },
        {
          icon: 'fa-brands fa-twitter'
        },
        {
          icon: 'fa-brands fa-linkedin-in',
        }
      ]
    }
  }
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
@use '../../assets/scss/partials/mixins.scss' as *;
@use '../../assets/scss/partials/colors.scss' as *;
@use '../../assets/scss/general.scss' as *;
@use '../../assets/scss/buttons-style.scss' as *;
@use '../../assets/scss/partials/variables.scss' as *;

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
