import {
  defineNuxtPlugin,
  useCookie,
  useCookieConsent,
  useHead,
  useRuntimeConfig,
} from '#imports'
import consola from 'consola'
import type { CookieScriptPayload } from '../types/types'
import { loadScripts } from '../utils/script.loader'
import { updateState } from '../utils/update.state'

export default defineNuxtPlugin(() => {
  const { cookieConsent: config } = useRuntimeConfig().public

  if (!config.init || (!config.dev && process.dev)) {
    return
  }

  if (config.init) {
    // @ts-ignore
    const id = config.id

    if (!id) {
      consola.warn(
        'Unable to initialize CookieScript script: No CookieScript id provided. Please set the `id` option in "cookieConsent" in `nuxt.config.js`',
      )
    } else {
      useHead({
        script: [
          {
            id: 'CookieScript',
            src: `https://cdn.cookie-script.com/s/${id}.js`,
            type: 'text/javascript',
            tagPriority: 5,
          },
        ],
      })
    }
  }

  const cookie = useCookie<CookieScriptPayload | null>('CookieScriptConsent', {
    decode: (value: string) =>
      JSON.parse(
        decodeURIComponent(value || '{ "categories": [] }'),
      ) as CookieScriptPayload | null,
  })

  const { state } = useCookieConsent()

  if (cookie.value) {
    updateState(state, {
      necessary: true,
      functional:
        cookie.value.categories?.includes('functionality') ||
        (cookie.value.categories == undefined &&
          cookie.value.action === 'accept') ||
        false,
      statistic:
        cookie.value.categories?.includes('performance') ||
        (cookie.value.categories == undefined &&
          cookie.value.action === 'accept') ||
        false,
      marketing:
        cookie.value.categories?.includes('targeting') ||
        (cookie.value.categories == undefined &&
          cookie.value.action === 'accept') ||
        false,
      unclassified:
        cookie.value.categories?.includes('unclassified') ||
        (cookie.value.categories == undefined &&
          cookie.value.action === 'accept') ||
        false,
    })
  }

  if (import.meta.client) {
    window.addEventListener('CookieScriptAccept', (e: any) => {
      const categories = e.detail?.categories || []

      updateState(state, {
        necessary: true,
        functional: categories.includes('functionality') || false,
        statistic: categories.includes('performance') || false,
        marketing: categories.includes('targeting') || false,
        unclassified: categories.includes('unclassified') || false,
      })
    })

    window.addEventListener('CookieScriptReject', () => {
      updateState(state, {
        necessary: true,
        functional: false,
        statistic: false,
        marketing: false,
        unclassified: false,
      })
    })

    window.addEventListener('CookieScriptAcceptAll', () => {
      updateState(state, {
        necessary: true,
        functional: true,
        statistic: true,
        marketing: true,
        unclassified: true,
      })
    })
  }

  loadScripts(config)
})
