# nullchrome
Clean slate club.

#### THIS EXTENSION _CAN_ AND _WILL_ DELETE YOUR BROWSING DATA

_nullchrome_ is a Chrome extension focused on making chrome as annoyingly private as possible. It *WILL*:

- Clear all browsing data*, including cookies, localStorage, cache, downloads, passwords, and more
- Disable autofill, save password, search/spelling/translation suggestion settings
- Disable most 'phone home' features of Google Chrome
- Block a bunch of content settings like location, notifications, and unsandboxed plugins
- Replace the new tab bage with a blank one

It can't disable everything, so make sure to check your browser settings for those not available via Chrome's JavaScript API.

_* Clicking the icon or closing the browser will delete most data. Cookies are only cleared when you quit._

## Install

Download the source and unzip it somewhere. In your Chrome extension menu, check the 'developer mode' box at the top and then the 'Load unpacked extension...' button. Point it to the nullchrome directory.


## Whitelist
Not all of the internet is bad, so I've included an option to whitelist some cookies. You'll have to modify `src/nullchrome.js` by adding sites to a whitelist array (yeah, I know, in a future release this won't be so annoying).

```js
const cookieWhitelist = [
  'google.com',
  'amazon.com',
  'github.com'
]
```

Cookies from these domains won't be deleted when you quit your browser, so you'll stay logged in.
