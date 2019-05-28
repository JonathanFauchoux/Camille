<template>
  <div class="app-date">
    <p>{{ day + ' '}} {{ month + ' '}} {{ year }}</p>
  </div>
</template>
<script>
export default {
  name: 'AppDate',
  props: {
    day: {
      type: Number,
      required: true,
      default: 1
    },
    month: {
      type: String,
      required: true,
      default: 'Janvier'
    },
    year: {
      type: Number,
      required: true,
      default: 2019
    }
  }
}
</script>
<style lang="scss">

</style>
