<template>
  <section class="bg-gray-50 dark:bg-black-0">
    <div class="xl:container mx-auto px-4">
      <div
        class="grid xl:grid-cols-2 md:grid-cols-1 gap-12 lg:pt-24 pt-12"
        v-for="imgleftcont in imgrightcontleft"
        :key="imgleftcont.headingfirst"
      >
        <div class="flex align-center content-center flex-wrap">
          <div
            class="max-w-screen-sm mx-auto xl:mx-0 my-2 px-3 transition-all ease-in-out duration-700"
          >
            <h1 :class="imgleftcont.fontsize" class="dark:text-white">{{imgleftcont.headingfirst}}</h1>
            <p
              class="mt-2 mb-4 dark:text-white"
              :class="imgleftcont.paraSize"
            >{{imgleftcont.paragraph}}</p>
            <p class="paramd mt-2 dark:text-white">{{imgleftcont.subparagraph}}</p>
          </div>
        </div>
        <div class="align-center flex">
          <img
            src="~/assets/images/radixwebBannerimg.png"
            width="595"
            height="372"
            alt="OPS"
            class="m-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    /*  value: String,
    mainpara: String,
    subpara: String,
    imageurl: String, */
    imgrightcontleft: Array
  }
}
</script>

<style>
@layer components {
  .paramd {
    @apply text-base;
  }
  .mainheading {
    @apply text-2xl leading-snug pb-6;
  }
  @screen md {
    .mainheading {
      @apply text-3xl;
    }
  }
  @screen lg {
    .paramd {
      @apply text-lg;
    }
    .mainheading {
      @apply text-4xl;
    }
  }
}
</style>