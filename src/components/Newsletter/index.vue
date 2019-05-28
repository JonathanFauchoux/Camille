<template>
  <div class="newsletter">
    <div class="newsletter__wrapper">
      <NewsletterTitle />
      <div class="newsletter__inner">
        <div class="newsletter__input">
          <label for="newsletter"></label>
          <input id="input" type="email" v-model="email" :placeholder="inputPlaceholder">
          <a href="#">S'inscrire</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import NewsletterTitle from './components/NewsletterTitle'

export default {
  name: 'Newsletter',
  data () {
    return {
      email: '',
      inputPlaceholder: ''
    }
  },
  components: {
    NewsletterTitle
  },
  computed: {
    ...mapGetters('breakpoints', [
      'isDesktop',
      'isMobile'
    ]),
    placeholder () {
      return this.isDesktop
        ? 'Entrer votre adresse e-mail'
        : 'Email'
    }
  },
  watch: {
    isDesktop () {
      this.updateInputPlaceholder()
    }
  },
  mounted () {
    this.updateInputPlaceholder()
  },
  methods: {
    updateInputPlaceholder () {
      this.inputPlaceholder = this.isDesktop
        ? 'Entrer votre adresse e-mail'
        : 'Email'
    }
  }
}
</script>
<style lang="scss">
.newsletter{
  @include media("small-medium"){
    position: relative;

  }
  position: relative;
  z-index: 11;
  &__wrapper{
    @include wrapper;
  }
  &__inner{
    @include inner;

  }
  &__input{
    @include media("small-medium"){
      margin: 3rem 0;
      border-radius: 20rem;
      padding: 3rem 0;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5rem 0rem;
    margin: 5rem 8rem 8rem 8rem;
    border-radius: 3rem;
    background-color: colors(primary);
    position: relative;
    label{
      @include icon(icons(mail));
      &::before{
        @include media ("small-medium"){
          position: absolute;
          left: 5rem;
          top: 2rem;
          padding-left: 0;
        }
        color: white;
        font-size: 2.4rem;
        padding-left: 7rem;
      }
    }
    input{
      @include media ("small-medium"){
        position: absolute;
        left: 10rem;
      }
      @include media ("small"){
        width: 40%;
      }

      width: 50%;
      height: 2rem;
      font-size: 1.8rem;
      color: white;
      background-color: colors(primary);
      border: none;
      &:focus{
        color: colors(primary);
      }
    }

    a{
      @include media("small-medium"){
        color: transparent;
        padding: 2.1rem 0rem;
        top: 0.4rem;
        position: absolute;
        right: .5rem;
      }
      color: white;
      position: absolute;
      top: 4rem;
      right: 8rem;
      font-size: 1.6rem;
      color:colors(primary);
      background-color: white;
      padding : 2rem 8rem 2rem 5rem;
      border-radius: 50px;

      @include icon(icons(arrow-right),after);
      &::after{
        @include media("small-medium"){
          color: colors(primary);
          left: 2.5rem;
          top: 2rem;
          font-size: 1.8rem;
        }
        position:absolute;
        top: 1.8rem;
        left: 15rem;
        font-weight: bold;
      }
    }

  }
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #ffffff;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #ffffff;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #ffffff;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: #ffffff;
  }
}
</style>
