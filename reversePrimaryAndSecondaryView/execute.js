function viewSwitcher() {
  const primary = document.getElementById("primary").parentNode;
  reverseChildren(primary);
}

function reverseChildren(parent) {
  for (var i = 1; i < parent.childNodes.length; i++) {
    parent.insertBefore(parent.childNodes[i], parent.firstChild);
  }
}

const onMessage = (message) => {
  viewSwitcher();
};

chrome.runtime.onMessage.addListener(onMessage);
