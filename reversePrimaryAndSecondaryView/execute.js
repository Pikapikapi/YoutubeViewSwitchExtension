
function viewSwitcher(message) {
  const primary = document.getElementById("primary").parentNode;
  reverseChildren(primary);
}

function reverseChildren(parent) {
  for (var i = 1; i < parent.childNodes.length; i++) {
    parent.insertBefore(parent.childNodes[i], parent.firstChild);
  }
}

const onMessage = (message) => {
  switch (message.actions) {
    case "REVERSE":
      viewSwitcher("REVERSE");
      break;
  }
};

chrome.runtime.onMessage.addListener(onMessage);
