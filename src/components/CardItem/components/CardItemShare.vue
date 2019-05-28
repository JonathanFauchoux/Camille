<template>
  <div class="card-items-share">

      <a :href="content.socialShare[0].url" target="_blank">
        <span :class="content.socialShare[0].network"></span>
      </a>

      <a :href="content.socialShare[1].url" target="_blank">
        <span :class="content.socialShare[1].network"></span>
      </a>

  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'CardItemShare',
  props: {
    content: {
      type: Object,
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

</style>
