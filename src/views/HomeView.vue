<template>
  <div class="home-view">
    <TheHeros />
    <SearchBar />
    <Thematics :thematics="thematics"/>
    <TheSlider />
    <div class="cards">
      <div class="cards__wrapper">
        <div class="cards__inner">
          <div class="cards_title">
            <h2>Nos dernières actualités</h2>
            <a href="#">Toutes les actualités</a>
          </div>
          <component v-for="card in cards" :key="card.guid" :content="card" :is="card.type ==='news'? 'CardItem' : 'CardCover' "></component>
          <div class="show-more">
             <p>Voir encore plus ? <a href="#">Charger plus d'actualités</a> </p>
          </div>
        </div>
      </div>
    </div>
    <Newsletter/>
  </div>
</template>

<script>
import Provider from '@api/provider'
import { mapActions } from 'vuex'

import TheHeros from '@components/TheHeros'
import Newsletter from '@components/Newsletter'
import SearchBar from '@components/SearchBar'
import CardItem from '@components/CardItem'
import CardCover from '@components/CardCover'
import Thematics from '@components/Thematics'
import TheSlider from '@components/TheSlider'

export default {
  name: 'HomeView',
  components: {
    TheHeros,
    Newsletter,
    SearchBar,
    CardItem,
    CardCover,
    Thematics,
    TheSlider
  },
  data () {
    return {
      cards: [],
      thematics: []
    }
  },
  created () {
    Provider.home.getHomeContent('home').then((data) => {
      this.updateHomeContent(data)
      this.cards = data.cards
      this.thematics = data.thematics
    })
  },
  methods: {
    ...mapActions('home', [
      'updateHomeContent'
    ])
  }
}
</script>
<style lang="scss">
.cards{
  &__wrapper{
    @include wrapper;
  }

  &__inner{
    @include inner;
    @include media ("small-medium"){
      align-items: center;
      padding: 0;
      justify-content: center;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 8rem;

    .cards_title{
      @include media ("small"){
        flex-direction: column;
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-bottom: 6rem;

      h2{
        @include media ("small"){
          padding-bottom: 5rem;
        }
        display: flex;
        align-items: center;
        padding: 0;
        color: colors(primary);
        text-align: center;
      }

      a{
        color: white;
        font-size: 1.6rem;
        background-color: colors(primary);
        padding : 2rem 2rem 2rem 5rem;
        border-radius: 50px;
        @include icon(icons(arrow-right), after)

      }
      a::after{
        padding:0 2rem;
      }
    }
    .show-more{
      width: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 6rem;
      padding-top:7rem;
      p{
        color: colors(primary);
        font-size: 1.4rem;
        text-align: center;
        padding: 0 4.6rem;
        a{
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
