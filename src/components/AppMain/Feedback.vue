<script>
export default {
  data() {
    return { 
      cards: [
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
        // {
        //   img: 'logo-4.png',
        //   desc: "Praesent volutpat justo sit amet elmentum malesuada. Praesent sagittis augue" +
        //         "justo, in accumsan orci rhoncus at pellentesque.",
        //   botdesc: "Lorem ipsum dolor sit amet, consectetur adpiscing elit.",
        //   icon: 'fa-solid fa-boxes-stacked'
        // },
        // {
        //   img: 'logo-5.png',
        //   desc: "Praesent volutpat justo sit amet elmentum malesuada. Praesent sagittis augue" +
        //         "justo, in accumsan orci rhoncus at pellentesque.",
        //   botdesc: "Lorem ipsum dolor sit amet, consectetur adpiscing elit.",
        //   icon: 'fa-solid fa-boxes-stacked'
        // }
      ]
    }
  },
  methods: {
    getImagePath: function(img) {
      const url = new URL(`../../assets/img/${img}`, import.meta.url);

      const link = url.href
      return link
    }
  }
}
</script>

<template>
  <div class="feedback">
    <div class="container">
      <!-- TOP PART -->
      <div class="my-container text-center">
        <div>
          <h6>
            CUSTOMER TESTIMONIALS
          </h6>
        </div>

        <div>
          <h1 class="my-4">
            <span>
              Trusted
            </span> 
            <span class="text-overlay m-0">
              Feedback
            </span>
          </h1>
        </div>

        <div>
          <p>
            We work intensively in search of ideals that can add up in the lives of
            our customers. This is what moves us and we are grateful ofr the recognition.
          </p>
        </div>
      </div>

      <!-- Bottom part -->
      <div class="row d-flex align-items-center justify-content-between my-5">
        <div v-for="(card, index) in cards" :key="index" class="card col-12 col-md mx-3 bg-woodsmoke-light p-4">
          <div class="card-body">
            <div class="mb-4">
              <img :src="getImagePath(card.img)" :alt="card.title">
            </div>

            <p class="mb-3">
              {{ card.desc }}
            </p>

            <p>
              {{ card.botdesc }}
            </p>

            <font-awesome-icon class="quote" icon="fa-solid fa-quote-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/mixins.scss' as *;
@use '../../assets/scss/partials/colors.scss' as *;
@use '../../assets/scss/text-style.scss' as *;
@use '../../assets/scss/main.scss' as *;
@use '../../assets/scss/buttons-style.scss' as *;
.feedback {
  padding: 100px 0;
  background-color: $woodSmoke;
  color: white;

  .text-overlay {
    background-color: rgba($blueLagoon, 0.2);
    color: white;
  }

  .card {
    position: relative;

    .quote {
      position: absolute;
      bottom: 15px;
      right: 15px;
      font-size: 2.5rem;
      color: $midGray;
    }
  }

}
</style>
