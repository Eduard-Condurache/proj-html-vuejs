<script>
export default {
  data() {
    return { 
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
     ]
    }
  }
}
</script>

<template>
  <div class="road-transport">
    <div class="container">
      <!-- TOP PART -->
      <div class="row">
        <div class="col-8">
          <div>
            <h6>
              ROAD TRANSPORT
            </h6>
          </div>

          <div>
            <h1 class="d-flex align-items-center my-4">
              <span>
                Main
              </span> 
              <span class="text-overlay ms-2">
                Services
              </span>
            </h1>
          </div>

          <div>
            <p>
              With all of this expertise and capability comes an unrivalled commitment to customer service. We will work hard to understand your needs in order to develop a productive, long-term partnership.
            </p>
          </div>
        </div>

        <div class="col-4 d-flex align-items-end justify-content-end">
          <div>
            <button class="my-btn btn-noborder">
              see all
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom part -->
      <div class="row d-flex align-items-center justify-content-between my-5">
        <div v-for="(card, index) in cards" :key="index" class="card col-12 col-md mx-3 bg-woodsmoke-light p-5">
          <div class="card-body">
            <div class="logo d-flex justify-content-between">
              <div>
                <font-awesome-icon class="desc-icons" :icon="card.logo" />
              </div>
              <div>
                <a href="#">
                  <font-awesome-icon icon="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
            <h3 class="card-title">
              {{ card.title }}
            </h3>
            <p class="card-text">
              {{ card.desc }}
            </p>
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

.road-transport {
  padding: 100px 0;
  background-color: $woodSmoke;
  color: white;

  .text-overlay {
    background-color: $smaitBlue;
    color: white;
  }

  .card {
    h3 {
      color: white;
      margin: 20px 0;
    }

    .desc-icons {
      background-color: $smaitBlue;
      color: $blueChill;
      padding: 15px;
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }
  }

}
</style>
