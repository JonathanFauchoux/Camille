<template>
  <footer class="footer">
    <TheFooterBackground />
    <div class="footer__wrapper">
      <div class="footer__inner">
        <div class="footer__footer-social">
          <AppLogo />
          <h3>La Caisse d'allocations familiales d'UCM</h3>
          <SocialLinks :items="socialItems"/>
        </div>
        <div class="footer__footer-links">
          <TheFooterLinks />
        </div>
        <div class="footer__footer-contact">
          <TheFooterContact />
          <SocialLinks :items="socialItems"/>
        </div>
      </div>
    </div>
    <div class="footer__footer-copyright">
     <TheFooterCopyright />
    </div>
  </footer>
</template>

<script>
import AppLogo from '@components/AppLogo'
import { mapGetters } from 'vuex'
import SocialLinks from '@components/SocialLinks'
import TheFooterLinks from './TheFooterLinks'
import TheFooterContact from './TheFooterContact'
import TheFooterCopyright from './TheFooterCopyright'
import TheFooterBackground from './TheFooterBackground'

export default {
  name: 'TheFooter',
  components: {
    AppLogo,
    SocialLinks,
    TheFooterLinks,
    TheFooterContact,
    TheFooterCopyright,
    TheFooterBackground
  },
  computed: {
    ...mapGetters('header', [
      'socialItems'
    ])
  },
  created () {
  }
}
</script>

<style lang="scss">
.background{
  @include media ("small-medium"){
    display: none;
  }
}
.footer{
  @include media("small-medium"){
    margin-top: -7.5rem;
    padding-top: 7rem;
  }
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  background-color: colors(foreground);
  padding-top: 25rem;
  margin-top: -10rem;
  &__wrapper{
    @include wrapper;
  }

  &__inner{
    @include media("small-medium"){
      margin-bottom: 0;
      padding: 0;
    }
    @include media ("large"){
      @include inner;
      padding: 0 7.9rem;

    }
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 7rem 0;
    margin-bottom: 5rem;
  }

  &__footer-social{
    @include media("small-medium"){
      width: 100%;
      align-items: center;
      padding-right: 0;
    }
    .social-links{
      @include media("small-medium"){
        display: none;
      }
      display:block;
    }
    width: 33%;
    display: flex;
    flex-direction: column;
    padding-right: (layout("spacing")*2);
    h1{
      margin-bottom: 0;
    }
    h3{
      @include media ("small-medium"){
        padding-bottom: 3.6rem;
        text-align: center;
      }
      margin-top: 0;
      color: colors(primary);
      font-size: 1.7rem;
      padding-bottom: 6rem;
    }
    .facebook{
      &::before{
        font-size: 3.2rem;
        padding-right: 3.8rem;
      }
    }
    .instagram{
      &::before{
        font-size: 3.2rem;
      }
    }
  }

  &__footer-links{
    @include media("small-medium"){
      display: none;
    }
    width: 33%;
    display: flex;
    flex-direction: column;
    padding-right: (layout("spacing")*2);
  }

  &__footer-contact{
    @include media("small-medium"){
      width: 100%;
      align-items: center;
      justify-content: center;
    }
    width: 33%;
    display: flex;
    flex-direction: column;
    .social-links{
      @include media("small-medium"){
        display: block;
        padding-bottom: 3.9rem;
        .facebook{
          &::before{
            font-size: 3.2rem;
            padding-right: 3.8rem;
          }
        }
        .instagram{
          &::before{
            font-size: 3.2rem;
          }
        }
      }
      display:none;
    }
  }

  &__footer-copyright{
    width: 100%;
  }
}
</style>
