<template>
  <div class="heros">
    <h2><span>Bienvenue</span><span> sur les Carnets</span><span> de Camille</span></h2>
    <img src="https://via.placeholder.com/1440x460" alt="heros">

  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.heros{
  @include media("small"){
    margin-left: 2.8rem;
    border-bottom-left-radius: 8rem;
  }
  @include media ("large"){
  }
    @include media ("xlarge"){
    border-bottom-right-radius: 8rem;
    border-top-right-radius: 2rem;
  }
  margin-left: 4rem;
  background-image: url("https://picsum.photos/1440/460");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 15rem;
  height: 440px;
  display: flex;
  flex-direction: column;
}
img{
  visibility: hidden;
}
h2{
  @include media("small"){
    padding-left: layout("spacing");
    position: relative;
    top: 4.5rem;
    padding-right:0;
  }
  display: flex;
  flex-direction: column;
  padding: 0 9rem;
  padding-top: 7rem;
  text-shadow: 1px 1px 3px white;
  text-transform: uppercase;
  span{
    @include media("small"){
      font-size: 2.8rem;
      padding-bottom: .4rem;
    }
    font-size: 4.6rem;
    font-weight:bold;
    color: colors(primary);
    &:nth-of-type(1){
      @include icon(icons(sun),after);
      &::after{
        @include media("small"){
          font-size: 2.9rem;
        }
        padding-left: 2rem;
        font-size: 4rem;
      }
    }
    &:nth-of-type(3){
      @include icon(icons(lightbulb),after);
      &::after{
        @include media("small"){
          font-size: 2.5rem;
        }
        padding-left: 2rem;
        font-size: 4rem;
      }
    }
  }
}
</style>
