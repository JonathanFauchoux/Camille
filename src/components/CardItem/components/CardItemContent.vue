<template>
  <div class="card-content">
    <div class="date">
      <span>{{ content.date }}</span>
    </div>
    <div class="title">
      <h3>{{ content.title }}</h3>
    </div>
    <div class="thematics" >
      <a
        :href="content.thematics[0].url"
        :class="content.thematics[0].type"
        > {{ content.thematics[0].label }} </a>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'CardItemContent',
  components: {
  },
  props: {
    content: {
      type: Object,
      required: true
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
  width: 37rem;
  box-shadow: 0 50px 70px -1px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  .card-content{
    padding-left: 3.1rem;
    width: 100%;
    .date{
    font-size: 1.3rem;
    color: colors(font);
    opacity: .5;
    padding-top: 2.8rem;
    margin-bottom: 1.6rem;
    }
  .title{
    font-size: 2rem;
    color: colors(primary);
    font-weight: 600;
    padding-bottom: 3.6rem;
    padding-right: 8rem;
    h3{
      margin: 0;
      font-weight: 300;
    }
  }
    .thematics{
      padding-bottom: 4.6rem;
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
          color: colors(primary);
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
  }
}

</style>
