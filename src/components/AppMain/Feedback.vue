<script>
export default {
  data () {
    return {
      activeCard: 0,
      visibleCards: 3,
      autoplay: null
    }
  },
  props: {
    trusted: Array
  },
  mounted() {
    this.startAutoPlay();
  },
  computed: {
    cleanTrusted () {
      return this.trusted.slice(this.activeCard, this.activeCard + this.visibleCards);
    }
  },
  methods: {
    getImagePath: function(img) {
      const url = new URL(`../../assets/img/${img}`, import.meta.url);

      const link = url.href
      return link
    },

    nextCard() {
      if (this.activeCard < this.trusted.length - this.visibleCards) {
        this.activeCard++;
      }
      else {
        this.activeCard = 0;
      }
    },

    startAutoPlay () {
      if (this.autoplay == null) {
        this.autoplay = setInterval(() => {
          this.nextCard();
        }, 3000)
      }
    },

    stopAutoPlay() {
      if (this.autoplay != null) {
        clearInterval(this.autoplay);
        this.autoplay = null;
      }
    }
  }
}
</script>

<template>
  <div class="feedback">
    <div class="container">
      <!-- TOP PART -->
      <div class="my-container text-center">
        <div>
          <h6>
            CUSTOMER TESTIMONIALS
          </h6>
        </div>

        <div>
          <h1 class="my-4">
            <span>
              Trusted
            </span>
            <span class="text-overlay m-0">
              Feedback
            </span>
          </h1>
        </div>

        <div>
          <p>
            We work intensively in search of ideals that can add up in the lives of
            our customers. This is what moves us and we are grateful of the recognition.
          </p>
        </div>
      </div>

      <!-- Bottom part -->
      <div class="row d-flex align-items-center justify-content-between my-5"
        @mouseenter="stopAutoPlay()"
        @mouseleave="startAutoPlay()">
        <div v-for="(card, index) in cleanTrusted" :key="index" class="card col mx-3 p-3">
          <div class="card-body">
            <div class="mb-4">
              <img :src="getImagePath(card.img)" :alt="card.title">
            </div>

            <p class="mb-3">
              {{ card.desc }}
            </p>

            <p>
              {{ card.botdesc }}
            </p>

            <font-awesome-icon class="quote" icon="fa-solid fa-quote-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.feedback {
  background-color: $woodSmoke;
  color: white;

  .text-overlay {
    background-color: rgba($blueLagoon, 0.2);
    color: white;
  }

  .container {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
  }

  .card {
    position: relative;
    height: 320px;

    .quote {
      position: absolute;
      bottom: 15px;
      right: 15px;
      font-size: 2.5rem;
      color: $midGray;
    }
  }
}
</style>
