<script>
import WhoWeAre from './WhoWeAre.vue';
import RoadTransport from './RoadTransport.vue';
import Logistical from './Logistical.vue';
import Results from './Results.vue';
import Feedback from './Feedback.vue';
import ContactUs from './ContactUs.vue'
export default {
  data() {
    return { 
     
    }
  },
  components: {
    WhoWeAre,
    RoadTransport,
    Logistical,
    Results,
    Feedback,
    ContactUs
  }
}
</script>

<template>
  <main>
    <WhoWeAre />
    <RoadTransport/>
    <Logistical />
    <Results />
    <feedback />
    <ContactUs />
  </main>
</template>

<style lang="scss" scoped>

</style>
