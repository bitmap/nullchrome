# nullchrome
Clean slate club.

#### THIS EXTENSION _CAN_ AND _WILL_ DELETE YOUR BROWSING DATA

_nullchrome_ is a Chrome extension focused on making chrome as annoyingly private as possible. It *WILL*:

- Clear some extraneous browsing data (and history)
- Disable autofill, save password, search/spelling/translation suggestion settings
- Disable most 'phone home' features of Google Chrome
- Block a bunch of annoying content settings like location, notifications, and unsandboxed plugins
- Replace the new tab bage with a blank one

It can't disable everything, so make sure to check your browser settings for those not available via Chrome's JavaScript API.

This data is cleared when you click the extension icon or close all windows.

## Install

Download the source and unzip it somewhere. In your Chrome extension menu, enable 'developer mode' and then click the 'Load unpacked extension...' button. Point it to the nullchrome directory.


## Whitelist
I've included an option to whitelist some cookies. You'll have to modify `src/nullchrome.js` by adding sites to a whitelist array and setting `contentSettings.cookies` to `session_only`.

```js
const cookieWhitelist = [
  'google.com',
  'amazon.com',
  'github.com'
]
```

Cookies from these domains won't be deleted when you quit your browser, so you'll stay logged in.
