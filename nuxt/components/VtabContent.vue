<template>
  <div class="tab-content tab-space bg-secondary h-full p-12 text-white mb-5">
    <!-- {{openTab}} -->
    <!-- <div v-bind:class="{ hidden: openTab !== openTab, block: openTab === openTab }"> -->
    <div>
      <div class="flex flex-row flex-wrap items-center">
        <h3 class="text-2xl font-poppins-SemiBold mb-5">
          <!-- Embedded Software Development -->
          {{EmbededSoftware[openTab].title}}
        </h3>
        <p class="mb-8 text-lg" v-html="EmbededSoftware[openTab].desc">
          <!-- {{ }} -->
        </p>
        <ul class="flex flex-wrap w-full">
          <li
            class="sm:w-3/6 pl-8 w-full mb-4 text-lg relative"
            v-for="listval in EmbededSoftware[openTab].list"
            :key="listval.list"
          >
            <span class="bullet-orange-round"></span>
            <a
              href
              title="Maintenance and Support"
              class="text-white hover:text-primary border-b inline"
            >{{listval.listdata}}</a>
          </li>
        </ul>

        <div class="w-full mt-10">
          <a
            href
            class="group flex justify-end items-center text-lg text-primary hover:text-primary"
            title="Build Software"
          >
            {{EmbededSoftware[openTab].link}}
            <img
              class="w-4 ml-5 group-hover:ml-3"
              src="../assets/images/arrow.svg"
              alt="Arrow"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// alert(openTab);
export default {
  props: {
    openTab: Number,
    EmbededSoftware: Array
  }
}
</script>

<style>
</style>
