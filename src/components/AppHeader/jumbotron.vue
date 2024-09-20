<script>
export default {
}
</script>

<template>
  <div class="jumbotron">
    <div class="container">
      <nav class="d-flex justify-content-between">
        <a href="#">
          <img src="../../assets/img/logo.svg" alt="logo">
        </a>

        <ul class="d-flex">
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
              ICON
            </a>
          </li>

          <li>
            <a href="#">
              <button>
                X
              </button>
            </a>
          </li>
        </ul>
      </nav>

      <div class="main-content">
        <div>
          <h5>
            LOGISTICS SERVICES
          </h5>
        </div>
        
        <div>
          <h1>
            CARGO <br>
            TRANSPORT
          </h1>
        </div>
        
        <div>
          <h5>
            Fractional or exclusive road cargo trasnportation
            to all regions with small, medium and large vehicles.
          </h5>
        </div>

        <div>
          <button>ab</button>
          <button>da</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/mixins.scss' as *;
@use '../../assets/scss/partials/colors.scss' as *;

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

  .container {
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
      width: 40%;
      margin: 150px 0;
      color: white;
    }
  }
}

</style>
