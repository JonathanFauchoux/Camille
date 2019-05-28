<template>
  <div class="header-main-nav">
    <ul>
      <li v-for="item in mainItems" :key="item.id" ><a href="#" :class="{active: active == item.text}" @click="makeActive">{{item.text}}</a></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheHeaderMainNav',
  data () {
    return {
      active: 'Accueil'
    }
  },
  methods: {
    makeActive (event) {
      this.active = event.target.textContent
    }
  },
  computed: {
    ...mapGetters('header', [
      'mainItems'
    ])
  }
}
</script>

<style lang="scss">
.header-main-nav{
  @include media("small-medium"){

    border-top: 1px solid rgba(84, 94, 135, 0.25);
  }

  width: 100%;
  ul{
    @include media("small-medium"){
      flex-direction: column;
      justify-content: flex-start;
      padding: 0;
      margin: 0;
    }
    list-style: none;
    display: flex;
    justify-content: flex-end;
    li{
      @include media("small-medium"){
          padding: 1.7rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.3)
        }
      padding-right: 3rem;
      &:nth-last-child(1){
         @include media("small-medium"){
          display: none;
          &::before{
            position: absolute;
            top: 3rem;
            right: 8rem;
          }
        }
        @include icon(icons(search));
        &::before{
          color: colors(primary);
          font-size: 2rem;
          font-weight: bold;
          padding-left: 4rem;
        }
      }
      &:nth-last-child(2){
         @include media("small-medium"){
          padding: 1.7rem 0;
          border-bottom: none
        }
        padding-right: 0;

      }
      a{
        @include media("small-medium"){
          font-size: 1.6rem;
        }
        font-size: 1.4rem;
        font-weight: 500;
        padding-bottom: .5rem;
        border-bottom: 2px solid transparent;
      }
    }
  }
  .active{
    @include media ("small-medium"){
      border-bottom: 2px solid transparent;
    }
    border-bottom: 2px solid colors(primary);
  }
}
</style>
