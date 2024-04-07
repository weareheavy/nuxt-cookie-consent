import {
  addComponent,
  addImportsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import { defu } from 'defu'
import type { NuxtModule } from '@nuxt/schema'
import type {
  NuxtCookieConsentOptions,
  NuxtCookieConsentOptionsProviderCookieInformation,
} from './runtime/types/types'

export const nuxtConsentProviders = [
  'cookieinformation',
  'cookiebot',
  'cookiescript',
]

const module: NuxtModule<NuxtCookieConsentOptions> =
  defineNuxtModule<NuxtCookieConsentOptions>({
    meta: {
      name: 'nuxt-cookie-consent',
      configKey: 'cookieConsent',
    },
    // Default configuration options of the Nuxt module
    defaults: {
      provider: 'cookieinformation',
      init: true,
      dev: false,
      scripts: {
        necessary: [],
        functional: [],
        statistic: [],
        marketing: [],
        unclassified: [],
      },
    },
    setup(options, nuxt) {
      const resolver = createResolver(import.meta.url)

      let config = defu<NuxtCookieConsentOptions, [NuxtCookieConsentOptions]>(
        nuxt.options.runtimeConfig.public.cookieConsent || {},
        options,
      )

      const provider = config.provider

      if (provider === 'cookiebot') {
        config = defu(config, {
          consentMode: true,
          consentModeDefaults: true,
        })
      } else if (provider === 'cookieinformation') {
        config = defu<
          NuxtCookieConsentOptions,
          [Pick<NuxtCookieConsentOptionsProviderCookieInformation, 'culture'>]
        >(config, {
          culture: 'EN',
        })
      }

      nuxt.options.runtimeConfig.public.cookieConsent = config

      if (!nuxtConsentProviders.includes(provider)) {
        throw new Error(
          `The cookie consent provider "${provider}" is not supported. Please choose one of the following providers: ${nuxtConsentProviders.join(`, `)}`,
        )
      }

      addImportsDir(resolver.resolve(`./runtime/composables`))

      addComponent({
        name: 'nuxt-cookie-consent-policy',
        filePath: resolver.resolve(
          `./runtime/components/ConsentPolicy.${provider}.client`,
        ),
        mode: 'client',
      })

      addPlugin(resolver.resolve(`./runtime/plugins/${provider}.plugin`))
    },
  })

export default module
