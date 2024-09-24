<script>
import InfoBar from './InfoBar.vue';
import jumbotron from './Jumbotron.vue';

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
      ],
      navLinks: ['home', 'about', 'services', 'process', 'testimonials'],
      button1: 'get in touch',
      button2: 'read more'

    }
  },
  components: {
    InfoBar,
    jumbotron
  }
}
</script>

<template>
  <header>
    <InfoBar 
      :contacts="contacts"/>

    <jumbotron 
      :navLinks="navLinks"
      :button1="button1"
      :button2="button2"/>
  </header>
</template>

<style lang="scss" scoped>

</style>
