<template>
  <div class="lg:py-20">
    <div class="text-center lg:pb-12 dark:text-white">
      <h2>Trusted by Global Enterprises</h2>
    </div>
    <VueSlickCarousel v-bind="settings" class="bg-cultured py-10 dark:text-gray">
      <div v-for="slider in clientslider" :key="slider.heading" class="focus:outline-none">
        <img
          class="mx-auto"
          :src="slider.sliderimg"
          :width="slider.imgwidth"
          :height="slider.imgheight"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  props: {
    clientslider: Array
  },
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 8,
        speed: 200,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1460,
            settings: {
              slidesToShow: 7,
              variableWidth: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToScroll: 4,
              slidesToShow: 4
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 460,
            settings: {
              variableWidth: true,
              centerMode: true,
              slidesToScroll: 2,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 375,
            settings: {
              centerMode: true,
              slidesToScroll: 1,
              slidesToShow: 1
            }
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss">
.slick-list .slick-track {
  display: flex;
  align-items: center;
}
</style>