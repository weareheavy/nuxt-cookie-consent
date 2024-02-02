import { useHead } from '#imports'
import type {
  NuxtCookieConsentOptions,
  NuxtCookieConsentOptionsScripts,
  NuxtCookieConsentState,
} from '../types/types'

import { useCookieConsent } from '../composables/useCookieConsent'

export function loadScripts(config: NuxtCookieConsentOptions): void {
  const { state } = useCookieConsent()

  useHead(() => {
    const scripts: NuxtCookieConsentOptionsScripts['scripts']['necessary'] = []

    for (const key in state.value) {
      if (state.value[key as keyof NuxtCookieConsentState]) {
        scripts.push(
          ...(config.scripts?.[key as keyof NuxtCookieConsentState] || []),
        )
      }
    }

    return {
      script: scripts,
    }
  })
}
