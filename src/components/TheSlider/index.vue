<template>
  <div class="slider" >
    <div class="slider__wrapper">
     <div class="slider__inner">
        <h2>à la une</h2>
      <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide v-for="card in filterCards" :key="card.id"><TheSliderCard :content="card"/></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev" @click="prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next" @click="next"></div>
      </swiper>
     </div>
    </div>
  </div>
</template>
<script>
import TheSliderCard from './components/TheSliderCard'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TheSlider',
  data () {
    return {
      swiperOption: {
        // loop: true,
        slidesPerView: 1.7,
        spaceBetween: 200,
        breakpoints: {
        // when window width is <= 320px
          375: {
            slidesPerView: 1,
            spaceBetween: 100
          },
          470: {
            slidesPerView: 1.2,
            spaceBetween: 70
          },
          768: {
            slidesPerView: 1.3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 0
          },
          1180: {
            slidesPerView: 1.7,
            spaceBetween: 420
          },
          1400: {
            spaceBetween: 450
          }
        },
        pagination: {
          el: '.swiper-pagination',
          // spaceBetween: 8,
          clickable: true
        }
      }
    }
  },
  components: {
    TheSliderCard
  },
  computed: {
    ...mapState('home', [
      'cards'
    ]),
    ...mapGetters('breakpoints', [
      'isDesktop',
      'isMobile'
    ]),
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    filterCards () {
      return this.cards.filter(card => card.type === 'news')
    },
    sliderSize () {
      return this.swiperOption.slidesPerView
    }

  },

  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
  },
  methods: {
    next () {
      this.swiper.slideNext(500, true)
    },
    prev () {
      this.swiper.slidePrev(500, true)
    }
  },

  created () {
  }
}
</script>
<style lang="scss">
.slider{

  position: relative;
  &__wrapper {
    @include media("large"){
      margin-left: 8rem;
    }
    @include wrapper;
    padding-left: 8rem;

  }
  &__inner{
    @include inner;
  }
  h2{
    @include media("small"){
      padding-bottom: 3rem;
      text-align: center;
    }
    padding: 0;
    color:  colors(primary);
    margin-bottom: 5rem;
  }
  .swiper-container {

    width: 100%;
    height: 100%;
    padding-bottom: 12rem;
    overflow: initial;
  }
  .swiper-slide {
    background: #fff;
    width: 100%;
    height: 100%;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    img{
      visibility: visible;
    }
    &:nth-child(1){
     padding-left: 0rem;
    }
  }
  .swiper-slide:nth-child(2n) {
    width: 60%;
  }
  .swiper-slide:nth-child(3n) {
    width: 40%;
  }
  .swiper-button-prev{
    @include media ("small-medium"){
      display: none;
    }
    position: absolute;
    top: initial;
    left:initial;
    right: 22.5rem;
    bottom: 4rem;
    background-color: white;
    padding: 1rem 2.2rem;
    border-radius: 5rem;
    @include icon(icons(chevron-left));
    box-shadow: 0 11px 21px 0 rgba(0, 0, 0, 0.1);
    &::before{
      color: colors(primary);
      font-weight: bold;
      font-size: 1.5rem;
      position: relative;
      right: .8rem;
      top: .1rem;
    }
  }
  .swiper-button-next{
    @include media ("small-medium"){
      display: none;
    }
    position: absolute;
    right: 16.5rem;
    bottom: 4rem;
    top: initial;
    background-color: white;
    padding: 1rem 2.2rem;
    border-radius: 5rem;
    @include icon(icons(chevron-right));
    box-shadow: 0 11px 21px 0 rgba(0, 0, 0, 0.1);
    &::before{
      color: colors(primary);
      font-weight: bold;
      font-size: 1.5rem;
      position: relative;
      right: .5rem;
      top: .1rem;
    }
  }
  .swiper-pagination{
    @include media ("small-medium"){
      left: 0;
      bottom: 2rem;
    }
    left: -45.5%;
    bottom: 3rem;
  }
  .swiper-pagination-bullet{
    background-color:  colors(primary);
    opacity: 1;
  }
  .swiper-pagination-bullet-active{
    background-color: transparent;
    padding: .7rem;
    position: relative;
    top: .35rem;
    border: 1px solid colors(primary);
    color: colors(primary);
    &::after{
      content:"";
      display: block;
      background-color: colors(primary);
      height: .8rem;
      width: .8rem;
      border-radius: 50px;
      position: relative;
      top: -.4rem;
      right: .4rem;
    }
  }
}
</style>
