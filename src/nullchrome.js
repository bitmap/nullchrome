const {
  browsingData,
  contentSettings,
  privacy
} = chrome


const block = [
  'location',
  'popups',
  'notifications',
  'unsandboxedPlugins'
]

const ask = [
  'microphone',
  'camera',
  'automaticDownloads',
  'unsandboxedPlugins'
]

const primaryPattern = '<all_urls>'

// clear all browsing data except cookies
// (cookies are still cleared every session, except those whitelisted)
function nullify() {
  browsingData.remove({
    'since': 0,
    'originTypes': {
      'protectedWeb': true
    }
  }, {
    'appcache': false,
    'cache': false,
    'cookies': false,
    'downloads': true,
    'fileSystems': true,
    'formData': true,
    'history': true,
    'indexedDB': true,
    'localStorage': false,
    'serverBoundCertificates': false,
    'passwords': true,
    'pluginData': true,
    'webSQL': true
  })
}

// Set to 'session_only' if enabling whitelist
contentSettings.cookies.set({
  primaryPattern,
  setting: 'allow'
})

// const cookieWhitelist = [
//   'google.com',
//   'github.com',
//   'amazon.com',
//   'deploybot.com'
// ]

// for (var i = 0; i < cookieWhitelist.length; i++) {
//   contentSettings['cookies'].set({
//     primaryPattern: '*://*.' + cookieWhitelist[i] + '/*',
//     setting: 'allow'
//   })
// }

// block settings
for (var i = 0; i < block.length; i++) {
  contentSettings[block[i]].set({
    primaryPattern,
    setting: 'block'
  })
}

// ask settings
for (var i = 0; i < ask.length; i++) {
  contentSettings[ask[i]].set({
    primaryPattern,
    setting: 'ask'
  })
}

contentSettings.plugins.set({
  primaryPattern,
  setting: 'detect_important_content'
})

// network privacy settings
privacy.network.networkPredictionEnabled.set({
  value: false
})

// service privacy settings
privacy.services.alternateErrorPagesEnabled.set({
  value: false
})
privacy.services.autofillEnabled.set({
  value: false
})
privacy.services.passwordSavingEnabled.set({
  value: false
})
privacy.services.searchSuggestEnabled.set({
  value: false
})
privacy.services.safeBrowsingEnabled.set({
  value: true
})
privacy.services.safeBrowsingExtendedReportingEnabled.set({
  value: false
})
privacy.services.spellingServiceEnabled.set({
  value: false
})
privacy.services.translationServiceEnabled.set({
  value: false
})

// website privacy settings
privacy.websites.thirdPartyCookiesAllowed.set({
  'value': false
})
privacy.websites.hyperlinkAuditingEnabled.set({
  'value': false
})
privacy.websites.referrersEnabled.set({
  'value': false
})
privacy.websites.doNotTrackEnabled.set({
  'value': true
})

chrome.browserAction.onClicked.addListener(nullify)
chrome.windows.onRemoved.addListener(nullify)
