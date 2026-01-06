let nav  = document.getElementsByTagName('nav')[0]

let nav_div = nav.getElementsByTagName("div")[0]

let nav_link = document.createElement('a');

Object.assign(nav_link.className = "nav_link")

Object.assign(nav_link.href = " resource:///@xgui4-addon/addon-page.html")

Object.assign(nav_link.textContent = "Addon Page")

nav_div.append(nav_link)