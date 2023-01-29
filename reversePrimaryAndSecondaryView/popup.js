let getSelectedTab = (tabs) => {
  let tabId = tabs[0].id;
  let sendMsg = (messageObj) =>
    chrome.tabs.sendMessage(tabId, messageObj, function (response) {
      if (!chrome.runtime.lastError) {
        alert(chrome.runtime.lastError);
      } else {
        //fine
      }
    });
  document.getElementById("reverse").addEventListener("click", () => sendMsg());
};
chrome.tabs.query({ url: ["https://www.youtube.com/watch?*"] }, getSelectedTab);
