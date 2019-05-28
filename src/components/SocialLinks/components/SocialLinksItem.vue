<template>
  <component class="social-links-item" :is="tag">
    <a :href="url">
      <AppIcon
        :type="network"
        :class="network"
      />
    </a>
  </component>
</template>

<script>
import AppIcon from '@components/AppIcon'

export default {
  name: 'SocialLinksItem',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    },
    network: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  components: {
    AppIcon
  }
}
</script>

<style lang="scss">
  .social-links-item{}
</style>
