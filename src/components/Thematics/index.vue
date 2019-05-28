<template>
  <div class="thematics-nav">
    <h3>les thématiques</h3>
    <ul>
      <li v-for="item in thematics" :key="item.id" > <a :href="item.url" :class="item.type"> {{item.label}} </a></li>
    </ul>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
export default {
  name: 'Thematics',
  props: {
    thematics: {
      type: Array,
      required: false,
      default: () => {
        return {
        }
      }
    }
  },
  created () {
  }

}
</script>

<style lang="scss">
.thematics-nav{
  @include media("small"){
    flex-direction: column;
    padding-bottom: 6rem;;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;
  h3{
    @include media ("small"){
      padding-top: 2rem;
      padding-bottom: 1rem;
      padding-right: 0;
    }
    text-transform: uppercase;
    color: colors(primary);
    font-size: 1.4rem;
    font-weight: 500;
    padding-right: 2.7rem;
  }
  ul{
    @include media("small"){
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
  }
    @include no-type-list;
    display: flex;
    li{
      @include media("small"){
        padding-right: 0;
        padding-bottom: 1.5rem;
        &:nth-last-of-type(1){
          padding-bottom: 0;
        }
      }
      padding-right: 1.5rem;
    }
  }

  .grossesse{
  padding: .5rem 1.5rem;
  color: #f7527c;
  background-color: rgba(164, 30, 64, 0.1);
  text-transform: uppercase;
  border-radius: 5rem;
  font-size: 1.2rem;
  font-weight: 600;
    &:hover{
      color: colors(primary);
    }
  }

  .sante{
  padding: .5rem 1.5rem;
  color: #13c267;
  background-color: rgba(19, 194, 103, 0.1);
  text-transform: uppercase;
  border-radius: 5rem;
  font-size: 1.2rem;
  font-weight: 600;
    &:hover{
      color: colors(primary);
    }
  }

  .parentalite{
  padding: .5rem 1.5rem;
  color: colors(primary);
  background-color: rgba(21, 59, 202, 0.1);
  text-transform: uppercase;
  border-radius: 5rem;
  font-size: 1.2rem;
  font-weight: 600;
    &:hover{
      color: white;
    }
  }

  .education{
  padding: .5rem 1.5rem;
  color: #ffbb03;
  background-color: rgba(255, 187, 3, 0.1);
  text-transform: uppercase;
  border-radius: 5rem;
  font-size: 1.2rem;
  font-weight: 600;
    &:hover{
      color: colors(primary);
    }
  }
}
</style>
