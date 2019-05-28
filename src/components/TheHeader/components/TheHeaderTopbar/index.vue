<template>
  <div class="header-topbar">
    <div class="header-topbar__wrapper">
      <div class="header-topbar__inner">
        <SocialLinks :items="socialItems" />
    <TheHeaderTopbarNav />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SocialLinks from '@components/SocialLinks'
import TheHeaderTopbarNav from './components/TheHeaderTopbarNav'

export default {
  name: 'TheHeaderTopbar',
  components: {
    SocialLinks,
    TheHeaderTopbarNav
  },
  computed: {
    ...mapGetters('header', [
      'socialItems'
    ])
  }
}
</script>

<style lang="scss">
.header-topbar{
  @include media ("xlarge"){

  }
  @include media ('small-medium'){
    order: 2;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4.5rem;
  width: 100%;
  background-color: colors(foreground);
  &__wrapper{
    @include wrapper;
  }
  &__inner{
    @include media("small-medium"){
      flex-direction: column;
      padding-right: 0;
    }
    @include inner;
    display: flex;
    align-items: center;
    padding-right: 7.4rem;
  }
  .social-links{
    @include media ('small-medium'){
      width: 100px;
      order: 2;
      align-self: center;
      padding-left: 0;
    }
    padding-left: 8rem;
    ul{
      @include media ('small-medium'){
        padding: 5rem 0;

      }
      list-style: none;
      display: flex;
      margin-left: 0;
      padding-left:0;
      width: 10rem;
      margin: 0;
      li{
        @include media ('small-medium'){
        padding-right:3.1rem;
        &:nth-last-of-type(1){
          padding-right: 0;
        }
      }
        padding-right: 1rem;
      }
    }
    .facebook{
      &::before{
        @include media ('small-medium'){
        font-size: 2.8rem;
      }
        color: colors(primary);
        font-size: 1.8rem;
      }
    }
    .instagram{
      &::before{
        @include media ('small-medium'){
        font-size: 2.8rem;
      }
        color: colors(primary);
        font-size: 1.8rem;
      }
    }
  }
}

</style>
