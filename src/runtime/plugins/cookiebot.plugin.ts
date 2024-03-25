import {
  defineNuxtPlugin,
  useCookie,
  useCookieConsent,
  useHead,
  useRuntimeConfig,
} from '#imports'
import consola from 'consola'
import type { CookieBotPayload } from '../types/types'
import { loadScripts } from '../utils/script.loader'
import { updateState } from '../utils/update.state'

export default defineNuxtPlugin(() => {
  const { cookieConsent: config } = useRuntimeConfig().public

  if (!config.init || (!config.dev && process.dev)) {
    return
  }

  if (config.init) {
    // @ts-ignore
    const cbid = config.cbid

    if (!cbid) {
      consola.warn(
        'Unable to initialize CookieBot script: No Cookiebot CBID provided. Please set the `cbid` option in "cookieConsent" in `nuxt.config.js`',
      )
    } else {
      // @ts-ignore
      const consentMode = config.consentMode

      // @ts-ignore
      const consentModeDefaults = config.consentModeDefaults

      useHead({
        script: [
          {
            id: 'CookieBot',
            src: `https://consent.cookiebot.com/uc.js?cbid=${cbid}`,
            async: true,
            type: 'text/javascript',
            tagPriority: 5,
            'data-consentmode': !consentMode ? 'disabled' : undefined,
            'data-consentmode-defaults': !consentModeDefaults
              ? 'disabled'
              : undefined,
          },
        ],
      })
    }
  }

  const cookie = useCookie<CookieBotPayload | null>('CookieConsent', {
    decode: (value: string) => {
      try {
        return JSON.parse(
          decodeURIComponent(value || '{}')
            .replace(/'/g, '"')
            .replace(/([{[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
        ) as CookieBotPayload
      } catch {
        return null
      }
    },
  })

  const { state } = useCookieConsent()

  if (cookie.value) {
    updateState(state, {
      necessary: cookie.value.necessary || false,
      functional: cookie.value.preferences || false,
      statistic: cookie.value.statistics || false,
      marketing: cookie.value.marketing || false,
      unclassified: false,
    })
  }

  if (import.meta.client) {
    window.addEventListener('CookiebotOnAccept', () => {
      if (!window?.Cookiebot?.consent) {
        return
      }

      updateState(state, {
        necessary: window.Cookiebot.consent.necessary || false,
        functional: window.Cookiebot.consent.preferences || false,
        statistic: window.Cookiebot.consent.statistics || false,
        marketing: window.Cookiebot.consent.marketing || false,
        unclassified: false,
      })
    })
  }

  loadScripts(config)
})
