function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  let color = "white";
  if (item.theme == "Dark") {
    color = "black";
  }
  console.timeLog(`Change the theme to ${theme}`)
  console.info("Not Implemented YET!")
  // not implemented yet
}

const getting = browser.storage.sync.get("theme");
getting.then(onGot, onError);