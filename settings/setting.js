function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    theme: document.querySelector("#theme").value,
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#theme").value = result.theme || "Default";
  }
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("theme");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);