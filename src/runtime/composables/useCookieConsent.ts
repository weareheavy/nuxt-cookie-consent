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
  if (import.meta.client) {
    if (typeof window?.CookieScript?.instance?.show === 'function') {
      window?.CookieScript?.instance?.show?.()
    } else {
      window?.CookieConsent?.renew?.()
    }
  }
}

export function cookieConsentShow(): void {
  if (import.meta.client) {
    if (typeof window?.CookieScript?.instance?.show === 'function') {
      window?.CookieScript?.instance?.show?.()
    } else {
      window?.CookieConsent?.show?.()
    }
  }
}
