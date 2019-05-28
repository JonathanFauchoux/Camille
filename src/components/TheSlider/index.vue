<template>
  <div class="slider" >
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <!-- <div class="swiper-slide" v-for="item in cards" :key="item.guid" > <TheSliderCard :content="item"/></div> -->
            <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>
<script>
import TheSliderCard from './components/TheSliderCard'
import { mapState } from 'vuex'

export default {
  name: 'TheSlider',
  data () {
    return {

    }
  },
  components: {
    TheSliderCard
  },
  computed: {
    ...mapState('home', [
      'cards'
    ])

  },
  watch: {

  },
  methods: {

  },

  created () {
    console.log('slider', this.cards)
  }
}
</script>
<style lang="scss">
.slider{

.swiper-container {
    width: 600px;
    height: 300px;
}

}
</style>
