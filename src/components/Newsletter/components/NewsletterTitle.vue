<template>
  <div class="newsletter-title">
    <AppLogo />
    <h3>souhaite rester en <span class="contact"></span> contact</h3>
    <h3>avec votre <span class="family"></span> famille</h3>
  </div>
</template>
<script>
import AppLogo from '@components/AppLogo'
export default {
  name: 'NewsletterTitle',
  components: {
    AppLogo
  }
}
</script>
<style lang="scss">
.newsletter-title{
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    @include media ("small"){
      font-size: 2.8rem;
    }
    margin-bottom: 0.7rem;
  }
  h3{
    @include media ("small"){
      font-size: 2.5rem;
      padding: 0 2.4rem;;
    }
    font-size: 3.2rem;
    color: colors(primary);
    margin: 0;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    .contact{
      @include icon(icons(mail));
    }
    .family{
      @include icon(icons(users))
    }
  }
}
</style>
