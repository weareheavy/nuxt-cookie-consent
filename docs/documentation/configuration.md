# Configuration

To start using the module you have to have [configured a provider](/documentation#configure-your-provider).

Currently this module supports [Cookieinformation](https://cookieinformation.com) and [CookieBot](https://cookiebot.com). An account for the respective service is required.

## General configuration

| Property |  Type      | Default |  Description                           |
| -------- | ---------- | ------- | -------------------------------------- |
| init     | `Boolean`  |  `true` | Initialize the provider script on load |
|  dev     |  `Boolean` | `false` | Run code when in development mode      |

## Type declaration
<<< @/../src/runtime/types/types.d.ts#moduleGeneralOptions{typescript}

## Scripts
You can configure which scripts loads for each consent category.
Each category accepts an array of script definitions. It uses the same interface as 

```typescript
export default defineNuxtConfig(() => {
    // ...
    cookieConsent: {
        scripts: {
            necessary: [
                {
                    id: 'uniqeId',
                    src: 'https://example.com/script.js'
                }
            ],
        }
    }
})
```

### Categories
Below are the listed categories for wich you can add scripts for autoloading.
If you want to know more about the different categories, and get more in depth understanding of the differences, take a look at the [EU Cookies directive page](https://gdpr.eu/cookies/).

| Property     |  Description                                                                                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| functional   | These cookies allow a website to remember choices you have made in the past, like what language you prefer, what region you would like weather reports for, or what your user name and password are so you can automatically log in. |
| marketing    | These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.                                                                                             |
| necessary    | These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site.                                                                                                          |
| statistic    | Also known as “performance cookies,” these cookies collect information about how you use a website, like which pages you visited and which links you clicked on.                                                                     |
| unclassified | These are not an official type of cookies. But many providees offers a state for unclassified cookes. Generally this shouldn't be used.                                                                                              |

## Type Declaration
<<< @/../src/runtime/types/types.d.ts#moduleGeneralOptionsScripts{typescript}
