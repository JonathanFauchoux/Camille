<template>
  <div class="header-topbar-nav">
    <ul >
      <li v-for="item in topbarItems" :key="item.id"><a href="#"> {{ item.text }}</a></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheHeaderTopbarNav',
  computed: {
    ...mapGetters('header', [
      'topbarItems'
    ])
  }
}
</script>

<style lang="scss">
.header-topbar-nav{
  width: 100%;
  height: 100%;
  ul{
    @include media ('small-medium'){
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

  }
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    li{
      margin-bottom: 1.2rem;
      padding-right: 2.4rem;
      margin-top: 1.2rem;
      &:nth-last-of-type(1){
          padding-right: 0;
        }
      a{
        @include media ("small-medium"){
        font-size: 1.4rem;
      }
        font-size: 1.1rem;
        font-weight: 500;
        color: colors(primary)
      }
      &:nth-of-type(3){
        @include media ("small-medium"){
          border-right: none;
        }
        @include icon(icons(locked));
        border-right: 1px solid colors(primary);
        margin-right: 2.4rem;
         display: flex;
        align-items: center;
        &::before{
          color: colors(primary);
          padding-right: 1rem;
          font-size: 1.3rem;
        }
      }
      &:nth-of-type(4){
        @include media ("small-medium"){
          border-right: none;
          display: flex;
          align-items: center;
          border-radius: 50px;
          background-color: colors(primary);
          padding-right: 6rem;
          padding-bottom: 0;
          a{

            position: relative;
            top: 1rem;
            font-size: 1.6rem;
            color:white;
            padding-left: 2rem;
            @include icon(icons(arrow-left),after);
            &::after{
              position:relative;
              top: -2.3rem;
              left: 4rem;
              display: block;
              font-weight: bold;
              transform: rotate(180deg);
            }
          }
        }
        border-right: 1px solid colors(primary);
        margin-right: 2.4rem;
      }
      &:nth-of-type(5){
        @include media ("small-medium"){
          display: none;
        }
        @include icon(icons(mail));
        display: flex;
        align-items: center;
        &::before{
          color: colors(primary);
          padding-right: 1rem;
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>
