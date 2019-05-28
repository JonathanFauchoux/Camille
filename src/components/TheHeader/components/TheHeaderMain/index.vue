<template>
  <div class="header-main">
    <div class="header-main__wrapper">
      <div class="header-main__inner">
        <AppLogo />
        <transition name="slide">
          <TheHeaderMainNav v-if="active || isDesktop" mode="in-out"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '@components/AppLogo'
import TheHeaderMainNav from './components/TheHeaderMainNav'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'TheHeaderMain',
  components: {
    AppLogo,
    TheHeaderMainNav
  },
  computed: {
    ...mapState('header', ['active']),
    ...mapGetters('breakpoints', [
      'isDesktop'
    ])
  }
}
</script>

<style lang="scss">
.header-main{
  @include media("small-medium"){
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__wrapper{
    @include wrapper;
  }
  &__inner{
    @include media("small-medium"){
    flex-direction: column;
    padding:0;
  }
    @include inner;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 7.4rem;
  }
  h1{
    @include media("small-medium"){
      @include icon(icons(search), after);
      width: 100%;
      &::after{
        font-size: 2.5rem;
        position: absolute;
        right: 8rem;
        top: 2.7rem;
      }
    }
  }
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 2s ease-out forwards;
    transition: opacity 1s;
  }
  .slide-leave {
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }
  .slide-move{
    transition: transform 1s;
  }
  @keyframes slide-in {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(0);
    }
  }
}

</style>
