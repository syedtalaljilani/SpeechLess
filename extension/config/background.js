chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_CURRENT_URL') {
    // Get the current tab and send its URL back to the popup
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const currentUrl = tabs[0].url;
        sendResponse({ url: currentUrl });
      } else {
        sendResponse({ error: 'No active tab found' });
      }
    });
    // Return true to indicate that the response will be sent asynchronously
    return true;
  }
});
