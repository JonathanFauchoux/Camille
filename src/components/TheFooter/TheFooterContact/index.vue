<template>
  <div class="footer-contact">
    <h3>Contact</h3>
    <p>{{ contact.adress }}</p>
    <p>{{ contact.cp }}</p>
    <p>{{ contact.asbl }}</p>
    <p>{{ contact.bce }}</p>
    <p>{{ contact.caf }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheFooterContact',
  computed: {
    ...mapGetters('footer', [
      'contact'
    ])
  },
  created () {

  }
}
</script>
<style lang="scss">
.footer-contact{
  @include media ("small-medium"){
    margin-left: 0;
  }
  margin-left: 3rem;
  h3{
    @include media("small-medium"){
      display: none;
    }
    color: colors(primary);
    text-transform: uppercase;
    font-size: 1.6rem;
  }
  p{
    @include media ("small-medium"){
      text-align: center;
    }
    color: colors(primary);
    margin-bottom: .5rem;
    font-size: 1.4rem;

    &:nth-last-of-type(1){
      @include media ("small-medium"){
        padding-bottom: 4.2rem;
      }
    }
  }
}

</style>
