// contentScript.js
function removeTags() {
  const tags = document.querySelectorAll('[class="notranslate lang-en"]');
  tags.forEach((tag) => {
    tag.removeAttribute('class');
  });
}

removeTags();
