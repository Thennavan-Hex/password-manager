// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("Message received in background script:", message);
  
  // You can perform additional logic here based on the message received
  
  // Send a response back if needed
  sendResponse({ received: true });
});
