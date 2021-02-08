<template>
  <main class="wp__content">
    <fiftyContent :imgrightcontleft="imgleftcont" />
    <headSection :headcontent="headsection" />
    <threecards :content="threeCard" />
    <verticaltabs />
    <div class="xl:container mx-auto">
      <Performance :content="performanceval" />
    </div>
    <getintouch />
    <clientSlider :clientslider="clientcarousel" />
  </main>
</template>

<script>
import heroSection from '~/components/herosection'
import headSection from '~/components/sectionhead'
import getintouch from '~/components/GetInTouch'
import fiftyContent from '~/components/fiftycontent'
import Performance from '~/components/Performance'
import threecards from '~/components/card'
import clientSlider from '~/components/clientSlider'
import verticaltabs from '~/components/VerticalTabs'

export default {
  components: {
    fiftyContent,
    headSection,
    Performance,
    getintouch,
    clientSlider,
    threecards,
    verticaltabs
  },
  data() {
    return {
      isTogglevalue: true,
      imgleftcont: [
        {
          headingfirst: 'Software Development to Accelerate Growth',
          paragraph:
            'Custom software development at the speed of now to help you unlock scalability and strategic agility. Rely on Radixweb to build predictable, fast and secure software systems.',
          /*    imgsrc: '', */
          paraSize: 'lg:text-2xl text-lg'
        }
      ],
      headsection: [
        {
          heading:
            'Software Consulting and Development to Up Your Competitive Status Quo',
          paragraph:
            'Custom software development at the speed of now to help you unlock scalability and strategic agility. Rely on Radixweb to build predictable, fast and secure software systems.'
        }
      ],
      performanceval: [
        {
          fontsize: 'text-2xl',
          heading: 'Infuse Operational Excellence',
          para:
            'Maximize your desired business output with real-time monitoring and visibility into how processes evolve and where to focus and optimize.'
        },
        {
          fontsize: 'xl:text-xl text-2xl',
          heading: 'Gain Powerful Insights',
          para:
            'Know exactly how your company is performing. With smart and data backed decisions solve potential problems before they happen.'
        },
        {
          fontsize: 'text-2xl',
          heading: 'Unified Customer Experience',
          para:
            'Deliver consistently great experience. Communicate, engage and promote in innovative ways to enable connected customer experience and loyalty.'
        },
        {
          fontsize: 'text-2xl',
          heading: 'Create New Opportunities',
          para:
            'Unlock your business potential, value-driven path and new possibilities with measurable, monitorable and data-driven discipline at speed.'
        }
      ],
      threeCard: [
        {
          cardHeading: 'Software Development Outsourcing',
          cardpara:
            'Relieve your in-house IT team of unnecessary burdens. Build cost-effective, software solutions for targeted business functions in record time-to-market.',
          cardimg: require('@/assets/images/Software-Development-Outsourcing.svg'),
          imgwidth: '75',
          imgheight: '75',
          cardlink: 'Outsource to Outsmart '
        },
        {
          cardHeading: 'Custom Software Development',
          cardpara:
            'Address complex business concerns with bespoke software solutions. Leverage our expertise in custom development to solve business issues and drive ROI.',
          cardimg: require('@/assets/images/Software-Product-01.svg'),
          imgwidth: '75',
          imgheight: '75',
          cardlink: '#'
        },
        {
          cardHeading: 'Software Product Development',
          cardpara:
            'Turn your software visions into reality with end-to-end software product development powered by emerging technology and our unmatched development abilities.',
          cardimg: require('@/assets/images/Custom-Software-Development.svg'),
          imgwidth: '75',
          imgheight: '75',
          cardlink: '<a href="/asd">HELLO WORLD</a>'
        }
      ],
      contentspartner: [
        {
          cardimg: require('@/assets/images/Custom-Software-Development.svg'),
          imgwidth: '75',
          imgheight: '75'
        }
      ],
      clientcarousel: [
        {
          sliderimg: require('@/assets/images/virtual.jpg'),
          imgwidth: '106',
          imgheight: '62'
        },
        {
          sliderimg: require('@/assets/images/studer.jpg'),
          imgwidth: '118',
          imgheight: '62'
        },
        {
          sliderimg: require('@/assets/images/incident-Control.jpg'),
          imgwidth: '118',
          imgheight: '62'
        },
        {
          sliderimg: require('@/assets/images/stiglerPrinting.jpg'),
          imgwidth: '118',
          imgheight: '30'
        },
        {
          sliderimg: require('@/assets/images/imaginasium.jpg'),
          imgwidth: '118',
          imgheight: '36'
        },
        {
          sliderimg: require('@/assets/images/firesprint.jpg'),
          imgwidth: '118',
          imgheight: '26'
        },
        {
          sliderimg: require('@/assets/images/eCAT.png'),
          imgwidth: '68',
          imgheight: '68'
        },
        {
          sliderimg: require('@/assets/images/easydisk.jpg'),
          imgwidth: '130',
          imgheight: '28'
        },
        {
          sliderimg: require('@/assets/images/compact.jpg'),
          imgwidth: '118',
          imgheight: '36'
        },
        {
          sliderimg: require('@/assets/images/colorcopiesusa.jpg'),
          imgwidth: '118',
          imgheight: '23'
        },
        {
          sliderimg: require('@/assets/images/barr-credit-services.png'),
          imgwidth: '118',
          imgheight: '40'
        },
        {
          sliderimg: require('@/assets/images/aps-marketing-group.jpg'),
          imgwidth: '130',
          imgheight: '28'
        }
      ]
    }
  }
  /*   methods: {
    toggledark() {
      if (this.isTogglevalue == true) {
        document.querySelector('html').classList.add('dark bg-black-0')
        this.isTogglevalue = false
      } else {
        document.querySelector('html').classList.remove('dark bg-black-0')
        this.isTogglevalue = true
      }
    }
  } */
}
</script>
  