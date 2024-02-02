import { useState } from '#imports'
import type {
  NuxtCookieConsentState,
  NuxtCookieConsentUseCookieConsent,
} from '../types/types'

export function useCookieConsent(): NuxtCookieConsentUseCookieConsent {
  const state = useState<NuxtCookieConsentState>('cookieConsent', () => ({
    necessary: true,
    functional: false,
    statistic: false,
    marketing: false,
    unclassified: false,
  }))

  return {
    state,
    renew: cookieConsentRenew,
    show: cookieConsentShow,
  }
}

export function cookieConsentRenew(): void {
  if (process.client) {
    window?.CookieConsent?.renew?.()
  }
}

export function cookieConsentShow(): void {
  if (process.client) {
    window?.CookieConsent?.show?.()
  }
}
