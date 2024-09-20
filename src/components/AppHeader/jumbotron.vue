<script>
export default {
}
</script>

<template>
  <div class="jumbotron">
    <div class="container-jumbotron">
      <nav class="d-flex justify-content-between align-items-center">
        <a href="#">
          <img src="../../assets/img/logo.svg" alt="logo">
        </a>

        <ul class="d-flex align-items-center">
          <li>
            <a href="#">
              HOME
            </a>
          </li>

          <li>
            <a href="#">
              ABOUT
            </a>
          </li>

          <li>
            <a href="#">
              SERVICES
            </a>
          </li>

          <li>
            <a href="#">
              PROCESS
            </a>
          </li>

          <li>
            <a href="#">
              TESTIMONIALS
            </a>
          </li>

          <li>
            <a href="#">
              <font-awesome-icon icon="fa-regular fa-user" />
            </a>
          </li>

          <li>
            <a href="#">
              <button class="my-btn btn-bluelagoon">
                get in touch
              </button>
            </a>
          </li>
        </ul>
      </nav>

      <div class="main-content">
        <div class="my-blue-color">
          <h5>
            LOGISTICS SERVICES
          </h5>
        </div>
        
        <div>
          <h1>
            CARGO
            TRANSPORT
          </h1>
        </div>
        
        <div class="pt-3 pb-5 my-grey-color">
          <h5>
            Fractional or exclusive road cargo trasnportation
            to all regions with small, medium and large vehicles.
          </h5>
        </div>

        <div>
          <button class="my-btn btn-bluelagoon">get in touch</button>
          <button class="my-btn btn-noborder ms-4">read more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/mixins.scss' as *;
@use '../../assets/scss/partials/colors.scss' as *;
@use '../../assets/scss/main.scss' as *;
@use '../../assets/scss/buttons-style.scss' as *;

.jumbotron {
  max-width: 100%;
  height: 869px;
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
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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
      img {
      max-width: 100%;
      width: 150px;
      }

      ul {
      @include simple-ul;

        li {
          @include simple-li;

          a {
            text-decoration: none;
            color: white;
            font-size: 1.3rem;
          }
        }
      }
    }

    .main-content {
      width: 570px;
      margin: 150px 0;
      color: white;

      .my-blue-color {
        color: $blueChill;
      }

      .my-grey-color {
        color: $silverSand;
      }

      h1 {
        font-size: 4.5rem;
        font-weight: bold;
      }
    }
  }
}

</style>
