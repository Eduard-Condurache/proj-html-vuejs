<script>
export default {
  props: {
    steps: Array
  }
}
</script>

<template>
  <div class="logistical">
    <div class="container">
      <!-- TOP PART -->
      <div class="my-container text-center">
        <div>
          <h6>
            HOW IT WORKS IN PRACTICE
          </h6>
        </div>

        <div>
          <h1 class="my-4">
            <span class="text-overlay m-0">
              Logistical
            </span> 
            <span>
              Procedure
            </span>
          </h1>
        </div>

        <div>
          <p>
            We work with innovative methodologies to ensure that the entire delivery process is done from 
            start to finish as planned.
          </p>
        </div>
      </div>
    </div>

    <div class="steps-container">
      <div class="d-flex justify-content-evenly">
        <div v-for="(step, index) in steps" :key="index" class="text-center single-step">
          <div class="desc-icons">
            <h4>
            {{ step.nr }}
            </h4>
          </div>
          
          <h3 class="my-3">
            {{ step.title }}
          </h3>

          <p>
            {{ step.text }}
          </p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logistical {
  background-color: #EEF4ED;

  p {
    color: $midGray;
  }

  .steps-container {
    position: relative;
    padding: 0 50px;
    margin: 50px 0;

    .single-step {
      padding: 0 50px
    }

    &::before {
      position: absolute;
      content: '';
      border-bottom: 5px solid $bermuda;
      left: 0;
      bottom: 85%;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .desc-icons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      h4 {
        background-color: $bermuda;
        color: $blueChill;
        font-weight: bold;
        padding: 10px;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        z-index: 1;
      }
    }
  }
}
</style>
