<template>
  <div>
    <section class="pt-24 bg-white dark:bg-black-0">
      <div
        class="xl:container mx-auto px-4"
        v-for="contents in headcontent"
        :key="contents.heading"
      >
        <div class="flex justify-center text-center flex-wrap">
          <h2 class="w-4/5 dark:text-white">{{contents.heading}}</h2>
          <p class="para_lg w-5/6 pb-12 pt-3 dark:text-white">{{contents.paragraph}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    headcontent: Array
  }
}
</script>