<script>
export default {
  props: {
    trucks: Array
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
  <div class="who-we-are">
    <div class="container">
      <div class="row d-flex justify-content-center">

        <!-- LEFT PART -->
        <div class="col-8 me-5">
          <div>
            <h6>
              WHO WE ARE
            </h6>
          </div>

          <div>
            <h1 class="d-flex align-items-center my-4">
              <span class="text-overlay">
                <font-awesome-icon icon="fa-regular fa-gem"/>
                Excellence
              </span> 
              <span class="ms-2">
                 in Transport
              </span>
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

            <ul class="mt-4 ps-3">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer melstie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
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
              <div v-for="(item, index) in trucks" :key="index" class="row">
                <div class="col-4">
                  <div class="truck-container">
                    <img :src="getImagePath(item.img)" alt="truck">
                  </div>
                </div>

                <div class="col-8">
                  <div>
                    <h3>
                      {{ item.title }}
                    </h3>
                  </div>

                  <p>
                    {{ item.desc }}
                  </p>
                </div>
                <hr class="my-3">
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

.who-we-are {

  p, li {
    color: $midGray;
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
    width: 80%;
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
    width: 35%;
  }

  ul {
    list-style: circle;

    li {
      line-height: 2rem;
    }
  }
}


</style>
