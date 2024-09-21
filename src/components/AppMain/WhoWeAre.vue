<script>
export default {
  data() {
    return { 
     
    }
  }
}
</script>

<template>
  <div class="who-we-are">
    <div class="container">
      <div class="row">

        <!-- LEFT PART -->
        <div class="col-7 px-3">
          <div>
            <h6 class="text-bluechill fw-bold">
              WHO WE ARE
            </h6>
          </div>

          <div>
            <h1 class="d-flex align-items-center">
              <span class="text-overlay">
                <font-awesome-icon icon="fa-regular fa-gem" />
                Excellence
              </span> 
              in Transport
            </h1>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit tortor, interdum sed cursus eu, sagittis ut nunc. Sed vitae tellus et arcu aliquet faucibus fermentum non lacus.
            </p>
          </div>

          <div class="my-4">
            <p>
              Praesent fringilla quis massa et placerat. Mauris eu dui eget urna pellentesque gravida vitae quis nibh. Ut at augue tortor. Pellentesque quis suscipit magna.
            </p>
          </div>

          <div class="quote-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam tortor, ultrices accumsan mauris eget, pulvinar tincidunt erat. Sed nisi nisi, rutrum sit amet elit.
            </p>
          </div>

          <div class="my-4">
            <p>
              Sed Mauris nulla, tempor eu est vel, dapibus hendrerit mauris curabitur dctum pharetra
            </p>

            <ul class="mt-4 p-0">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer melstie lorem at massa</li>
              <li> facilisis in pretium nisl aliquet</li>
              <li>Dapibus hendrerit mauris curabitur</li>
            </ul>

          </div>
        </div>

        <!-- RIGHT PART -->
        <div class="col">
          <div>
            <h3 class="fw-bold mb-5">
              Vehicle Types
            </h3>
            
            <div>
              <div class="row">
                <div class="col-3">
                  <div class="truck-container">
                    <img src="../../assets/img/truck-1.png" alt="truck-1">
                  </div>
                </div>

                <div class="col-9">
                  <div>
                    <h3>
                      Light
                    </h3>
                  </div>

                  <p>
                    Max Weight 1200kg
                  </p>
                </div>
              </div>
            </div>

            <hr>

            <div class="my-4">
              <div class="row">
                <div class="col-3">
                  <div class="truck-container">
                    <img src="../../assets/img/truck-1.png" alt="truck-1">
                  </div>
                </div>

                <div class="col-9">
                  <div>
                    <h3>
                      Medium
                    </h3>
                  </div>

                  <p>
                    Max Weight 6000kg
                  </p>
                </div>
              </div>
            </div>

            <hr>

            <div>
              <div class="row">
                <div class="col-3">
                  <div class="truck-container">
                    <img src="../../assets/img/truck-1.png" alt="truck-1">
                  </div>
                </div>

                <div class="col-9">
                  <div>
                    <h3>
                      Heavy
                    </h3>
                  </div>

                  <p>
                    Max Weight 6000kg
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="fw-bold my-4">
              Certifications
            </h3>

            <div class="d-flex certification-cards">
              <div>
                <img src="../../assets/img/certificate.png" alt="certificate-1">
              </div>
              <div>
                <img src="../../assets/img/certificate.png" alt="certificate-1">
              </div>
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
@use '../../assets/scss/text-style.scss' as *;
@use '../../assets/scss/main.scss' as *;

.who-we-are {
  margin: 100px 0;

  p, li {
    color: $midGray;
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin: 20px 0;

    .text-overlay {
      background-color: rgba($bermuda, 0.5);
      color: $blueChill;
    }
  }

  .quote-box {
    display: flex;
    align-items: center;
    padding: 10px 0;
    padding-left: 20px;
    border-left: 5px solid $grayNurse;
    font-style: italic;
  }

  hr {
    width: 60%;
  }

  .truck-container {
    background-color: rgba($bermuda, 0.5);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 1em 0.2em rgb(0 0 0 / 20%);
  }

  .certification-cards > div {
    background-color: white;
    box-shadow: 1em 1em 1em 0.2em rgb(0 0 0 / 10%);
    margin-right: 35px;
    width: 25%;
  }
}

</style>
