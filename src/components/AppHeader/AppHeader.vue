<script>
import InfoBar from './InfoBar.vue';
import jumbotron from './jumbotron.vue';

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
      openHours: 'Open Hours: Mon - Sat - 9:00 - 18.00',
      navLinks: ['home', 'about', 'services', 'process', 'testimonials'],
      mainTitle: 'LOGISTICS SERVICES',
      subTitle: 'CARGO TRANSPORT',
      description: 'Fractional or exclusive road cargo transportation to all regions with small, medium, and large vehicles.',
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
      :contacts="contacts"
      :openHours="openHours"/>

    <jumbotron 
      :navLinks="navLinks"
      :mainTitle="mainTitle"
      :subTitle="subTitle"
      :description="description"
      :button1="button1"
      :button2="button2"/>
  </header>
</template>

<style lang="scss" scoped>

</style>
