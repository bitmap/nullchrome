// cookie whitelist
const cookieWhitelist = [
  // 'google.com',
  // 'github.com'
]

const blockProps = [
  'location',
  'popups',
  'notifications',
  'unsandboxedPlugins'
]

const askProps = [
  'microphone',
  'camera',
  'automaticDownloads'
]

const all = '<all_urls>'

// clear all browsing data except cookies
// (cookies are still cleared every session, except those whitelisted)
function nullify () {
  chrome.browsingData.remove({
    'since': 0,
    'originTypes': {
      'protectedWeb': true
    }
  }, {
    'appcache': true,
    'cache': true,
    'cookies': false,
    'downloads': true,
    'fileSystems': true,
    'formData': true,
    'history': true,
    'indexedDB': true,
    'localStorage': true,
    'serverBoundCertificates': true,
    'passwords': true,
    'pluginData': true,
    'webSQL': true
  })
}

// clear all session cookies...
chrome.contentSettings['cookies'].set({
  primaryPattern: all,
  setting: 'session_only'
})

// ...except these cookies
for (var i = 0; i < cookieWhitelist.length; i++) {
  chrome.contentSettings['cookies'].set({
    primaryPattern: '*://*.' + cookieWhitelist[i] + '/*',
    setting: 'allow'
  })
}

// block settings
for (var i = 0; i < blockProps.length; i++) {
  chrome.contentSettings[blockProps[i]].set({
    primaryPattern: all,
    setting: 'block'
  })
}

// ask settings
for (var i = 0; i < askProps.length; i++) {
  chrome.contentSettings[askProps[i]].set({
    primaryPattern: all,
    setting: 'ask'
  })
}

// network privacy settings
chrome.privacy.network.networkPredictionEnabled.set({
  value: false
})

// service privacy settings
chrome.privacy.services.alternateErrorPagesEnabled.set({
  value: false
})
chrome.privacy.services.autofillEnabled.set({
  value: false
})
chrome.privacy.services.hotwordSearchEnabled.set({
  value: false
})
chrome.privacy.services.passwordSavingEnabled.set({
  value: false
})
chrome.privacy.services.searchSuggestEnabled.set({
  value: false
})
chrome.privacy.services.safeBrowsingEnabled.set({
  value: true
})
chrome.privacy.services.safeBrowsingExtendedReportingEnabled.set({
  value: false
})
chrome.privacy.services.spellingServiceEnabled.set({
  value: false
})
chrome.privacy.services.translationServiceEnabled.set({
  value: false
})

// website privacy settings
chrome.privacy.websites.thirdPartyCookiesAllowed.set({
  'value': false
})
chrome.privacy.websites.hyperlinkAuditingEnabled.set({
  'value': false
})
chrome.privacy.websites.referrersEnabled.set({
  'value': false
})

chrome.browserAction.onClicked.addListener(nullify)
chrome.windows.onRemoved.addListener(nullify)
