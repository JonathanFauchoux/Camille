<template>
  <div class="social-links">
    <ul>
      <SocialLinksItem
        :url="item.url"
        :network="item.network"
        :tag="'li'"
        :key="item.network"
        v-for="item in items"
      />
    </ul>
  </div>
</template>

<script>
import SocialLinksItem from './components/SocialLinksItem'

export default {
  name: 'SocialLinks',
  props: {
    items: {
      type: Array,
      required: false,
      default: () => {
        return []
      }
    }
  },
  components: {
    SocialLinksItem
  }
}
</script>

<style lang="scss">
  .social-links{
    ul{
      @include no-type-list;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    li{
      flex: 0 1 auto;
      &:not(:last-of-type) {
        margin-right: 1rem;
      }
    }
  }
</style>
