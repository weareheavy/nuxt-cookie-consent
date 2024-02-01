import {
  addComponent,
  addImportsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import { defu } from 'defu'
import type { NuxtModule } from '@nuxt/schema'
import type { NuxtCookieConsentOptions } from './runtime/types/types'

export const nuxtConsentProviders = ['cookieinformation', 'cookiebot']

const module: NuxtModule<NuxtCookieConsentOptions> =
  defineNuxtModule<NuxtCookieConsentOptions>({
    meta: {
      name: 'nuxt-cookie-consent',
      configKey: 'cookieConsent',
    },
    // Default configuration options of the Nuxt module
    defaults: {
      provider: 'cookieinformation',
      culture: 'EN',
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

      nuxt.options.runtimeConfig.public.cookieConsent = defu<
        NuxtCookieConsentOptions,
        [NuxtCookieConsentOptions]
      >(nuxt.options.runtimeConfig.public.cookieConsent || {}, options)

      const provider = nuxt.options.runtimeConfig.public.cookieConsent.provider

      if (!nuxtConsentProviders.includes(provider)) {
        throw new Error(
          `The cookie consent provider "${provider}" is not supported. Please choose one of the following providers: ${nuxtConsentProviders.join(`, `)}`,
        )
      }

      addImportsDir(resolver.resolve(`./runtime/composables`))

      addComponent({
        name: 'nuxt-cookie-consent-policy',
        filePath: resolver.resolve(
          `./runtime/components/ConsentPolicy,${provider}.client`,
        ),
        mode: 'client',
      })

      addPlugin(resolver.resolve(`./runtime/plugins/${provider}.plugin`))
    },
  })

export default module
