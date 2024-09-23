<script>
import { store } from '../../store.js'
export default {
  data () {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="contact-us">
    <div class="container">
      <div class="row">
        <!-- LEFT PART -->
        <div class="col-8 pe-5">
          <div>
            <h6>
              SEND A MESSAGE
            </h6>
          </div>
          
          <div>
            <h1 class="my-4">
              <span>
                Get in
              </span> 
              <span class="text-overlay m-0">
                Touch
              </span>
            </h1>
          </div>

          <div>
            <p>
              We will respond to your message as soon as possible.
            </p>
          </div>

          <form class="row pe-5">
            <div class="col-md-6">
              <label for="name" class="form-label"></label>
              <input type="text" class="form-control m-0" placeholder="Name" id="name">
            </div>

            <div class="col-md-6">
              <label for="inputEmail4" class="form-label"></label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>

           <div class="col-md-6">
              <label for="number" class="form-label"></label>
              <input type="number" class="form-control" placeholder="Phone" id="number">
            </div>

            <div class="col-md-6">
              <label for="options"></label>
              <select class="form-select" aria-label="Default select example" id="options">
                <option selected>More info</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label for="textarea" class="form-label"></label>
                <textarea placeholder="Message" class="form-control" id="textarea" rows="6"></textarea>
              </div>
            </div>
            
            <div class="col-12 mt-3">
              <button type="submit" class="my-btn btn-bluelagoon">SEND</button>
            </div>
          </form>
        </div>

        <!-- RIGHT PART -->
        <div class="col-4">
          <h3>
            Example Inc.
          </h3>

          <p class="my-4">
            Lorem psum dolor sit amet, consectetur adipscing elit.
          </p>

          <p>
            Praesent diam lacus, dapibus sed imperdiet consectetur.
          </p>

          <ul>
            <li v-for="(item,index) in store.contactlist" :key="index" class="mb-2">
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
            <button class="my-btn btn-noborder mt-3">
                VIEW MAP
            </button>
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
.contact-us {
  padding: 100px 0;

  p {
    color: $midGray;
  }

  form input,
  form textarea,
  form select {
    border: none;
    background-color: $grayNurse;
    padding: 15px;
    font-size: 1.2rem;
    color: $midGray;
  }

  input::placeholder,
  text::placeholder,
  textarea::placeholder {
    color: $midGray;
  }

  a {
      color: $blueChill;
  }

  .icon {
    width: 50px;
    height: 50px;
    background-color: $bermuda;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    & {
      color: $blueLagoon;
    }
  }

  .my-btn.btn-noborder {
    color: $blueChill;
  }
}
</style>
