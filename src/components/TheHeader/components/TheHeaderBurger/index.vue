<template>
  <div>
    <a
      href="javascript:void(0);"
      class="header-burger "
      :class="{'is-active': active}"
      @click="handleClick"
      >
      <span>menu burger</span>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'TheHeaderBurger',
  computed: {
    ...mapState('header', [
      'active'
    ])
  },
  methods: {
    ...mapMutations('header', {
      updateHeaderActive: 'updateActive'
    }),
    handleClick () {
      this.updateHeaderActive(!this.active)
    }
  }
}
</script>
<style lang="scss">
.header-burger{
  @include hamburger;
  @include media('large'){
    display: none;
  }
  background-color:transparent;
  position: absolute;
  right: 3.2rem;
  top: 2.7rem;
  flex: 0 1 auto;
  z-index: 1;
  div > span{
    &:nth-of-type(1){
      background-color: colors(primary);
    }
    &:nth-of-type(2){
      background-color: colors(primary);
    }
    &:nth-of-type(3){
      background-color: colors(primary);
    }
    &:hover{
      background-color: colors(primary);
    }
    &.is-active{
      background-color: colors(primary);
    }
  }
}

</style>
