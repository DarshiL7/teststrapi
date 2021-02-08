import {getMetaTags} from '../utils/meta-tag-builder'
import {getStrapiMedia}  from '../utils/strapi-media'
export default function SeoModule(){
    const { defaultSeo, favicon, siteName } = this.seo.global;
return {
    ...defaultSeo,
    titleTemplate: `%s | ${siteName}`,
    title: this.seo.title,
    meta: getMetaTags(this.seo),
    link: [
      {
        rel: "favicon",
        href: getStrapiMedia(favicon.url),
      },
    ],
}

}