<template>
  <div class="search-bar">
    <div class="search-bar__wrapper">
      <div class="search-bar__inner">
        <div class="search-bar__input">
          <label for="search"></label>
          <input type="text" v-model="search" class="input-search" placeholder="Rechercher dans les carnets de Camille">
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SearchBar',
  data () {
    return {
      search: ''
    }
  },
  computed: {
  }
}
</script>
<style lang="scss">
.search-bar{
  &__wrapper{
    @include wrapper;
  }
  &__inner{
    @include media("small"){
      display: none
    }
    @include media("medium"){
      padding-right: 0;
    }
    @include inner;
    padding: 0 8rem 3rem 8rem;;
    position: relative;
    top: -3rem;
  }
  &__input{
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 11px 21px 0 rgba(0, 0, 0, 0.1);
    height: 7rem;
    font-size: 1.8rem;
    color: white;
    background-color: white;
    border-radius: 5rem;
    border: none;
    label{
      @include icon(icons(search), before);
      &::before{
        font-size:2rem;
        color: colors(primary);
        position: relative;
        top: .7rem;
        left: 1.5rem;
      }
    }
    .input-search{
      position: relative;
      top: .5rem;
      width: 90%;
      height: 3rem;
      color: #545e87;
      border:none;
    }
  }
}
</style>
