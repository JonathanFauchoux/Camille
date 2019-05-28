<template>
  <div class="card-cover" :style="{backgroundColor: content.custom}">
    <span :class="content.typeLogo"></span>
    <h3>{{ content.title }}</h3>
    <CardCoverButton :content="content.urlButton" />
  </div>

</template>

<script>
import { mapState } from 'vuex'
import CardCoverButton from './component/CardCoverButton'
export default {
  name: 'CardCover',
  data () {
    return {

    }
  },
  components: {
    CardCoverButton
  },
  props: {
    content: {
      type: Object,
      required: false,
      default: () => {
        return {

        }
      }
    }
  },
  computed: {
    ...mapState('home', [
      'cards'
    ])
  },
  created () {
  }
}
</script>

<style lang="scss">
.card-cover{
  @include media ("large"){
    max-width: 37rem;
  }
  @include media ("small-medium") {
    width: 100%;
    max-width: 37rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @include media("small"){
    margin-right:0;
  }
  width: 31%;
  min-height: 52rem;
  margin-bottom: 5rem;
  box-shadow: 0 50px 70px -1px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background-color: colors(primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 4.2rem layout("spacing");
  h3{
    color: white;
    text-align: center;
    padding: 0 4.5rem 6rem 4.5rem;
    margin: 0;
  }
  .cross{
    @include icon(icons(cross));
    //@include icon(icons(cross),after);
    transform: rotate(45deg);
    &::before{
      color: white;
      font-size: 8rem;
    }
    // &::after{
    //   z-index: 0;
    //   color: white;
    //   font-size: 35rem;
    //   opacity: .4;
    //   position: absolute;
    //   left: 12rem;
    //   top: -15rem;
    // }
  }
  .family{
    @include icon(icons(check));
    //@include icon(icons(check),after);
    &::before{
      color: white;
      font-size: 8rem;
    }
    // &::after{
    //   z-index: 1;
    //   transform: rotate(-35deg);
    //   color: white;
    //   font-size: 35rem;
    //   opacity: .4;
    //   position: absolute;
    //   left: -12rem;
    //   top: 5rem;
    // }
  }

}
.isfamilly{
    background-color: yellow !important;
  }

</style>
