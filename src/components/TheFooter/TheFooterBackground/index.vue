<template>
  <div class="background">

  </div>
</template>
<script>
export default {
  name: 'Background'
}
</script>
<style lang="scss">
.background{
  position: relative;
  z-index:-1;
  top: 0;
  margin-top: -30rem;
  background-color: colors(foreground);
  height: 15rem;
  width: 100%;
  border-radius: 35%;
}
</style>
