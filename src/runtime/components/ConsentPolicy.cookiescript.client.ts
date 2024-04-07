import { defineComponent, h, Fragment } from 'vue'
import { useRuntimeConfig } from '#imports'

export default defineComponent(
  () => {
    return () => {
      const { cookieConsent: config } = useRuntimeConfig().public

      // @ts-ignore
      const id = config.id

      if (!id) {
        return h(Fragment, { key: 'CookiePolicy' })
      }

      return h(Fragment, { key: 'CookiePolicy' }, [
        h('script', {
          id: 'CookiePolicy',
          src: `https://report.cookie-script.com/r/${id}.js`,
          type: 'text/javascript',
          'data-cookiescriptreport': 'report',
          charset: 'UTF-8',
        }),
      ])
    }
  },
  {
    props: [],
  },
)
