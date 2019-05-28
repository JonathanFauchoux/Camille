<template>
  <div class="footer-links">
    <h3>Liens</h3>
    <ul>
      <li v-for="item in linksItems" :key='item.id'><a href="#">{{ item.text }}</a></li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheFooterLinks',
  computed: {
    ...mapGetters('footer', [
      'linksItems'
    ])
  },
  created () {

  }
}
</script>
<style lang="scss">
.footer-links{
  @include media ("small-medium"){
    margin-left: 0;
  }
  margin-left: 4rem;
  h3{
    color: colors(primary);
    text-transform: uppercase;
    font-size: 1.6rem;
  }
  ul{
    @include no-type-list;

    li{
      padding-bottom: 2.5rem;
      font-size: 1.4rem;
    }
  }
}

</style>
