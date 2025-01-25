chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "FETCH_DATA") {
    fetch("http://localhost:3000/api/data")
      .then((response) => response.json())
      .then((data) => {
        sendResponse({ success: true, data });
      })
      .catch((error) => {
        sendResponse({ success: false, error: error.message });
      });
    return true; // Keeps the message channel open for async response
  }
});
// no idea about any of this tbh
