<script>
export default {
  data() {
    return { 
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
     ]
    }
  }
}
</script>

<template>
  <div class="results">
    <div class="container">
      <div class="text-center">
        <div>
          <h6>
            WHAT ARE WE DOING
          </h6>
        </div>

        <div>
          <h1 class="my-4">
            <span class="text-overlay m-0">
              Results
            </span> 
            <span>
              in Numbers
            </span>
          </h1>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-around pt-5">
        <div v-for="(result,index) in results" :key="index" class="text-center">
          <h2>
            {{ result.number }}
          </h2>
          <h3>
            {{ result.text }}
          </h3>
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
.results {
  padding: 150px 0;
  width: 100%;
  color: white;
  background-position: center;
  background-size: cover;
  background-image: url(../../assets/img/bg-10.jpg);
  background-attachment: fixed;

  .text-overlay {
    color: white;
    background-color: rgba($blueLagoon, 0.2);
  }

  h2 {
    color: $blueChill;
    font-size: 2.5rem;
    font-weight: bold;
  }
}
</style>
