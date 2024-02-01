import { useState } from '#imports'
import type {
  NuxtCookieConsentState,
  NuxtCookieConsentStateRef,
} from '../types/types'

export function useCookieConsent(): NuxtCookieConsentStateRef {
  return useState<NuxtCookieConsentState>('cookieConsent', () => ({
    necessary: true,
    functional: false,
    statistic: false,
    marketing: false,
    unclassified: false,
  }))
}
