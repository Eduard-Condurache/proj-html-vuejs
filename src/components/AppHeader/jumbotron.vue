<script>
export default {
  props: {
    navLinks: Array,
    mainTitle: String,
    subTitle: String,
    description: String,
    button1: String,
    button2: String,
  }
}
</script>

<template>
  <div class="jumbotron">
    <div class="container-jumbotron">
      <nav class="d-flex justify-content-between align-items-center">
        <a href="#" class="logo">
          <img src="../../assets/img/logo.svg" alt="logo">
        </a>

        <ul class="d-flex align-items-center">
          <li v-for="(link, index) in navLinks" :key="index">
            <a href="#">
              {{ link }}
            </a>
          </li>

          <li>
            <a href="#">
              <font-awesome-icon class="arrow-icon" icon="fa-regular fa-user" />
            </a>
          </li>

          <li>
            <a href="#">
              <button class="my-btn btn-bluelagoon">
                {{ button1 }}
              </button>
            </a>
          </li>
        </ul>
      </nav>

      <div class="main-content">
        <div>
          <h6>
            {{ mainTitle }}
          </h6>
        </div>
        
        <div>
          <h1>
            {{ subTitle }}
          </h1>
        </div>
        
        <div class="pt-3 pb-5">
          <h5>
            {{ description }}
          </h5>
        </div>

        <div>
          <button class="my-btn btn-bluelagoon">{{ button1 }}</button>
          <button class="my-btn btn-noborder ms-4">{{button2 }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.jumbotron {
  max-width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("../../assets/img/bg-9.jpg");
  background-size:cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(14, 14, 14, 0.7);
    opacity: 1;
    z-index: 1;
  }

  .container-jumbotron {
    max-width: 1250px;
    margin: 0 auto;
    position: relative;
    z-index: 2;

    nav {
      padding-top: 20px;
      
      li {
        @include simple-li;

        a {
          color: $silverSand;
          font-size: 1.1rem;
          font-weight: 500;
          text-transform: uppercase;

          &:hover {
            color: $blueChill;
            transition: 0.3s ease-in-out;
          }
        }
      }
    }

    .main-content {
      width: 570px;
      margin: 150px 0;
      color: white;

      h5 {
        color: $silverSand;
      }

      h1 {
        font-size: 4.5rem;
        font-weight: 900;
      }
    }
  }
}
</style>
