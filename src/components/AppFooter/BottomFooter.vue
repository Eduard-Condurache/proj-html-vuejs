<script>

export default {
  data() {
    return { 
     
    }
  }
}
</script>

<template>
  <div class="bottom-footer">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div>
          <p>
            Enjoy the low price. We are Tracking any intention of piracy.
          </p>
        </div>
        <div>
          <p>
            &copy; 2020 NEXTGEN is Produly Powered by <a href="#">Codings</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/colors.scss' as *;
@use '../../assets/scss/general.scss' as *;


.bottom-footer {
  padding: 20px;
  background-color: $botFooter;

  p {
    font-size: 1rem;

    a {
    color: $blueLagoon;
    text-decoration: none;
    }
  }

}
</style>
