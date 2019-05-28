<template>
  <header class="header">
    <div class="header__inner">
      <TheHeaderBurger />
      <transition name="slide">
        <TheHeaderTopbar v-if="active || isDesktop" mode="in-out"/>
      </transition >
      <TheHeaderMain />
    </div>
  </header>
</template>

<script>
import TheHeaderTopbar from './components/TheHeaderTopbar'
import TheHeaderMain from './components/TheHeaderMain'
import TheHeaderBurger from './components/TheHeaderBurger'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState('header', ['active']),
    ...mapGetters('breakpoints', [
      'isDesktop'
    ])
  },
  components: {
    TheHeaderTopbar,
    TheHeaderMain,
    TheHeaderBurger
  }
}
</script>

<style lang="scss">
  .header{

    &__inner{
      //@include inner;
      display: flex;
      flex-direction: column;
    }
    .slide-enter {
      transform: translateY(-2rem);
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
