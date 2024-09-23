<script>
import WhoWeAre from './WhoWeAre.vue';
import RoadTransport from './RoadTransport.vue';
import Logistical from './Logistical.vue';
import Results from './Results.vue';
import Feedback from './Feedback.vue';
import ContactUs from './ContactUs.vue'
export default {
  data () {
    return {
      // WhoWeAre SECTION
      trucks: [
      {
        title: 'Light',
        img: 'truck-1.png',
        desc: 'Max Weight 1200kg'
      },
      {
        title: 'Medium',
        img: 'truck-1.png',
        desc: 'Max Weight 6000kg'
      },
      {
        title: 'Heavy',
        img: 'truck-1.png',
        desc: 'Max Weight 24000kg'
      }
     ],

     // RoadTransport SECTION

     cards: [
        {
          title: 'Technology',
          desc: "We are continually focused on developing technology solutions adapted to our client's needs.",
          logo: 'fa-solid fa-truck-ramp-box',
        },
        {
          title: 'Reefer Cargo',
          desc: "Regular and frequent monitoring from the receipt of the loaded container to final destination.",
          logo: 'fa-solid fa-temperature-low'
        },
        {
          title: 'Dry Cargo',
          desc: "We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care.",
          logo: 'fa-solid fa-boxes-stacked'
        }
      ],

      // Logistical SECTION

      steps: [
      {
        nr: '01',
        title: 'Collection of information',
        text: 'lorem ipsum dolor sit amet consectetur.'
      },
      {
        nr: '02',
        title: 'Service Invoice Sending',
        text: 'lorem ipsum dolor sit amet consectetur.'
      },
      {
        nr: '03',
        title: 'Withdrawal of Cargo',
        text: 'lorem ipsum dolor sit amet consectetur.'
      },
      {
        nr: '04',
        title: 'Transport Customer Order',
        text: 'lorem ipsum dolor sit amet consectetur.'
      },
      {
        nr: '05',
        title: 'Successful Delivery',
        text: 'lorem ipsum dolor sit amet consectetur.'
      },
     ],

     // Results SECTION

     results: [
        {
          text: 'Certifications',
          number: '128',
        },
        {
          text: 'Employess',
          number: '230',
        },
        {
          text: 'Customers',
          number: '517',
        },
        {
          text: 'Countries Served',
          number: '94',
        }
     ],

      // Feedback SECTION

      trusted: [
        {
          title: 'WooCommerce',
          img: 'logo-1.png',
          desc: "Praesent volutpat justo sit amet elmentum malesuada. Praesent sagittis augue" +
                "justo, in accumsan orci rhoncus at pellentesque.",
          botdesc: "Lorem ipsum dolor sit amet, consectetur adpiscing elit.",
          icon: 'fa-solid fa-truck-ramp-box',
        },
        {
          title: 'WordPress',
          img: 'logo-2.png',
          desc: "Praesent volutpat justo sit amet elmentum malesuada. Praesent sagittis augue" +
                "justo, in accumsan orci rhoncus at pellentesque.",
          botdesc: "Lorem ipsum dolor sit amet, consectetur adpiscing elit.",
          icon: 'fa-solid fa-temperature-low'
        },
        {
          title: 'Pingdom',
          img: 'logo-3.png',
          desc: "Praesent volutpat justo sit amet elmentum malesuada. Praesent sagittis augue" +
                "justo, in accumsan orci rhoncus at pellentesque.",
          botdesc: "Lorem ipsum dolor sit amet, consectetur adpiscing elit.",
          icon: 'fa-solid fa-boxes-stacked'
        },
      ]
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
    <WhoWeAre 
      :trucks="trucks"/>

    <RoadTransport 
      :cards="cards"/>

    <Logistical 
      :steps="steps"/>

    <Results 
      :results="results"/>

    <Feedback 
      :trusted="trusted"/>
      
    <ContactUs />
  </main>
</template>

<style lang="scss" scoped>
  main > * {
    padding: 100px 0;
  }
</style>
