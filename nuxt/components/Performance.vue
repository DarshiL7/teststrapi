<template>
  <div class="xl:container grid md:grid-cols-4 gap-x-8 py-12 justify-items-center">
    <div
      class="bg-orange-50 dark:bg-gray text-white py-12 px-8"
      v-for="contents in content"
      :key="contents.heading"
    >
      <p class="para_lg_semib" :class="contents.fontsize">{{contents.heading}}</p>
      <p class="md:text-lg py-3">{{contents.para}}</p>
    </div>
  </div>
</template> 

<script>
export default {
  props: {
    content: Array
  }
  /* methods: {
    selectTheme(value) {
      console.log(value)
    }
  } */
  /*  const: (selectTheme = value => {
    console.log(value)
  }) */
}
</script>

<style>
</style>
