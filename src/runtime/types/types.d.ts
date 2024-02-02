export type CookieInformationConsentTypes =
  | 'cookie_cat_necessary'
  | 'cookie_cat_functional'
  | 'cookie_cat_statistic'
  | 'cookie_cat_marketing'
  | 'cookie_cat_unclassified'

interface CookieInformationPayload {
  website_uuid: string
  timestamp: string
  consent_url: string
  consent_website: string
  consent_domain: string
  user_uid: string
  consents_approved: CookieInformationConsentTypes[]
  consents_denied: CookieInformationConsentTypes[]
  user_agent: string
}

// #region consentState
export interface NuxtCookieConsentState {
  necessary: boolean
  functional: boolean
  statistic: boolean
  marketing: boolean
  unclassified: boolean
}

export type NuxtCookieConsentStateRef = Ref<NuxtCookieConsentState>

export type NuxtCookieConsentUseCookieConsent = {
  state: NuxtCookieConsentStateRef
  show: () => void
  renew: () => void
}
// #endregion consentState

/**
 * The `CookieBotPayload` interface defines the structure of the payload that is sent to the Cookiebot
 * service.
 *
 * @see https://www.cookiebot.com/en/developer/#h-properties
 */
export interface CookieBotPayload {
  method: 'implied' | 'explicit' | null
  marketing: boolean
  necessary: boolean
  preferences: boolean
  statistics: boolean
  region: string
  stamp: string
  utc: number
  ver: number
}

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    cookieConsent: NuxtCookieConsentOptions
  }

  interface NuxtConfig {
    cookieConsent: Partial<NuxtCookieConsentOptions>
  }
}

export type NuxtCookieConsentCookieInformationCulture =
  | 'AR'
  | 'LT'
  | 'BG'
  | 'LV'
  | 'CA'
  | 'MS'
  | 'CS'
  | 'NB'
  | 'DA'
  | 'NN'
  | 'DE'
  | 'NO'
  | 'EL'
  | 'NL'
  | 'EN'
  | 'PL'
  | 'ES'
  | 'PT'
  | 'ET'
  | 'RO'
  | 'FI'
  | 'RU'
  | 'FR'
  | 'SK'
  | 'HE'
  | 'SL'
  | 'HI'
  | 'SQ'
  | 'HR'
  | 'SR'
  | 'HU'
  | 'SV'
  | 'ID'
  | 'TH'
  | 'IS'
  | 'TR'
  | 'IT'
  | 'TW'
  | 'JA'
  | 'UK'
  | 'KO'
  | 'VI'
  | 'KL'
  | 'ZH'

type Head = import('@unhead/schema').Head

// #region moduleGeneralOptionsScripts
export type NuxtCookieConsentOptionsScripts = {
  scripts: {
    necessary?: Head['script']
    functional?: Head['script']
    statistic?: Head['script']
    marketing?: Head['script']
    unclassified?: Head['script']
  }
}
// #endregion moduleGeneralOptionsScripts

// #region moduleGeneralOptions
export type NuxtCookieConsentOptionsLoadStrategy = {
  init: boolean
  dev: boolean
}
// #endregion moduleGeneralOptions

// #region moduleGeneralOptionsCookieInformation
export type NuxtCookieConsentOptionsProviderCookieInformation = {
  provider: 'cookieinformation'
  culture?: NuxtCookieConsentCookieInformationCulture
  gcm?: string
}
// #endregion moduleGeneralOptionsCookieInformation

// #region moduleGeneralOptionsCookieBot
export type NuxtCookieConsentOptionsProviderCookieBot = {
  provider: 'cookiebot'
  cbid: string
  consentMode?: boolean
  consentModeDefaults?: boolean
}
// #endregion moduleGeneralOptionsCookieBot

export type NuxtCookieConsentOptionsProvider =
  | NuxtCookieConsentOptionsProviderCookieBot
  | NuxtCookieConsentOptionsProviderCookieInformation

export type NuxtCookieConsentOptions = NuxtCookieConsentOptionsProvider &
  NuxtCookieConsentOptionsScripts &
  NuxtCookieConsentOptionsLoadStrategy
