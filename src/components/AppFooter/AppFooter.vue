<script>
import TopFooter from './TopFooter.vue';
import BottomFooter from './BottomFooter.vue';
export default {
  data() {
    return { 
      contactlist: [
      {
        icon: 'fa-solid fa-phone',
        text: '+1 (305) 1234-5678'
      },
      {
        icon: 'fa-solid fa-envelope',
        text: 'hello@example.com'
      },
      {
        icon: 'fa-solid fa-location-dot',
        text: 'Main Avenue, 987'
      }
     ],

     cardlist: [
      {
        title: 'About',
        infos: [
          'The Company',
          'Institutional',
          'Social & Events',
          'Innovation',
          'Environment',
          'Technology'
        ]
      },
      {
        title: 'Transport',
        infos: [
          'Industrialized',
          'Chemicals',
          'Packaged Liquids',
          'Construction',
          'Laminated Wood',
          'And others'
        ]
      },
      {
        title: 'Support',
        infos: [
          'Responsibility',
          'Terms of Use',
          'About Cookies',
          'Privacy Policy',
          'Accessibility',
          'Information'
        ]
      },
     ]
    }
  },
  components: {
    TopFooter,
    BottomFooter
  }
}
</script>

<template>
 <footer>
  <TopFooter 
    :contactlist="contactlist" 
    :cardlist="cardlist"/>
    
  <BottomFooter />
 </footer>
</template>

<style lang="scss" scoped>

</style>
