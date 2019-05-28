<template>
  <div class="footer-copyright">
    <p>{{ copyright.text }}</p>
    <div class="infos">
      <a href=""> {{copyright.sitemap }}</a>
      <a href=""> {{copyright.info }}</a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheFooterLinks',
  computed: {
    ...mapGetters('footer', [
      'copyright'
    ])
  },
  created () {

  }
}
</script>
<style lang="scss">
.footer-copyright{
  @include media("small-medium"){
    flex-direction: column;
    align-items: center;
  }
  @include inner;
  @include wrapper;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eff1fc;

  padding: 1.9rem 8rem 6.6rem 8rem;

  p{
    @include media ("small-medium"){
      padding-left:0;
      padding-top: 2rem;
      margin-bottom: 2rem;
      font-size: 1.4rem;
    }
    color: colors(primary);
    padding-left: 9rem;
  }
  .infos{
    @include media("small-medium"){
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      a{
        @include media ("small-medium"){
          font-size: 1.3rem;
          &:nth-of-type(1){
          padding-bottom: 2rem;
          }
        }
      }
    }
    padding-right: 8rem;
    a{
      &:nth-of-type(1){
        padding-right: 3rem;
      }
    }
  }
}

</style>
