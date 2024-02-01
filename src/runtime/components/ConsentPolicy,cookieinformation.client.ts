import { defineComponent, h, Fragment } from 'vue'
import { useRuntimeConfig } from '#imports'

export default defineComponent(
  () => {
    return () => {
      const { cookieConsent: config } = useRuntimeConfig().public

      // @ts-ignore
      const culture = config.culture || 'EN'

      return h(Fragment, { key: 'CookiePolicy' }, [
        h('script', {
          id: 'CookiePolicy',
          src: 'https://policy.app.cookieinformation.com/cid.js',
          type: 'text/javascript',
          'data-culture': culture,
        }),
      ])
    }
  },
  {
    props: [],
  },
)
