import {
  defineNuxtPlugin,
  useCookie,
  useCookieConsent,
  useHead,
  useRuntimeConfig,
} from '#imports'
import type { CookieInformationPayload } from '../types/types'
import { loadScripts } from '../utils/script.loader'
import { updateState } from '../utils/update.state'

export default defineNuxtPlugin(() => {
  const { cookieConsent: config } = useRuntimeConfig().public

  if (!config.init || (!config.dev && process.dev)) {
    return
  }

  if (config.init) {
    // @ts-ignore
    const culture = config.culture || 'EN'
    // @ts-ignore
    const gcm: string | undefined = config.gcm

    useHead({
      script: [
        {
          id: 'CookieConsent',
          src: 'https://policy.app.cookieinformation.com/uc.js',
          type: 'text/javascript',
          tagPriority: 5,
          'data-culture': culture,
          'data-gcm-version':
            typeof gcm === 'string' && gcm.length > 0 ? gcm : undefined,
        },
      ],
    })
  }

  const cookie = useCookie<CookieInformationPayload | null>(
    'CookieInformationConsent',
    {
      decode: (value: string) =>
        JSON.parse(
          decodeURIComponent(value || '{ "consents_approved": [] }'),
        ) as CookieInformationPayload | null,
    },
  )

  const { state } = useCookieConsent()

  if (cookie.value) {
    updateState(state, {
      necessary: cookie.value.consents_approved.includes(
        'cookie_cat_necessary',
      ),
      functional: cookie.value.consents_approved.includes(
        'cookie_cat_functional',
      ),
      statistic: cookie.value.consents_approved.includes(
        'cookie_cat_statistic',
      ),
      marketing: cookie.value.consents_approved.includes(
        'cookie_cat_marketing',
      ),
      unclassified: cookie.value.consents_approved.includes(
        'cookie_cat_unclassified',
      ),
    })
  }

  if (import.meta.client) {
    window.addEventListener('CookieInformationConsentGiven', () => {
      if (!window?.CookieInformation?.getConsentGivenFor) {
        return
      }

      updateState(state, {
        necessary: !!window.CookieInformation.getConsentGivenFor(
          'cookie_cat_necessary',
        ),
        functional: !!window.CookieInformation.getConsentGivenFor(
          'cookie_cat_functional',
        ),
        statistic: !!window.CookieInformation.getConsentGivenFor(
          'cookie_cat_statistic',
        ),
        marketing: !!window.CookieInformation.getConsentGivenFor(
          'cookie_cat_marketing',
        ),
        unclassified: !!window.CookieInformation.getConsentGivenFor(
          'cookie_cat_unclassified',
        ),
      })
    })
  }

  loadScripts(config)
})
