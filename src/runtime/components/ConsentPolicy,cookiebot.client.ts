import { defineComponent, h, Fragment } from 'vue'
import { useRuntimeConfig } from '#imports'

export default defineComponent(
  () => {
    return () => {
      const { cookieConsent: config } = useRuntimeConfig().public

      // @ts-ignore
      const cbid = config.cbid

      if (!cbid) {
        return h(Fragment, { key: 'CookiePolicy' })
      }

      return h(Fragment, { key: 'CookiePolicy' }, [
        h('script', {
          id: 'CookieDeclaration',
          src: `https://consent.cookiebot.com/${cbid}/cd.js`,
          type: 'text/javascript',
          async: true,
        }),
      ])
    }
  },
  {
    props: [],
  },
)
