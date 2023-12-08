chrome.tabs.query({}, function(tabs) {
  if (tabs.length === 1) {
 case "CLOSE_TAB":
    null;
    break;
  }
});

chrome.tabs.onCreated.addListener(function(tab) {
  if (tabs.length=== 1) {
    case "CLOSE_TAB":
    null;
    break;
  }
});

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
  chrome.tabs.query({}, function(tabs) {
    if (tabs.length !== 1) {
      case "CLOSE_TAB":
       if (currentTab && currentTab.id !== chrome.tabs.TAB_ID_NONE) {
        chrome.tabs.remove(currentTab.id);
      }
      break;
    }
  });
});
