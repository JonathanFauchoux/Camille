<template>
  <div class="card-cover-button">
    <a :href="content"></a>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'CardCoverButton',
  props: {
    content: {
      type: String,
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
.card-cover-button{
  a{
    z-index: 10;
    @include icon(icons(arrow-right),after);
    height: 2rem;
    width: 2rem;
    &::after{
      color: white;
      font-size: 1.8rem;
      font-weight: bold;
      padding: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.36);
      border-radius: 5rem;
    }
  }
}
</style>
