<template>
  <div class="relative bg-offwhite-100 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32 ml-auto">
        <main
          class="mt-10 mx-auto xl:max-w-7xl sm:max-w-2xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-12 xl:mt-28"
        >
          <div class="sm:text-left lg:text-left">
            <h2
              class="lg:text-4xl md:text-3xl text-2xl leading-snug lg:pb-6 pb-2"
            >Web2Print Solutions</h2>
            <p
              class="lg:text-lg text-md mt-2 mb-4"
            >OnPrintShop is a leading print order management process to facilitate value-led, simplified and cost-effective solutions. A one-stop shop for all IT and designing needs, OnPrintShop’s service offerings has a hosted version (SaaS) and a custom licenced version.</p>
            <ul class="circleUl">
              <li class="circleList">
                <span class="beforeDots"></span> Web2Print Saas Solution
              </li>
              <li class="circleList">
                <span class="beforeDots"></span>Custom Web2Print Solutions
              </li>
              <li class="circleList">
                <span class="beforeDots"></span>Trade Printer Solution
              </li>
              <li class="circleList">
                <span class="beforeDots"></span>Online Photobook Solution
              </li>
              <li class="circleList">
                <span class="beforeDots"></span>Online Designer Studio Integration
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="~/assets/images/web2printsoltions_bg.jpg"
        alt="Web 2 Print Solution"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style>
@layer components {
  .circleUl {
    @apply text-base font-ptsemi relative;
  }
  .circleList {
    @apply py-2 px-2 relative flex items-center;
  }
  .beforeDots {
    @apply w-4 h-4 inline-block bg-orange-50 border-4 rounded-full border-grey-20 mr-3;
  }
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
    .circleUl {
      @apply text-lg;
    }
    .mainheading {
      @apply text-4xl;
    }
  }
}
</style>