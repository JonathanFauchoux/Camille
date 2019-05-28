<template>
  <div class="card-item">
    <CardItemShare :content="content" />
    <CardItemImage :image="content.image"/>
    <CardItemContent :content="content" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardItemImage from './components/CardItemImage'
import CardItemContent from './components/CardItemContent'
import CardItemShare from './components/CardItemShare'

export default {
  name: 'CardItems',
  data () {
    return {

    }
  },
  components: {
    CardItemImage,
    CardItemContent,
    CardItemShare
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
.card-item{
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
  margin-bottom: 5rem;
  box-shadow: 0 50px 70px -1px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  .card-items-share{
    opacity: 0;
    transition: opacity .7s;
  }
  &:hover{
    .card-items-share{
      opacity: 1;
      .facebook{
        @include icon(icons(facebook),after);
        position: absolute;
        right: layout("spacing");
        top: layout("spacing");
        &::after{
          color: colors(primary);
          font-size: 2rem;
          padding: .6rem 1rem;
          background-color: white;
          border-radius: 2rem;
        }
      }
      .twitter{
        @include icon(icons(twitter),after);
        position: absolute;
        right: layout("spacing");
        top: (layout("spacing")*2.65);
        &::after{
          color: colors(primary);
          font-size: 2rem;
          padding: .7rem .8rem;
          background-color: white;
          border-radius: 2rem;
        }
      }
    }
  }

}

</style>
