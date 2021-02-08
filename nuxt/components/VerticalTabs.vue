<template>
  <div class="dark:bg-black-0 py-24">
    <div class="text-center pb-8">
      <h2>Software Development Services</h2>
    </div>
    <div class="xl:container mx-auto flex flex-wrap w-full items-stretch">
      <div class="w-full md:w-1/3">
        <ul class="flex mb-0 list-none flex-wrap pt-3 flex-col px-3 w-full mb-12">
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="horiz-tab-items"
              @click="toggleTabs(0)"
              v-bind:class="{
              'text-black border-transparent': openTab !== 0,
              'text-primary border-primary': openTab === 0,
            }"
            >Software Development</a>
          </li>
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="horiz-tab-items"
              @click="toggleTabs(1)"
              v-bind:class="{
              'text-black border-transparent': openTab !== 1,
              'text-primary border-primary': openTab === 1,
            }"
            >Application Development</a>
          </li>
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="horiz-tab-items"
              @click="toggleTabs(2)"
              v-bind:class="{
              'text-black border-transparent': openTab !== 2,
              'text-primary border-primary': openTab === 2,
            }"
            >Cloud Application Development</a>
          </li>
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="horiz-tab-items"
              @click="toggleTabs(3)"
              v-bind:class="{
              'text-black border-transparent': openTab !== 3,
              'text-primary border-primary': openTab === 3,
            }"
            >DevOps Services</a>
          </li>
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="horiz-tab-items"
              @click="toggleTabs(4)"
              v-bind:class="{
              'text-black border-transparent': openTab !== 4,
              'text-primary border-primary': openTab === 4,
            }"
            >Application Modernization</a>
          </li>
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="horiz-tab-items"
              @click="toggleTabs(5)"
              v-bind:class="{
              'text-black border-transparent': openTab !== 5,
              'text-primary border-primary': openTab === 5,
            }"
            >Testing and Quality Assurance</a>
          </li>
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="horiz-tab-items"
              @click="toggleTabs(6)"
              v-bind:class="{
              'text-black border-transparent': openTab !== 6,
              'text-primary border-primary': openTab === 6,
            }"
            >Mobile App Development</a>
          </li>
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="horiz-tab-items"
              @click="toggleTabs(7)"
              v-bind:class="{
              'text-black border-transparent': openTab !== 7,
              'text-primary border-primary': openTab === 7,
            }"
            >Hire Dedicated Developers</a>
          </li>
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="horiz-tab-items"
              @click="toggleTabs(8)"
              v-bind:class="{
              'text-black border-transparent': openTab !== 8,
              'text-primary border-primary': openTab === 8,
            }"
            >UI/UX Services</a>
          </li>
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="horiz-tab-items"
              @click="toggleTabs(9)"
              v-bind:class="{
              'text-black border-transparent': openTab !== 9,
              'text-primary border-primary': openTab === 9,
            }"
            >Embedded Software</a>
          </li>
          <li class="flex-auto text-left py-2 mx-0">
            <a
              class="text-primary border-l-0 border-b-2 border-primary text-xl ml-5 cursor-pointer font-poppins-SemiBold m-0"
            >View All</a>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-2/3">
        <VtabContent :openTab="openTab" :EmbededSoftware="EmbededSoftware" />
      </div>
    </div>
  </div>
</template>

<script>
import VtabContent from '~/components/VtabContent'
export default {
  components: {
    VtabContent
  },

  data() {
    return {
      openTab: 0,
      EmbededSoftware: [
        {
          title: 'Software Development',
          desc:
            "<a href='/asd'> Full-cycle</a> development of scalable <b>software solutions</b> to drive business transformation. Leverage our deep technical expertise,functional knowledge and development insights to build cutting-edge custom software solutions.<h3>Our <a href='#'> devlopment services</a></h3>",
          list: [
            { listdata: 'Custom Software Development' },
            { listdata: 'Software Outsourcing' },
            { listdata: 'Software Product Development' },
            { listdata: 'Digital Transformation' },
            { listdata: 'Software Consulting' },
            { listdata: 'Project Rescue' },
            { listdata: 'Enterprise Mobility' },
            { listdata: 'Maintenance and Support' },
            { listdata: 'Software Architecture' }
          ],
          link: 'Build Software'
        },
        {
          title: 'Web Application Development',
          desc:
            'Next-generation web application development to get greater flexibility, agility and growth. Unlock potential of emerging tech with our extensive expertise in Application Modernization, Cloud Application and Application Management.',
          list: [
            { listdata: 'Custom Application Development' },
            { listdata: 'Application Integration' },
            { listdata: 'Application Modernization' },
            { listdata: 'Ecommerce Development' },
            { listdata: 'Application Management' },
            { listdata: 'CMS Website Development' },
            { listdata: 'Cloud Application Development' }
          ],
          link: 'Create Application'
        },
        {
          title: 'Cloud Application Development',
          desc:
            'Robust Cloud application development leveraging AWS, Azure, and Google Cloud. Build, re-platform and integrate applications with our developers well versed in cloud-oriented security approaches to achieve faster time-to-market.',
          list: [
            { listdata: 'Cloud Assessment Consulting' },
            { listdata: 'Cloud Monitoring and Maintenance' },
            { listdata: 'SaaS Implementations' },
            { listdata: 'Amazon Web Services Development' },
            { listdata: 'Cloud Integration Services' },
            { listdata: 'Azure Development' },
            { listdata: 'Application Migration to Cloud' }
          ],
          link: 'Migrate to Cloud'
        },
        {
          title: 'DevOps Services',
          desc:
            'Full-cycle software solutions to optimize business infrastructures and overall project budget. End-to-end development of resilient software solutions at the pace of business with inclusive DevOps services for secure software ecosystem.',
          list: [
            { listdata: 'DevOps Consulting' },
            { listdata: 'Environment set-up and implementation' },
            { listdata: 'Infrastructure testing and release set-up' },
            { listdata: 'DevOps Management' },
            { listdata: 'DevOps Assessment' },
            { listdata: 'Maintenance and support' },
            { listdata: 'DevOps Automation' }
          ],
          link: 'Scale with DevOps'
        },
        {
          title: 'Application Modernization',
          desc:
            'Transform your legacy applications to more agile and powerful through emerging technologies. Inclusive re-engineering services to help you with modernization and technology upgradation. Infuse high performance with powerful web applications.',
          list: [
            { listdata: 'Application Portfolio Assessment' },
            { listdata: 'Mainframe Modernization' },
            { listdata: 'Application Re-engineering' },
            { listdata: 'Performance Optimization' },
            { listdata: 'Application Cloud Enablement' },
            { listdata: 'Application Migration' }
          ],
          link: 'Modernize Applications'
        },
        {
          title: 'Testing and Quality AssuranceDevOps Services',
          desc:
            'Brilliant Software Testing and QA services for smooth deployment. Extensive automated and manual testing processes for accurate information on product quality. Software testing and QA services for high-quality project implementation.',
          list: [
            { listdata: 'QA Consulting' },
            { listdata: 'Performance Testing' },
            { listdata: 'Full Cycle QA' },
            { listdata: 'Managed Testing' },
            { listdata: 'Test Automation' },
            { listdata: 'QA Outsourcing' },
            { listdata: 'Custom Testing' }
          ],
          link: 'Analyse Software'
        },
        {
          title: 'Mobile App Development',
          desc:
            'Best-in-class Android and Swift developers for mobile application development. Intuitive and easy-to-navigate mobile apps development for driving user satisfaction. Build custom mobile apps, cross-platform or hybrid apps.',
          list: [
            { listdata: 'Custom Mobile Application' },
            { listdata: 'Android App Development' },
            { listdata: 'Cross-Platform App Development' },
            { listdata: 'Flutter App Development' },
            { listdata: 'Hybrid Apps Development' },
            { listdata: 'Progressive Web Apps' },
            { listdata: 'iOS Development Services' },
            { listdata: 'Hire Mobile App Developers' }
          ],
          link: 'Build Mobile App'
        },
        {
          title: 'Hire Dedicated Developers',
          desc:
            'Cross-functional team with proven development capabilities dedicated to your project. Hire dedicated remote developers, programmers, and experts on flexible hiring models. We have 450+ experienced in-house professionals to scale faster.',
          list: [
            { listdata: 'Software Developers' },
            { listdata: 'Node.js Developers' },
            { listdata: 'ASP.Net Developers' },
            { listdata: 'Angular JS Developers' },
            { listdata: 'Full Stack Developers' },
            { listdata: 'React.js Developers' },
            { listdata: 'Frontend Developers' },
            { listdata: 'PHP Developers' }
          ],
          link: 'Hire Developers'
        },
        {
          title: 'UI/UX Services',
          desc:
            'UI/UX design services for visually rich applications and excellent user experience online. Enable striking designs and innovation-led interfaces with our in-depth two-decade long experience in software design, web and mobile apps.',
          list: [
            { listdata: 'UI and UX Consulting' },
            { listdata: 'Visual Design' },
            { listdata: 'Web Design and Development' },
            { listdata: 'Interaction Design' },
            { listdata: 'Mobile Design and Development' },
            { listdata: 'UI Testing' }
          ],
          link: 'Create Intuitive Design'
        },
        {
          title: 'Embedded Software',
          desc:
            'Agile and secure embedded software crafted to dictate specific device functions. World-class build quality leveraged to develop intuitive embedded solutions with consistent response timings to outperform business functions.',
          list: [
            { listdata: 'Embedded Product Development' },
            { listdata: 'BSP and OS Porting' },
            { listdata: 'Embedded Software Development' },
            { listdata: 'WHQL Certification' },
            { listdata: 'Embedded Hardware Development' },
            { listdata: 'Manufacturing Execution Systems' },
            { listdata: 'Device Driver Development' }
          ],
          link: 'Develop Firmware'
        }
      ]
    }
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber
    }
  }
}
</script>


<style>
/* .horiz-tab-items {
  @apply block py-0 pl-4 cursor-pointer relative text-xl font-poppins-SemiBold border-l-4 m-0 ;
}
.horiz-tab-content {
  @apply flex flex-col justify-center items-center m-2 rounded-md transition-all duration-500;
}
.bullet-orange-round{
  @apply absolute left-0 mt-2 w-2 h-2 bg-primary mr-4 rounded-xl;
} */
</style>