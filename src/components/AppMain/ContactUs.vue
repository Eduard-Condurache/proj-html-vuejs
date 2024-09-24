<script>
import { errorMessages } from 'vue/compiler-sfc';
import { store } from '../../store.js'
export default {
  data () {
    return {
      store,

      formInfo : {
        name: '',
        email: '',
        number: '',
        message: '',
        subject: '',
        textarea: ''
      },

      errorMessage: ''
    }
  },
  methods: {
    handleSubmit() {
      this.errorMessage = '';

      const phoneNumber = this.formInfo.number.toString();

      if (this.formInfo.name &&
          this.formInfo.email &&
          phoneNumber.length >= 9 &&
          this.formInfo.textarea &&
          this.formInfo.subject) {

          console.log('Name:', this.formInfo.name);
          console.log('Email:', this.formInfo.email);
          console.log('Phone Number:', this.formInfo.number);
          console.log('Subject:', this.formInfo.subject);
          console.log('Message:', this.formInfo.textarea);
        } 
      else {
        this.errorMessage = 'Il numero di telefono deve essere di almeno 9 numeri'
      }
    },
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

          <!-- FORM -->

          <form @submit.prevent="handleSubmit()" class="row pe-5">
            <div class="col-md-6">
              <label for="name" class="form-label"></label>
              <input type="text" class="form-control m-0" placeholder="Name" id="name" required v-model="formInfo.name">
            </div>

            <div class="col-md-6">
              <label for="inputEmail4" class="form-label"></label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required v-model="formInfo.email">
            </div>

           <div class="col-md-6">
              <label for="number" class="form-label"></label>
              <input type="number" class="form-control" placeholder="Phone" id="number" required v-model="formInfo.number">
            </div>

            <div class="col-md-6">
              <label for="options"></label>
              <select v-model="formInfo.subject" class="form-select" aria-label="Default select example" id="options" required>
                <option disabled value="">More options</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label for="textarea" class="form-label"></label>
                <textarea placeholder="Message" class="form-control" id="textarea" rows="6" minlength="10" maxlength="100" required v-model="formInfo.textarea"></textarea>
              </div>
            </div>
            
            <div class="col-12 mt-3">
              <button type="submit" class="my-btn btn-bluelagoon">SEND</button>
            </div>
          </form>
          <div v-if="errorMessage" class="text-danger mt-3">
            {{ errorMessage }}
          </div>

          <!-- /FORM -->
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

.contact-us {

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

  *::placeholder {
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
