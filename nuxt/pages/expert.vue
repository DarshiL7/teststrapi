<template>
  <div>
    <banner />

    <section class="bg-white">
      <div class="xl:container px-4 mx-auto text-center lg:py-24 py-12">
        <h2
          class="lg:text-4xl md:text-3xl text-2xl leading-snug pb-6"
        >OnPrintShop to Boost Efficiency</h2>
        <p
          class="lg:text-xl text-md mt-2 mb-4"
        >Redefining printing industry with best-in-class, cost-efficient and targeted Web to Print Solutions solutions to automate print order cycles and leveraging the power of advanced e-commerce suite to enhance customer engagement</p>
      </div>
    </section>
    <fiftyContent :value="heading" :mainpara="Mainpara" :subpara="Subpara" :imageurl="Imageurl" />
    <section class="lg:py-24 py-12 bg-orange-50">
      <div class="xl:container mx-auto px-4">
        <div class="grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-8 lg:max-w-none max-w-md mx-auto">
          <div class="lg:col-start-1 lg:col-end-4">
            <div
              class="lg:max-w-2xl max-w-lg text-white font-ptreg lg:text-3xl text-lg xl:ml-32 lg:ml-12 xl:pl-8 pl-4 lg:border-l-4 border-l-2 border-white"
            >Don’t just thrive. Reinvent printing with customised web-to-print solutions.</div>
          </div>
          <div class="lg:col-start-4 flex">
            <a
              href="#"
              target="_blank"
              class="button-md button-xl button-md-white self-center"
              title="OnPrintShop"
              rel="noopener noreferrer"
            >OnPrintShop</a>
          </div>
        </div>
      </div>
    </section>
    <heroSection />
    <getintouch />
  </div>
</template>

<script>
import heroSection from '~/components/herosection'
import getintouch from '~/components/GetInTouch'
import fiftyContent from '~/components/fiftycontent'
import banner from '~/components/banner'

export default {
  components: {
    banner,
    fiftyContent,
    heroSection,
    getintouch
  },
  data() {
    return {
      heading: 'Web to Print Storefront Solutions for the Print Industry',
      Mainpara:
        'OnPrintShop is a wholesome business solution for all your printing woes. Build your business on our unmatched capability for customisation and use targeted solutions to enhance print order cycles.',
      Subpara:
        'Our web to print solutions comes with a variety of pre-populated templates and business catalogues to transform your business into an online multi-speciality printshop. The custom designer studio has unrivalled options and the advanced e-commerce suite fosters effective communication with potential customers.',
      Imageurl: 'web2printsoltions_bg.jpg'
    }
  }
}
</script>
