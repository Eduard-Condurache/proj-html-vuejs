<script>
import TopFooter from './TopFooter.vue';
import BottomFooter from './BottomFooter.vue';
export default {
  data() {
    return { 
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
    :cardlist="cardlist"/>
    
  <BottomFooter />
 </footer>
</template>

<style lang="scss" scoped>

</style>
