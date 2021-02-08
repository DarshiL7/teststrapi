<template>
  <div id="3card" class="p-0 bg-white dark:bg-black-0">
    <div class="xl:container mx-auto px-4 pb-12">
      <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        <div
          class="place-items-center lg:py-10 lg:px-8 px-4 text-center border-b-2 border-transparent border-orange-50 hover:shadow-xl lg:max-w-none max-w-md mx-auto dark:bg-gray"
          v-for="contents in content"
          :key="contents.cardHeading"
        >
          <div
            class="w-24 h-24 border-primary mb-5 border mx-auto rounded-full inline-flex items-center"
          >
            <img
              class="mx-auto"
              :src="contents.cardimg"
              :width="contents.imgwidth"
              :height="contents.imgheight"
            />
          </div>
          <h3
            class="text-center xl:text-3xl leading-snug text-grey-900 font-ptsemi text-2xl mb-3"
          >{{contents.cardHeading}}</h3>
          <p class="para_md text-gray" v-html="contents.cardpara"></p>
          <div
            class="text-center text-orange-50 font-ptreg text-lg row-start-1 mt-5 mb-5"
            v-html="contents.cardlink"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Array
  }
}
</script>