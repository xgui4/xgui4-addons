function onError(error) {
  console.error(`Error: ${error}`);
}

function onGot(item) {
  let color = "white";
  if (item.theme == "Dark") {
    color = "black";
  }
  console.timeLog(`Changed the theme to ${theme}`)
  console.warn("Not Implemented YET!")
  // not implemented yet
}

const getting = browser.storage.sync.get("theme");
getting.then(onGot, onError);