<script>

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
  }
}
</script>

<template>
  <div class="top-footer">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <a href="#">
            <img src="../../assets/img/logo.svg" alt="logo">
          </a>

          <div class="my-4">
            <p>
              A Functional HTML TEMPLATE for Corporate & Business.
            </p>
          </div>

          <ul>
            <li v-for="(item, index) in contactlist" :key="index">
              <a href="#">
                <div class="icon me-3">
                  <font-awesome-icon :icon="item.icon"/>
                </div>

                <span>
                  {{ item.text }}
                </span>
              </a>
            </li>
          </ul>

          <div>
            <button class="my-btn btn-noborder mt-4">
              GET IN TOUCH
            </button>
          </div>

        </div>
        
        <div v-for="(card, index) in cardlist" :key="index" class="col-3">
          <div class="card bg-woodsmoke-light">
            <div class="card-body p-4">
              <h3 class="text-white mb-4">
                {{ card.title }}
              </h3>

              <ul>
                <li v-for="(info, index) in card.infos" :key="index">
                  <a href="#">
                    <font-awesome-icon class="arrow-icon" icon="fa-solid fa-angle-right" />
                    {{ info }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/mixins.scss' as *;
@use '../../assets/scss/partials/colors.scss' as *;
@use '../../assets/scss/general.scss' as *;
@use '../../assets/scss/buttons-style.scss' as *;
@use '../../assets/scss/partials/variables.scss' as *;

.top-footer {
  padding: 100px 0;
  background-color: $woodSmoke;
  color: white;

  img {
    width: 150px;
  }

  a {
    color: $silverSand;
    padding: 0;
    margin: 10px 0;
  }

  .arrow-icon {
    padding-right: 15px;
  }

}
</style>
