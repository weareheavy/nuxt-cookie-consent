interface Window {
  CookieInformation: CookieInformation
  CookieConsent: WindowCookieConsentInteractions
  Cookiebot: CookieBot
}

interface CookieInformation {
  getConsentGivenFor: (category: string) => boolean
}

interface WindowCookieConsentInteractions {
  renew: () => void
  show: () => void
}

/**
 * The `CookieBot` interface defines the structure of the Cookiebot object that is available on the
 * @see https://www.cookiebot.com/en/developer/#h-methods
 */
interface CookieBot {
  consent: {
    necessary: boolean
    preferences: boolean
    statistics: boolean
    marketing: boolean
    method: 'implied' | 'explicit' | null
  }

  regulations: {
    gdprApplies: boolean
    ccpaApplies: boolean
    lgpdApplies: boolean
  }
  consented: boolean
  declined: boolean
  hasResponse: boolean
  doNotTrack: boolean
  show: () => void
  hide: () => void
  renew: () => void
  getScript: (url: string, async?: boolean, callback?: () => void) => void
  runScripts: () => void
  withdraw: () => void
  submitCustomConsent: (
    optinPreferences: boolean,
    optinStatistics: boolean,
    optinMarketing: boolean,
  ) => void
}
