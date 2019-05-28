<template>
  <div class="card-image" :style="{ backgroundImage : 'url('+ image + ')' }">
    <img :src="image" alt="image card">
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CardItemImage',
  computed: {
    ...mapState('home', [
      'cards'
    ])
  },
  props: {
    image: {
      type: String,
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
.card-image{
  height: 28rem;
}
</style>
