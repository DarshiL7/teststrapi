<template>
  <div :class="{ 'text-white' : banner == true}">
    <header
      :class="{ 'scrolled': !view.atTopOfPage }"
      class="header sticky top-0 w-full top-0 z-20 hover:bg-white dark:bg-black-0 dark:text-white bg-transparent animated"
    >
      <headercustom />
    </header>
    <nuxt />
    <footercustom class="dark:bg-black-0" />
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import headercustom from '~/components/header'
import footercustom from '~/components/Footer'

export default {
  data() {
    return {
      view: {
        atTopOfPage: true
      }
    }
  },
  props: {
    banner: Boolean
  },
  components: {
    Logo,
    headercustom,
    footercustom
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    }
  }
}
</script>