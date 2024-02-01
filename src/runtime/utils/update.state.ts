import type { Ref } from 'vue'
import type { NuxtCookieConsentState } from '../types/types'

export function updateState(
  state: Ref<NuxtCookieConsentState>,
  consents: Record<keyof NuxtCookieConsentState, boolean>,
) {
  for (const key in consents) {
    state.value[key as keyof NuxtCookieConsentState] =
      consents[key as keyof NuxtCookieConsentState]
  }
}
