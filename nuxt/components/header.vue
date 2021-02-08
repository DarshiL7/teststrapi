<template>
  <div class="relative">
    <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="xl:container m-auto md:px-4">
        <div class="max-w-7xl mx-auto">
          <div
            class="md:flex justify-between items-center pt-6 lg:space-x-10 md:space-x-4"
          >
            <div class="flex justify-start lg:w-0 lg:flex-1 px-4">
              <nuxt-link to="/sample-page">
                <span class="sr-only">Workflow</span>
                <img
                  src="~/assets/images/logo_radix.png"
                  alt="logo_radix"
                />
              </nuxt-link>
            </div>
            <div class=" md:hidden inline-block absolute right-0 top-0 pt-12 pr-6">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                @click="istoggle = !istoggle"
              >
                <span class="sr-only">Open menu</span>
                <!-- Heroicon name: menu -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button> 
            </div>
            <nav class="md:flex lg:space-x-1 xl:space-x-5" v-show="istoggle">
              <div class="md:flex items-center md:border-b-4 md:border-orange-50 md:border-t-0 border-t border-b lg:px-4 md:px-2 px-5 md:py-8 py-2"  @mouseover="isVisible = true" 
               @mouseleave="isVisible = false" 
              
                  :class="isVisible ? 'border-opacity-0 md:border-opacity-100' : 'md:border-opacity-0'"
              >              
                <button
                  :class="isVisible ? 'text-orange-50' : 'text-grey-900'"
                  type="button"
                  class="nav-link-submenu flex justify-between w-full focus:outline-none"
                 
                >
                  <span :class="isVisible ? 'text-orange-50' : 'text-grey-900'">Services</span>
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="10px" y="10px"
                        viewBox="0 0 490.688 490.688" style="enable-background:new 0 0 490.688 490.688;" xml:space="preserve" width="16" class="md:hidden">
                      <path style="fill:#FFC107;" d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262
                        c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667
                        c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262
                        L472.328,120.529z"/>
                      <path d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083
                        c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262
                        c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279
                        C250.748,372.281,248.039,373.408,245.213,373.415z"/>
                      </svg>
                </button>
                <transition 
                  enter-active-class="transition ease-out duration-200"
                  enter-class="opacity-0 translate-y-100"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-100"
                >
                  <div
                    class="md:absolute top-100 left-0 right-0 z-10 md:shadow-2xl bg-white dark:bg-gray"
                    v-show="isVisible"
                  >
                  <div class="xl:container mx-auto">
                    <div class="ring-1 ring-black ring-opacity-5 overflow-hidden py-0 md:py-8" >
                      <div class="grid lg:grid-cols-4 col-gap-4 md:grid-cols-2 sm:grid-cols-1 gap-y-2">
                        <div class="relative mt-4 gap-4 px-0 py-4 sm:gap-4 sm:p-4">
                         

                          <a href="#" class="hover:bg-gray-50">
                                <span class="nav_text">Software Development</span>
                          </a>
                          <ul class="my-2 md:my-5 ml-5 border-l-2 border-lightgray px-5">
                            <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Strategy Consulting</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="-ml-0.5 text-base border-l-2 border-lightgray hover:border-black hover:text-orange-50">Custom Software</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Software Product</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Enterprise Mobility</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Software Outsourcing</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Digital Transformation</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Project Rescue</a>
                            </li>
                            <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Maintenance and support</a>
                            </li>
                          </ul>
                        </div>
                        <div class="relative mt-4 gap-4 px-0 py-6 sm:gap-4 sm:p-4">
                         

                          <a href="#" class="hover:bg-gray-50">
                                <span class="nav_text">Application Development</span>
                          </a>
                          <ul class="my-2 md:my-5 ml-5 px-5 border-l-2 border-lightgray">
                            <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Custom Application</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Application Modernization</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Application Management</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Application Maintenance</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Cloud Application</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Application Integration</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Ecommerce</a>
                            </li>
                            <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">CMS</a>
                            </li>
                          </ul>
                        </div>
                        <div class="relative mt-4 gap-4 px-0 py-6 sm:gap-4 sm:p-4">
                          <a href="#" class="hover:bg-gray-50">
                                <span class="nav_text">Embeded Product</span>
                          </a>
                          
                          <ul class="my-2 md:my-5 ml-5 px-5 border-l-2 border-lightgray">
                            <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Embedded Software</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Embedded Hardware</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Device Drivers Development</a>
                            </li>
                             <li class="mb-2 md:mb-4">
                              <a href="#" class="text-base hover:text-orange-50">Internet of Things (IoT)</a>
                            </li>
                          </ul>
                           <a href="#" class="hover:bg-gray-50">
                                <span class="nav_text">Hire Dedicated Developers</span>
                          </a>
                        </div>
                        <div class="relative mt-4 gap-4 px-0 py-6 sm:gap-4 sm:p-4">
                          <a href="#" class="py-1 hover:bg-gray-50">
                                <span class="nav_text">Mobile Apps</span>
                          </a>
                          <a href="#" class="py-1 hover:bg-gray-50">
                                <span class="nav_text">UX/UI Design</span>
                          </a>
                           <a href="#" class="py-1 hover:bg-gray-50">
                                <span class="nav_text">QA and testing</span>
                          </a>
                          <a href="#" class="py-1 hover:bg-gray-50">
                                <span class="nav_text">Dev Ops</span>
                          </a>
                          <div class="px-5 py-4 ">
                            <div class="text-lg">Delivering award-winning software development solutions since 2000</div>
                            <a
                              href="#"
                              class="button-md bg-orange-50 font-ptemed text-base lg:text-xl mt-5 inline-block"
                            >Let’s Talk</a>
                          </div>
                        </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </transition>
              </div>
              <div class="nav-list">
                <nuxt-link to="/expert" class="nav-link nav-link-submenu flex justify-between w-full">
                    Expertise
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="10px" y="10px"
                        viewBox="0 0 490.688 490.688" style="enable-background:new 0 0 490.688 490.688;" xml:space="preserve" width="16" class="md:hidden">
                      <path style="fill:#FFC107;" d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262
                        c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667
                        c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262
                        L472.328,120.529z"/>
                      <path d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083
                        c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262
                        c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279
                        C250.748,372.281,248.039,373.408,245.213,373.415z"/>
                      </svg>
                </nuxt-link>
              </div>
              <div class="nav-list nav-link-submenu flex justify-between w-full">
                  <a href="#" class="nav-link">
                      Technologies
                  </a>
              </div>
              <div class="nav-list nav-link-submenu flex justify-between w-full">
                  <a href="#" class="nav-link">
                    Work
                  </a>
              </div>
              <div class="nav-list nav-link-submenu flex justify-between w-full">
                    <nuxt-link to="/about-us" class="nav-link">
                     About</nuxt-link>
              </div>              
 

              <div class="flex items-center border-b-4 border-orange-50 nav-list"
              @mouseover="more = true"
                  @mouseleave="more = false"
                  :class="more ? 'border-opacity-100' : 'border-opacity-0'">               
                <button
                  :class="more ? 'text-orange-50' : 'text-grey-900'"
                  type="button"
                  class="nav-link-submenu"                  
                >
                  <span> Approach</span>
                </button>
                 <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
                >
                  <div
                    class="absolute z-12 top-100 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                    v-show="more"
                  >
                    <div
                      class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                    >
                      <div class="relative grid gap-6 bg-white dark:bg-gray px-5 py-6 sm:gap-8 sm:p-8">
                        <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <!-- Heroicon name: support -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          <div class="ml-4">
                            <p class="text-base font-ptemed text-grey-900">Help Center</p>
                            <p
                              class="mt-1 text-sm text-gray-500"
                            >Get all of your questions answered in our forums or contact support.</p>
                          </div>
                        </a>

                        <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <!-- Heroicon name: bookmark-alt -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div class="ml-4">
                            <p class="text-base font-ptemed text-grey-900">Guides</p>
                            <p
                              class="mt-1 text-sm text-gray-500"
                            >Learn how to maximize our platform to get the most out of it.</p>
                          </div>
                        </a>

                        <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <!-- Heroicon name: calendar -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div class="ml-4">
                            <p class="text-base font-ptemed text-grey-900">Events</p>
                            <p
                              class="mt-1 text-sm text-gray-500"
                            >See what meet-ups and other events we might be planning near you.</p>
                          </div>
                        </a>

                        <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <!-- Heroicon name: shield-check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <div class="ml-4">
                            <p class="text-base font-ptemed text-grey-900">Security</p>
                            <p
                              class="mt-1 text-sm text-gray-500"
                            >Understand how we take your privacy seriously.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </nav>
            <div class="hidden md:flex items-center justify-end md:flex-0 lg:w-100">
              <a
                href="#"
                class="button-md bg-orange-50 font-ptemed text-base lg:text-xl"
              >Let’s Talk</a>
            </div>
            <button class="w-12 focus:outline-none" @click="toggledark">
                <img src="~/assets/images/dark.svg" alt="" width="40" height="40" v-if="isTogglevalue == true">
                <!-- Light -->
                <img src="~/assets/images/light.svg" v-else alt="" width="40" height="40">
            </button>
          </div>
        </div>

      </div>
  </div>

</template>

<script>
// var openmodel=false;
// window.addEventListener('scroll',function(){
//     let header = document.querySelector('header');
 
//     header.classList.toggle('scrolling-active',window.scrollY>0);
// })
export default {
  // name: 'headercustom',
  data() {
    return {
      isVisible: false,
      more: false,
      istoggle: true,
      isTogglevalue: true,
    }
  },
  methods: {
    showMenu(data) {
      document.getElementById(data).style.display = 'block'
    },
    hideMenu(data) {
      document.getElementById(data).style.display = 'none'
    },
    toggledark() {
      if (this.isTogglevalue == true) {
        document.querySelector('html').classList.add('dark', 'bg-black-0')
        this.isTogglevalue = false
      } else {
        document.querySelector('html').classList.remove('dark', 'bg-black-0')
        this.isTogglevalue = true
      }
    }
  },
  mounted(){
    var gettime = new Date();
    var currentTime =  gettime.getHours();
    if(currentTime >= 0 && currentTime <= 14){
      document.querySelector('html').classList.add('dark', 'bg-black-0');
      this.isTogglevalue = false;
    }else{
      document.querySelector('html').classList.remove('dark', 'bg-black-0')
      this.isTogglevalue = true;
    }
  }
}
</script>

<style>
@layer components {
header.scrolled,
header:hover {
  @apply shadow-xl bg-white;
}
.nav-list {
    @apply flex items-center py-2 border-b px-5;
}
.nav-list:hover {
    @apply border-opacity-100 cursor-pointer;
}
.nav-link {
    @apply text-base font-ptemed text-grey-900;
}
.nav-link:hover, .nav-list:hover .nav-link {
    @apply text-orange-50;
}    
.nav-link-submenu {
    @apply text-base text-grey-900 inline-flex items-center font-ptemed;
}
.nav_text {
  @apply font-ptsemi text-grey-900  block text-base;
  &:hover {
    @apply text-primary;
  }
}
.nav-link-submenu:hover {
    @apply text-orange-50;
}
a.nav-link.nuxt-link-exact-active, .nuxt-link-active {
  @apply text-orange-50;
}
h1 {
 @apply text-4xl;
 }
 .button {
 @apply px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white;
 }
 .button-md {
 @apply px-4 py-2 border-2 text-lg border-transparent rounded-md shadow-sm font-medium text-white;
 }
 .button-md-white {
 @apply text-white bg-transparent border-white;
 }
 .button-xl {
 @apply font-ptreg;
 }
 .button-md:hover {
 @apply bg-transparent border-orange-50 text-orange-50;
 }
 .button-md-white:hover {
 @apply bg-white text-orange-50 border-orange-50 transition-all ease-in-out duration-100;
 }

 @screen md {
   .nav-list {
        @apply border-b-4 border-orange-50 border-opacity-0 px-2;
    }
 }
 @screen lg {
    h1 {
    @apply text-5xl; 
    }
    .button-md {
    @apply px-8 py-2 border-2 text-xl;
    }
    .button-xl {
    @apply px-10 py-3 text-2xl font-ptreg;
    }
    .nav-link-submenu {
      @apply text-lg;
    }
    .nav-link {
        @apply text-lg font-ptemed text-grey-900;
    }
     .nav-list {
        @apply border-b-4 border-orange-50 border-opacity-0 px-5;
    }
    .nav_text {
      @apply text-xl px-5;
      &:hover {
        @apply text-orange-50;
      }
    }
 } 
  @screen xl {
  .nav-link-submenu {
    @apply text-xl;
  }
  .nav-link {
      @apply text-xl font-ptemed text-grey-900;
  }
}
}
</style>
