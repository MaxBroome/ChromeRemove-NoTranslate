// popup.js
document.addEventListener('DOMContentLoaded', function() {
  const removeButton = document.getElementById('removeButton');
  removeButton.addEventListener('click', removeTags);

  function removeTags() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: removeTagsFunction
      });
    });
  }

  function removeTagsFunction() {
    const tags = document.querySelectorAll('[class="notranslate lang-en"]');
    tags.forEach((tag) => {
      tag.removeAttribute('class');
    });
  }
});
